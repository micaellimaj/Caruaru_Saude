from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('cadastro/', views.cadastro, name='cadastro'),
    path('index/', views.index, name="index"),
    path('login/', views.login, name="login"),
    path('cadastro_instituicao', views.cadastro_instituicao, name="cadastro_instituicao"),
    path('plataforma', views.plataforma, name="plataforma") # SÓ PARA QUEM ESTÁ
]



