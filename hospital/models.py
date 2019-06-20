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

