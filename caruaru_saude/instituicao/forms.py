from django import forms
from .models import Appointment

class AppointmentForm(forms.ModelForm):
    class Meta:
        model = Appointment
        fields = ['service', 'professional', 'datetime']
        
        ''' widgets = {
            'datetime': forms.DateTimeInput(attrs={'class': 'datetimepicker'}),
        }
'''
       