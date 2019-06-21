from django.db import models

# Create your models here.
class Paciente(models.Model):
    rut = models.CharField(max_length=10)
    nombre = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=70)
    edad = models.IntegerField()

    def __str__(self):
        return self.rut

class Medico(models.Model):
    rut = models.CharField(max_length=10)
    nombre = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=70)
    email = models.EmailField()

    def __str__(self):
        return self.apellidos

class Examen(models.Model):
    cod_examen = models.AutoField(primary_key=True)
    rut_entidad = models.CharField(max_length=20)
    rut_paciente = models.CharField(max_length=20)
    fecha_solicitud = models.DateField(auto_now_add=True, null=True)
    fecha_entrega = models.DateField(blank=False, null=True)
    estado = models.CharField(max_length=200)
    rut_especialista = models.CharField(max_length=20)

    def str(self):
        return self.cod_examen
