from django import forms
from .models import Appointment
from django.contrib.auth.models import User

class AppointmentForm(forms.ModelForm):
    class Meta:
        model = Appointment
        fields = ['service', 'professional', 'datetime']
        
        
class InstitutionProfileForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'email']
        widgets = {
            'username': forms.TextInput(attrs={'readonly': 'readonly'}),
            'email': forms.EmailInput(attrs={'readonly': 'readonly'}),
        }

class InstitutionDetailsForm(forms.Form):
    nome = forms.CharField(max_length=100)
    endereco = forms.CharField(max_length=255)
    telefone = forms.CharField(max_length=15)
    whatsapp = forms.CharField(max_length=15)
    instagram = forms.CharField(max_length=100)
    senha = forms.CharField(widget=forms.PasswordInput, required=False)