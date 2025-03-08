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

        
        user = User.objects.filter(username=username).first()
        if user:
            messages.error(request, 'Já existe um usuário com esse username.')
            return render(request, 'instituicao/cadastro_instituicao.html')

        user = User.objects.create_user(username=username, email=email, password=senha)
        
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
                return redirect('instituicao') 
            elif hasattr(user, 'usuario'):
                return redirect('usuario')  
            messages.error(request, 'Usuário não identificado')
            return render(request, 'instituicao/login_i.html')
        else:
            messages.error(request, 'Email ou senha inválidos')
            return render(request, 'instituicao/login_i.html')

            
# View da página de instituição (após o login)
@login_required(login_url="/auth/login_i/")
def instituicao(request):
    user = request.user 
    try:
        instituicao = user.instituicao  
    except Instituicao.DoesNotExist:
        return redirect("login_i")  
    
    consultas = Appointment.objects.filter(is_booked=True)
    


    if request.method == "POST":
        appointment_id = request.POST.get("appointment_id")
        appointment = get_object_or_404(Appointment, id=appointment_id)
        appointment.delete()
        return redirect("instituicao")

    paginator = Paginator(consultas, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    return render(request, 'instituicao/instituicao.html', {'page_obj': page_obj})

@login_required(login_url="/auth/login_i/")
def instituicao_view(request):
    user = request.user 
    try:
        instituicao = user.instituicao  
    except Instituicao.DoesNotExist:
        return redirect("login_i")
    
    consultas_nao_marcadas = Appointment.objects.filter(is_booked=False)
    
    consultas_marcadas = Appointment.objects.all()
    
    paginator_nao_marcadas = Paginator(consultas_nao_marcadas, 10)
    page_number_nao_marcadas = request.GET.get('page')
    page_obj_nao_marcadas = paginator_nao_marcadas.get_page(page_number_nao_marcadas)
    
    paginator_marcadas = Paginator(consultas_marcadas, 10)
    page_number_marcadas = request.GET.get('page')
    page_obj_marcadas = paginator_marcadas.get_page(page_number_marcadas)

    return render(request, 'instituicao/instituicao.html', {
        'page_obj_nao_marcadas': page_obj_nao_marcadas,
        'page_obj_marcadas': page_obj_marcadas
    })

# View de agendamentos
@login_required(login_url="/auth/login_i/")
def appointment_view(request):
    if request.method == 'POST':
        form = AppointmentForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Agendamento cadastrado com sucesso!")
            return redirect('instituicao')
    else:
        form = AppointmentForm()

    return render(request, 'instituicao/instituicao.html', {'form': form})

@login_required(login_url="/auth/login_i/")
def excluir_agendamento(request, appointment_id):

    appointment = get_object_or_404(Appointment, id=appointment_id)
    appointment.delete()
    
    return redirect('instituicao')


login_required(login_url="/auth/login_i/")
def marcar_consulta(request, appointment_id):
    try:
        appointment = Appointment.objects.get(id=appointment_id)
        
        if appointment.is_booked:
            messages.error(request, 'Este agendamento já foi marcado.')
            return redirect('consulta_view')

        appointment.is_booked = True
        appointment.user = request.user
        appointment.save()

        messages.success(request, 'Consulta marcada com sucesso!')
        return redirect('lista_agendamentos_usuario')
    except Appointment.DoesNotExist:
        messages.error(request, 'Agendamento não encontrado.')
        return redirect('consulta_view')


@login_required(login_url="/auth/login_i/")
def consulta_view(request):
    appointments = Appointment.objects.filter(is_booked=False)

    paginator = Paginator(appointments, 7)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    return render(request, 'consult/consulta.html', {'page_obj': page_obj})



@login_required(login_url="/auth/login_i/")
def delete_appointment(request, appointment_id):
    appointment = get_object_or_404(Appointment, id=appointment_id)
    appointment.delete()
    return redirect(reverse('instituicao'))

@login_required(login_url="/auth/login_i/")
def instituicao_detalhes(request):
    instituicao = get_object_or_404(Instituicao, user=request.user)  
    user = request.user

    if request.method == "POST":
        instituicao.nome = request.POST.get('nome')
        instituicao.endereco = request.POST.get('endereco')
        instituicao.telefone = request.POST.get('telefone')
        instituicao.whatsapp = request.POST.get('whatsapp')
        instituicao.instagram = request.POST.get('instagram')
        
        instituicao.save()

        senha = request.POST.get('senha')
        if senha:
            user.set_password(senha)
            user.save()
            update_session_auth_hash(request, user)

        return redirect('instituicao')

    return render(request, 'instituicao/detalhes.html', {'instituicao': instituicao})


def logout_view_intituicao(request):
    logout(request)
    return redirect('instituicao/login_i')


