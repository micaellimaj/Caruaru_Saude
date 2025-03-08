from django.db import models
from django.contrib.auth.models import User


class Appointment(models.Model):
    SERVICE_CHOICES = [
        ('Consulta Médica', 'Consulta Médica'),
        ('Exame Laboratorial', 'Exame Laboratorial'),
        ('Vacinação', 'Vacinação'),
    ]

    service = models.CharField(max_length=50, choices=SERVICE_CHOICES)
    professional = models.CharField(max_length=100)
    datetime = models.DateTimeField()
    is_booked = models.BooleanField(default=False)  
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)  
    instituicao = models.ForeignKey('Instituicao', on_delete=models.CASCADE,null=True, blank=True)  


    def __str__(self):
        return f"Agendamento de {self.service} com {self.professional} em {self.datetime}"
    
class Instituicao(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)  
    nome = models.CharField(max_length=100)
    endereco = models.CharField(max_length=255)
    telefone = models.CharField(max_length=20)
    whatsapp = models.CharField(max_length=20, blank=True, null=True)
    instagram = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.nome