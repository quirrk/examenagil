from django import forms
from .models import Solicitud

class SolicitudForm(forms.ModelForm):
    
    class Meta:
        model = Solicitud
        fields = ('id_solicitud','tipo_solicitud','rut_cliente','correo_contacto')