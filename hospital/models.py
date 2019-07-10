from django.db import models
from datetime import datetime

TIPOSOLI = (
    ('Kinesiología', 'Kinesiología'),
    ('Oftalmología', 'Oftalmología'),
    ('Otorrinolaringología', 'Otorrinolaringología')
)

ESTADO_SOLI = (
    ('Enviada', 'Enviada'),
    ('En espera','En espera'),
    ('Finalizada','Finalizada')
)

class Medico(models.Model):
    rut = models.CharField(max_length=10)
    nombreComp = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nombreComp

class Solicitud(models.Model):
    id_solicitud = models.AutoField(primary_key=True)
    tipo_solicitud = models.CharField(max_length=20, choices=TIPOSOLI)
    rut_cliente = models.CharField(max_length=11)
    correo_contacto = models.CharField(max_length=40, null=False,default="")
    fecha_serv = models.DateTimeField(null=True)
    medico_encargado = models.ForeignKey('Medico', on_delete=models.CASCADE, null=True)
    estado =  models.CharField(max_length=20, choices=ESTADO_SOLI, default="Enviada")
    def valor(self):
        if self.tipo_solicitud == 'Kinesiología':
            return 150000
        elif self.tipo_solicitud == 'Oftalmología':
            return 100000
        elif self.tipo_solicitud == 'Otorrinolaringología':
            return 200000
        else:
            return 0
    valor = property(valor)

    def __str__(self):
        return self.rut_cliente