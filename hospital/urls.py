from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('/agendar', views.agendar, name='agendar'),
    path('/paciente', views.paciente, name='paciente'),
    path('/medico', views.medico, name='medico'),
    path('/examenes_doc', views.examenes_doc, name='examenes_doc'),

]