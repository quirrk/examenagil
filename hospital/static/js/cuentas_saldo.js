function soli_alert(){
    alert("Solicitud enviada correctamente")
}

(function() {
    var app = {
        cuentas : [],
    }
    var rut_pac = document.getElementById('rut_pac').innerHTML;
    var loadData = function(){
        var xhttp = new XMLHttpRequest();
        var url = "https://criterion1.pythonanywhere.com/cuenta_bancaria/";

        xhttp.onreadystatechange = function(){
            if( this.readyState == 4 && this.status == 200){
                var data = JSON.parse( this.responseText );
                mostrarCuentas( data.results );
                app.cuentas = data.results;
            }
        }
        xhttp.open( 'GET', url, true);
        xhttp.send();
    }

    var mostrarCuentas = function( cuentas ){
        var etiquetaSaldo = document.getElementById("saldo_cli");

        for ( let ex of cuentas ){
            console.log(ex.id_usuario)
            if(ex.id_usuario == rut_pac){
                etiquetaSaldo.innerHTML = ex.saldo;
            }
        }
    }
    loadData();
})();