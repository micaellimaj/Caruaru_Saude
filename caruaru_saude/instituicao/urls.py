from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('cadastro_instituicao/', views.cadastro_instituicao, name='cadastro_instituicao'),
    path('login_i/', views.login_i, name='login_i'),
    path('instituicao/', views.instituicao, name='instituicao'),
    path('auth/login_i/', views.login_i, name='login_i')
]