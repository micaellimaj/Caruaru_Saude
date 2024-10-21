from django.shortcuts import render
from django.http import HttpResponse 
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login as login_django
from django.contrib.auth.decorators import login_required

def index(request):
    return render(request, 'index.html')

def consulta(request):
    return render(request, 'consulta.html')

def cadastro(request):
    if request.method ==  "GET":
        return render(request, 'cadastro.html')
    else:
        username = request.POST.get('username')
        email = request.POST.get('email')
        senha = request.POST.get('senha')

        user = User.objects.filter(username=username).first()

        if user:
            return HttpResponse('Já existe um usuário com esse username')
        
        user = User.objects.create_user(username=username, email=email, password=senha)
        user.save()

        return HttpResponse("Usuário Cadastrado com sucesso")

def login(request):
    if request.method == 'GET':
        return render(request, 'login.html')
    else:
        username = request.POST.get('username')
        senha = request.POST.get('senha')

        user = authenticate(username=username, password=senha)

        if user:
            login_django(request, user)

            return HttpResponse('autenticado')
        else:
            return HttpResponse('Email ou senha inválidos')

@login_required(login_url="/auth/login/")     
def plataforma(request):
    return HttpResponse('plataforma')