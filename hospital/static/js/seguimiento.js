(function() {
    var app = {
        pedidos : [],
    }

    var loadData = function(){
        var xhttp = new XMLHttpRequest();
        var url = "https://criterion1.pythonanywhere.com/seguimiento/";

        xhttp.onreadystatechange = function(){
            if( this.readyState == 4 && this.status == 200){
                console.log( this.responseText );
                var data = JSON.parse( this.responseText );
                mostrarPedidos( data.results );
                app.pedidos = data.results;
            }
        }
        xhttp.open( 'GET', url, true);
        xhttp.send();
    }

    var mostrarPedidos = function( pedidos ){
        var contenedorPedido = document.getElementById("pedidoSelected");
        contenedorPedido.innerHTML = "";
      

        for ( let ex of pedidos ){
            console.log(ex);
            console.log(ex.id_cliente)

            if(ex.id_cliente == rut_pac && ex.estado=="En curso"){
                var idODT = document.createElement("p");
                var idClient = document.createElement("p");
                var fechaSoli = document.createElement("p");
                var esta = document.createElement("p");
                var unPedido = document.createElement("div");
                unPedido.className = "unPedido";
                
                idODT.innerHTML = "ODT: "+ex.id_odt;
                idClient.innerHTML = "Rut Cliente: "+ex.id_cliente;
                fechaSoli.innerHTML = "Fecha Solicitud: "+ex.fecha_soli;
                esta.innerHTML = "Estado Solicitud: "+ex.estado
    
                unPedido.appendChild( idODT );
                unPedido.appendChild( idClient );
                unPedido.appendChild( fechaSoli );
                unPedido.appendChild( esta );
                contenedorPedido.appendChild( unPedido );
            }

           

        }
        
    }
    loadData();
})();