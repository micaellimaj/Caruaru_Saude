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
    is_booked = models.BooleanField(default=False)  # Novo campo para indicar se está marcada
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)  # Relaciona com o usuário que marcou a consulta, se necessário


    def __str__(self):
        return f"Agendamento de {self.service} com {self.professional} em {self.datetime}"