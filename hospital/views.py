from django.shortcuts import render
from .forms import SolicitudForm
from .models import Solicitud, Medico
from django.shortcuts import redirect
from django.db.models import Sum

# Create your views here.
def index(request):
    return render(request, 'hospital/index.html', {})

def solicitud(request):
    soli_hist = Solicitud.objects.all()
    return render(request, 'hospital/solicitud.html', {'soli_hist':soli_hist})

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
    username = None
    if request.user.is_authenticated:
        username = request.user.username
    soli_histo = Solicitud.objects.filter(estado__contains="En espera")
    horas = Solicitud.objects.filter(medico_encargado__rut=username)
    calculo_doc = 0
    for h in horas:
        calculo_doc = int(calculo_doc) + int( int(h.valor))
    return render(request, 'hospital/mis_soli.html', {'soli_histo':soli_histo,'calculo_doc':calculo_doc})

#def suma_mensual(request):
#    total = Solicitud.objects.filter(estado__contains="En espera").aggregate(tot=Sum('valor'))
#    return render(request, 'hospital/recaudacion.html', {'total':total})

def suma_total(request):
    horas = Solicitud.objects.all()
    contar = Solicitud.objects.all().count()
    calculo = 0
    for h in horas:
        calculo = int(calculo) + int( int(h.valor))
    return render(request, 'hospital/recaudacion.html', {'calculo':calculo,'contar':contar})

def recaudoc(request):
    username = None
    if request.user.is_authenticated:
        username = request.user.username
    soli_histo = Solicitud.objects.all()
    horas = Solicitud.objects.filter(medico_encargado__rut=username)
    calculo_doc = 0
    for h in horas:
        calculo_doc = int(calculo_doc) + int( int(h.valor))
    return render(request, 'hospital/recaudaciondoc.html', {'soli_histo':soli_histo,'calculo_doc':calculo_doc})