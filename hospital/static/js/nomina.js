(function() {
    var app = {
        nomina : [],
    }

    var loadData = function(){
        var xhttp = new XMLHttpRequest();
        var url = "https://nicolini.pythonanywhere.com/listaexamenes/";

        xhttp.onreadystatechange = function(){
            if( this.readyState == 4 && this.status == 200){
                console.log( this.responseText );
                var data = JSON.parse( this.responseText );
                mostrarNomina( data.results );
                app.nomina = data.results;
            }
        }
        xhttp.open( 'GET', url, true);
        xhttp.send();
    }

    var mostrarNomina = function( nomina ){
        var contenedorNomina = document.getElementById("nominaSelected");
        contenedorNomina.innerHTML = "";
        var unaNomina = document.createElement("div");
        unaNomina.className = "miNomina";
        for ( let nom of nomina ){
            var codExamen = document.createElement("label");
            var nombre = document.createElement("label");

            console.log(nom);
            
            codExamen.innerHTML = "Código Examen: "+nom.cod_examen;
            nombre.innerHTML = "Nombre Examen: "+nom.nombre;

            unaNomina.appendChild( codExamen );
            unaNomina.appendChild( nombre );
            contenedorNomina.appendChild( unaNomina );

        }
    }
    loadData();
})();