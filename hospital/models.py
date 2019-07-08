from django.db import models
from datetime import datetime

TIPOSOLI = (
    ('Mantencion', 'Mantencion'),
    ('Reparacion', 'Reparacion'),
)

ESTADO_SOLI = (
    ('En espera','En espera'),
    ('En Curso','En Curso'),
    ('Finalizada','Finalizada')
)

class Tecnico(models.Model):
    rut = models.CharField(max_length=10)
    nombreComp = models.CharField(max_length=100)
    

    def __str__(self):
        return self.nombreComp

class Solicitud(models.Model):
    id_solicitud = models.AutoField(primary_key=True)
    tipo_solicitud = models.CharField(max_length=20, choices=TIPOSOLI)
    rut_cliente = models.CharField(max_length=11)
    desc_soli = models.CharField(max_length=300,null=False)
    correo_contacto = models.CharField(max_length=40, null=False,default="")
    direccion_solicitud_servicio = models.CharField(max_length=80,null=False,default="")
    fecha_serv = models.DateTimeField(null=True)
    tecnico_encargado = models.ForeignKey('Tecnico', on_delete=models.CASCADE, null=True)
    estado =  models.CharField(max_length=20, choices=ESTADO_SOLI, default="En espera")

    def __str__(self):
        return self.rut_cliente

