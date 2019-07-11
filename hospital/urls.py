from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('solicitud', views.solicitud, name='solicitud'),
    path('add_soli', views.add_soli, name='add_soli'),
    path('mis_soli', views.mis_soli, name='mis_soli'),
    path('recaudacion', views.suma_total, name='suma_total'),
]