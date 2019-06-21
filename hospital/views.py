from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'hospital/index.html', {})

def agendar(request):
    return render(request, 'hospital/agendar.html', {})

def paciente(request):
    return render(request, 'hospital/paciente.html', {})

def medico(request):
    return render(request, 'hospital/medico.html', {})
