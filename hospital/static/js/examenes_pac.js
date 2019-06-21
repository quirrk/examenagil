(function() {
    var app = {
        examenes : [],
    }

    var loadData = function(){
        var xhttp = new XMLHttpRequest();
        var url = "https://servet.pythonanywhere.com/examenes/";

        xhttp.onreadystatechange = function(){
            if( this.readyState == 4 && this.status == 200){
                console.log( this.responseText );
                var data = JSON.parse( this.responseText );
                mostrarExamen( data.results );
                app.examenes = data.results;
            }
        }
        xhttp.open( 'GET', url, true);
        xhttp.send();
    }

    var mostrarExamen = function( examenes ){
        var contenedorExamen = document.getElementById("examenSelected");
        contenedorExamen.innerHTML = "";
        var unExamen = document.createElement("div");
        unExamen.className = "miExamen";

        for ( let ex of examenes ){
            console.log(ex.rut_paciente)
            if(ex.rut_paciente == rut_pac){
                var codExamen = document.createElement("label");
                var rutent = document.createElement("label");
                var rutpac = document.createElement("label");
                var fecsol = document.createElement("label");
                var fecent = document.createElement("label");
                var estado = document.createElement("label");
                var rutesp = document.createElement("label");
    
                console.log(ex);
                
                codExamen.innerHTML = "Código Examen: "+ex.cod_examen;
                rutent.innerHTML = "Rut Entidad: "+ex.rut_entidad;
                rutpac.innerHTML = "Rut Paciente: "+ex.rut_paciente;
                fecsol.innerHTML = "Fecha Solicitud: "+ex.fecha_solicitud;
                fecent.innerHTML = "Fecha Entrega: "+ex.fecha_entrega;
                estado.innerHTML = "Estado: "+ex.estado;
                rutesp.innerHTML = "Rut Especialista: "+ex.rut_especialista;
    
                unExamen.appendChild( codExamen );
                unExamen.appendChild( rutent );
                unExamen.appendChild( rutpac );
                unExamen.appendChild( fecsol );
                unExamen.appendChild( fecent );
                unExamen.appendChild( estado );
                unExamen.appendChild( rutesp );
                contenedorExamen.appendChild( unExamen );
            }

           

        }
        
    }
    loadData();
})();