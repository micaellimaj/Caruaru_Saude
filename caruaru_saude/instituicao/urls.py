from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from .views import appointment_view



urlpatterns = [
    path('cadastro_instituicao/', views.cadastro_instituicao, name='cadastro_instituicao'),
    path('login_i/', views.login_i, name='login_i'),
    #path('instituicao/', views.instituicao, name='instituicao'),
    #path('auth/login_i/', views.login_i, name='login_i'),
    path('agendamento/', views.appointment_view, name='appointment_view'),
    path('excluir-agendamento/<int:appointment_id>/', views.excluir_agendamento, name='excluir_agendamento'),
    path('consulta/', views.consulta_view, name='consulta_view'),
    path('marcar-consulta/<int:appointment_id>/', views.marcar_consulta, name='marcar_consulta'),
    path('delete_appointment/<int:appointment_id>/', views.delete_appointment, name='delete_appointment'),
    path('instituicao/detalhes/', views.instituicao_detalhes, name='instituicao_detalhes'),
    path('logout/', views.logout_view_intituicao, name='logout_instituicao'),
    path('instituicao/', views.instituicao_view, name='instituicao'),

]