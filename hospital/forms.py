from django import forms
from .models import Solicitud

class SolicitudForm(forms.ModelForm):
    
    class Meta:
        model = Solicitud
<<<<<<< HEAD
        fields = ('id_solicitud','tipo_solicitud','rut_cliente','desc_soli','correo_contacto','direccion_solicitud_servicio')
=======
        fields = ('id_solicitud','tipo_solicitud','rut_cliente','correo_contacto')
>>>>>>> features
