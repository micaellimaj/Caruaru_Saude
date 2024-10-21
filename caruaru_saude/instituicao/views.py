from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login as login_django
from django.contrib.auth.decorators import login_required
from .models import Appointment
from .forms import AppointmentForm

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
            return redirect('instituicao')  # Redireciona para a view 'instituicao'
        else:
            return HttpResponse('Email ou senha inválidos')

# View da página de instituição (após o login)
@login_required(login_url="/auth/login_i/")
def instituicao(request): 
    # Busca todos os agendamentos (opcional)
    appointments = Appointment.objects.all()
    # Renderiza a página de instituição com a lista de agendamentos
    return render(request, 'instituicao/instituicao.html', {'appointments': appointments})

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

# Lista de agendamentos (pode ser renderizado na mesma página ou em uma página separada)
@login_required(login_url="/auth/login_i/")
def lista_agendamentos_view(request):
    # Busca todos os agendamentos no banco de dados
    appointments = Appointment.objects.all()

    # Renderiza a página com a lista de agendamentos
    return render(request, 'instituicao/lista_agendamentos.html', {'appointments': appointments})
