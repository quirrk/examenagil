(function() {
    var app = {
        inventario : [],
    }

    var loadData = function(){
        var xhttp = new XMLHttpRequest();
        var url = "https://criterion1.pythonanywhere.com/inventario/";

        xhttp.onreadystatechange = function(){
            if( this.readyState == 4 && this.status == 200){
                console.log( this.responseText );
                var data = JSON.parse( this.responseText );
                mostrarInventario( data.results );
                app.inventario = data.results;
            }
        }
        xhttp.open( 'GET', url, true);
        xhttp.send();
    }

    var mostrarInventario = function( inventario ){
        var contenedorInventario = document.getElementById("inventarioSelected");
        contenedorInventario.innerHTML = "";
        var unInventario = document.createElement("div");
        unInventario.className = "unInventario";

        for ( let ex of inventario ){
            console.log(ex);
            console.log(ex.id_arti_invent)
            var unInventario = document.createElement("div");
            unInventario.className = "unInventario";

            var idInve = document.createElement("p");
            var idArticInve = document.createElement("a");
            idArticInve.href = ex.id_arti_invent
            var cantDispo = document.createElement("p");
            
            idInve.innerHTML = "ID Inventario: "+ex.id_inventario;
            idArticInve.innerHTML = "Articulo: "+ex.id_arti_invent;
            cantDispo.innerHTML = "Cantidad disponible: "+ex.cant_dispo;

            unInventario.appendChild( idInve );
            unInventario.appendChild( idArticInve );
            unInventario.appendChild( cantDispo );
            contenedorInventario.appendChild( unInventario );

        }
        
    }
    loadData();
})();