from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('cadastro/', views.cadastro, name='cadastro'),
    path('index/', views.index, name="index"),
    path('login/', views.login, name="login"),
    path('lista_agendamentos_usuario/', views.lista_agendamentos_usuario, name='lista_agendamentos_usuario'),
    path('usuario/', views.usuario, name="usuario"),
    path('agendar_consulta/<int:appointment_id>/', views.agendar_consulta, name='agendar_consulta'),  # Correção aqui
    path('catalogo/', views.catalogo, name='catalogo'),
    path('logout/', views.logout_view, name='logout'),
]

