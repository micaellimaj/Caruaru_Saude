from django.db import models

class Appointment(models.Model):
    SERVICE_CHOICES = [
        ('Consulta Médica', 'Consulta Médica'),
        ('Exame Laboratorial', 'Exame Laboratorial'),
        ('Vacinação', 'Vacinação'),
    ]

    service = models.CharField(max_length=50, choices=SERVICE_CHOICES)
    professional = models.CharField(max_length=100)
    datetime = models.DateTimeField()

    def __str__(self):
        return f"Agendamento de {self.service} com {self.professional} em {self.datetime}"