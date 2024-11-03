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




# Cadastro da instituição
def cadastro_instituicao(request):
    if request.method == "GET":
        return render(request, 'instituicao/cadastro_instituicao.html')
    else:
        username = request.POST.get('username')
        email = request.POST.get('email')
        nome = request.POST.get('nome')
        endereco = request.POST.get('endereco')
        telefone = request.POST.get('telefone')
        whatsapp = request.POST.get('whatsapp')
        senha = request.POST.get('senha')
        instagram = request.POST.get('instagram')

        user = User.objects.filter(username=username).first()

        if user:
            return HttpResponse('Já existe um usuário com esse username')
        
        user = User.objects.create_user(username=username, email=email, password=senha)
        user.save()

        return HttpResponse("Usuário Cadastrado com sucesso")

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
            return redirect('instituicao/instituicao')  # Redireciona para a view 'instituicao'
        else:
            return HttpResponse('Email ou senha inválidos')

# View da página de instituição (após o login)
    
@login_required(login_url="/auth/login_i/")
def instituicao(request):
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
