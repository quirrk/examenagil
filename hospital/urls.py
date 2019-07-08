from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('comprar', views.comprar, name='comprar'),
    path('pedidos', views.pedidos, name='pedidos'),
    path('solicitud', views.solicitud, name='solicitud'),
    path('add_soli', views.add_soli, name='add_soli'),
    path('mis_soli', views.mis_soli, name='mis_soli'),
    path('inventario', views.inventario, name='inventario'),
]