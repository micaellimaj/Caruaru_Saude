from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse 
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login as login_django
from django.contrib.auth.decorators import login_required
from django.contrib.auth import update_session_auth_hash
from instituicao.models import Appointment
from django.contrib.auth import logout
from .models import Usuario
from django.contrib import messages


def index(request):
    return render(request, 'index.html')

def catalogo(request):
    return render(request, 'catalogo.html')

def cadastro(request):
    if request.method ==  "GET":
        return render(request, 'cadastro.html')
    else:
        username = request.POST.get('username')
        email = request.POST.get('email')
        senha = request.POST.get('senha')

        user = User.objects.filter(username=username).first()

        if user:
            messages.error(request, 'Já existe um usuário com esse username.')
            return render(request, 'cadastro.html')
        
        user = User.objects.create_user(username=username, email=email, password=senha)
        usuario = Usuario.objects.create(
            user=user
        )

        return render(request, 'login.html')

def login(request):
    if request.method == 'GET':
        return render(request, 'login.html')
    else:
        username = request.POST.get('username')
        senha = request.POST.get('senha')

        user = authenticate(username=username, password=senha)

        if user:
            login_django(request, user)

            if hasattr(user, 'usuario'):
                return redirect('usuario')  
            elif hasattr(user, 'instituicao'):
                return redirect('instituicao') 
            messages.error(request, 'Usuário não identificado')
            return render(request, 'login.html')
        else:
            messages.error(request, 'Email ou senha inválidos')
            return render(request, 'login.html')

@login_required(login_url="/auth/login/")
def usuario(request):
    user = request.user
    try:
        usuario = user.usuario
    except Usuario.DoesNotExist:
        return render(request, 'login.html')

    user_appointments = Appointment.objects.filter(user=user, is_booked=True)

    if request.method == "POST":
        username = request.POST.get('username')
        email = request.POST.get('email')
        senha = request.POST.get('senha')

        user.username = username
        user.email = email
        if senha:
            user.set_password(senha)  
        user.save()

        if senha:
            update_session_auth_hash(request, user)

        return redirect('usuario')

    return render(request, 'usuarios/usuario.html', {'user': user, 'appointments': user_appointments})


@login_required(login_url="/auth/login/")
def lista_agendamentos_usuario(request):
    user = request.user
    try:
        usuario = user.usuario
    except Usuario.DoesNotExist:
        return render(request, 'login.html')

    user_appointments = Appointment.objects.filter(user=request.user, is_booked=True)

    return render(request, 'usuarios/usuario.html', {'appointments': user_appointments})

@login_required(login_url="/auth/login/")
def agendar_consulta(request, appointment_id):
    user = request.user
    try:
        usuario = user.usuario
    except Usuario.DoesNotExist:
        return render(request, 'login.html')
    
    appointment = get_object_or_404(Appointment, id=appointment_id)

    if request.method == "POST":
        service = request.POST.get('service')
        professional = request.POST.get('professional')
        datetime = request.POST.get('datetime')

        new_appointment = Appointment.objects.create(
            service=service,
            professional=professional,
            datetime=datetime,
            is_booked=True,
            user=user
        )

        return redirect('usuarios/usuario')

    return render(request, 'consult/consulta.html', {'appointment': appointment})

def logout_view(request):
    logout(request)
    return redirect('index')