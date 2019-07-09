from django.shortcuts import render
from .forms import SolicitudForm
from .models import Solicitud
from django.shortcuts import redirect

# Create your views here.
def index(request):
    return render(request, 'hospital/index.html', {})

def comprar(request):
    return render(request, 'hospital/comprar.html', {})

def pedidos(request):
    return render(request, 'hospital/pedidos.html', {})

def solicitud(request):
    soli_hist = Solicitud.objects.all()
    return render(request, 'hospital/solicitud.html', {'soli_hist':soli_hist})

def inventario(request):
    return render(request, 'hospital/inventario.html', {})

def add_soli(request):
    if request.method == 'POST':
        form = SolicitudForm(request.POST)
        if form.is_valid():
            new_soli = form.save()
            return redirect('index')
    else:
        form = SolicitudForm()

    return render(request,'hospital/solicitud_fin.html',{'form':form})

def mis_soli(request):
    soli_histo = Solicitud.objects.filter(estado__contains="En espera")
    return render(request, 'hospital/mis_soli.html', {'soli_histo':soli_histo})