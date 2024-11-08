from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login as login_django
from django.contrib.auth.decorators import login_required
from .models import Appointment
from .forms import AppointmentForm
from django.core.paginator import Paginator
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.urls import reverse
from .forms import InstitutionProfileForm, InstitutionDetailsForm
from .models import Instituicao
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth import logout


# Cadastro da instituição
def cadastro_instituicao(request):
    if request.method == "GET":
        return render(request, 'instituicao/cadastro_instituicao.html')
    else:
        username = request.POST.get('username')
        email = request.POST.get('email')
        senha = request.POST.get('senha')
        nome = request.POST.get('nome')
        endereco = request.POST.get('endereco')
        telefone = request.POST.get('telefone')
        whatsapp = request.POST.get('whatsapp')
        instagram = request.POST.get('instagram')

        # Verifique se o usuário já existe
        user = User.objects.filter(username=username).first()
        if user:
            return HttpResponse('Já existe um usuário com esse username')

        # Crie o usuário
        user = User.objects.create_user(username=username, email=email, password=senha)
        
        # Crie a instituição associada ao usuário
        instituicao = Instituicao.objects.create(
            user=user,
            nome=nome,
            endereco=endereco,
            telefone=telefone,
            whatsapp=whatsapp,
            instagram=instagram
        )

        return render(request, "instituicao/login_i.html")

# Login da instituição
def login_i(request):
    if request.method == 'GET':
        return render(request, 'instituicao/login_i.html')
    else:
        username = request.POST.get('username')
        senha = request.POST.get('senha')

        user = authenticate(username=username, password=senha)

        if user:
            login_django(request, user)

            if hasattr(user, 'instituicao'):
                # É uma instituicao
                return redirect('instituicao') 
            elif hasattr(user, 'usuario'):
                # É uma usuário
                return redirect('usuario')  
            return HttpResponse('Usuário não identificado')
        else:
            return HttpResponse('Email ou senha inválidos')
            
# View da página de instituição (após o login)
    
@login_required(login_url="/auth/login_i/")
def instituicao(request):
    user = request.user  # Pega o usuário logado
    try:
        instituicao = user.instituicao  # Verifica se o instituicao é um `Instituicao`
    except Instituicao.DoesNotExist:
        return render(request, "instituicao/login_i.html")

    # Busca apenas os agendamentos marcados
    appointments = Appointment.objects.filter(is_booked=True)

    # Paginação: 10 agendamentos por página
    paginator = Paginator(appointments, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    # Renderiza a página de instituição com os agendamentos paginados
    return render(request, 'instituicao/instituicao.html', {'page_obj': page_obj})


# View de agendamentos
@login_required(login_url="/auth/login_i/")
def appointment_view(request):
    if request.method == 'POST':
        form = AppointmentForm(request.POST)
        if form.is_valid():
            form.save()  # Salva os dados do agendamento no banco de dados
            return HttpResponse("Agendamento cadastrado com sucesso!")
    else:
        form = AppointmentForm()

    return render(request, 'instituicao/instituicao.html', {'form': form})


@login_required(login_url="/auth/login_i/")
def excluir_agendamento(request, appointment_id):
    # Busca o agendamento pelo ID e exclui
    appointment = get_object_or_404(Appointment, id=appointment_id)
    appointment.delete()
    
    # Redireciona de volta para a página da instituição após excluir
    return redirect('instituicao')

login_required(login_url="/auth/login_i/")
def marcar_consulta(request, appointment_id):
    try:
        # Busca o agendamento pelo ID
        appointment = Appointment.objects.get(id=appointment_id)
        
        # Verifica se a consulta já foi marcada
        if appointment.is_booked:
            messages.error(request, 'Este agendamento já foi marcado.')
            return redirect('consulta_view')

        # Marcar como agendado
        appointment.is_booked = True
        appointment.user = request.user  # Associa o agendamento ao usuário atual
        appointment.save()

        messages.success(request, 'Consulta marcada com sucesso!')
        return redirect('lista_agendamentos_usuario')  # Redireciona para a página de agendamentos do usuário
    except Appointment.DoesNotExist:
        messages.error(request, 'Agendamento não encontrado.')
        return redirect('consulta_view')


@login_required(login_url="/auth/login_i/")
def consulta_view(request):
    # Busca apenas os agendamentos que não foram marcados
    appointments = Appointment.objects.filter(is_booked=False)

     # Paginação: 10 agendamentos por página
    paginator = Paginator(appointments, 7)  # 10 registros por página
    page_number = request.GET.get('page')  # Pega o número da página a partir da query string
    page_obj = paginator.get_page(page_number)  # Obtém a página específica


    # Renderiza a página de consulta com os agendamentos
    return render(request, 'consult/consulta.html', {'page_obj': page_obj})



@login_required(login_url="/auth/login_i/")
def delete_appointment(request, appointment_id):
    appointment = get_object_or_404(Appointment, id=appointment_id)
    appointment.delete()
    return redirect(reverse('instituicao'))

@login_required(login_url="/auth/login/")
def instituicao_detalhes(request):
    instituicao = get_object_or_404(Instituicao, user=request.user)  # Obtém a instituição do usuário logado
    user = request.user

    if request.method == "POST":
        instituicao.nome = request.POST.get('nome')
        instituicao.endereco = request.POST.get('endereco')
        instituicao.telefone = request.POST.get('telefone')
        instituicao.whatsapp = request.POST.get('whatsapp')
        instituicao.instagram = request.POST.get('instagram')
        
        instituicao.save()  # Salva as alterações no modelo Instituição

        # Atualiza a senha do usuário, se fornecida
        senha = request.POST.get('senha')
        if senha:
            user.set_password(senha)
            user.save()
            # Atualiza a sessão para que o usuário não seja desconectado após mudar a senha
            update_session_auth_hash(request, user)

        return redirect('instituicao')  # Redireciona após atualização

    return render(request, 'instituicao/detalhes.html', {'instituicao': instituicao})

def logout_view_intituicao(request):
    logout(request)
    return redirect('instituicao/login_i')


