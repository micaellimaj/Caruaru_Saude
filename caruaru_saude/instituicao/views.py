from django.shortcuts import render, redirect
from django.http import HttpResponse 
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login as login_django
from django.contrib.auth.decorators import login_required

def cadastro_instituicao(request):
    if request.method ==  "GET":
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

def login_i(request):
    if request.method == 'GET':
        return render(request, 'instituicao/login_i.html')
    else:
        username = request.POST.get('username')
        senha = request.POST.get('senha')

        user = authenticate(username=username, password=senha)

        if user:
            login_django(request, user)
            return redirect('instituicao')  # Redireciona para a view instituicao
        else:
            return HttpResponse('Email ou senha inválidos')

@login_required(login_url="/auth/login_i/")     
def instituicao(request): 
    return render(request, 'instituicao/instituicao.html')
