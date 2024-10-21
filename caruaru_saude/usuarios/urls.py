from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('cadastro/', views.cadastro, name='cadastro'),
    path('index/', views.index, name="index"),
    path('login/', views.login, name="login"),
    path('consulta/', views.consulta, name="consulta"),
    path('plataforma', views.plataforma, name="plataforma") # SÓ PARA QUEM ESTÁ
]



