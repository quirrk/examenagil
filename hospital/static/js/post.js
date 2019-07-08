
function uno(){
    var saldo = document.getElementById('saldo_cli').innerHTML;
    var precio = 150000;
    console.log(saldo)
    console.log(precio)
    var resta = 0;

    if(saldo>=precio){
        resta = saldo-precio;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("PATCH","https://criterion1.pythonanywhere.com/cuenta_bancaria/1/")
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send( JSON.stringify({id_cuenta: rut_pac, saldo: resta}) );
        alert("Solicitud aprobada por su banco.");

        var xmlhttp2 = new XMLHttpRequest();
        xmlhttp2.open("POST","https://criterion1.pythonanywhere.com/seguimiento/")
        xmlhttp2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp2.send( JSON.stringify({id_articulo_seg:"https://criterion1.pythonanywhere.com/articulos/1/", id_cliente: rut_pac, estado: "En curso"}) );
        alert("Compra realizada con éxito, revise tu pestaña de seguimiento.");

    }else{
        if(saldo<precio){
            alert("No tienes saldo suficiente en tu cuenta para realizar esta compra");
        }else{
            alert("Ha ocurrido un error al procesar tu compra, por davor intenta nuevamente");
        }
    }
        
}

function dos(){
    var saldo = document.getElementById('saldo_cli').innerHTML;
    var precio = 250000;
    console.log(saldo)
    console.log(precio)
    var resta = 0;

    if(saldo>=precio){
        resta = saldo-precio;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("PATCH","https://criterion1.pythonanywhere.com/cuenta_bancaria/1/")
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send( JSON.stringify({id_cuenta: rut_pac, saldo: resta}) );
        alert("Solicitud aprobada por su banco.");

        var xmlhttp2 = new XMLHttpRequest();
        xmlhttp2.open("POST","https://criterion1.pythonanywhere.com/seguimiento/")
        xmlhttp2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp2.send( JSON.stringify({id_articulo_seg:"https://criterion1.pythonanywhere.com/articulos/2/", id_cliente: rut_pac, estado: "En curso"}) );
        alert("Compra realizada con éxito, revise tu pestaña de seguimiento.");

    }else{
        if(saldo<precio){
            alert("No tienes saldo suficiente en tu cuenta para realizar esta compra");
        }else{
            alert("Ha ocurrido un error al procesar tu compra, por davor intenta nuevamente");
        }
    }
}

function tres(){
    var saldo = document.getElementById('saldo_cli').innerHTML;
    var precio = 450000;
    console.log(saldo)
    console.log(precio)
    var resta = 0;

    if(saldo>=precio){
        resta = saldo-precio;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("PATCH","https://criterion1.pythonanywhere.com/cuenta_bancaria/1/")
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send( JSON.stringify({id_cuenta: rut_pac, saldo: resta}) );
        alert("Solicitud aprobada por su banco.");

        var xmlhttp2 = new XMLHttpRequest();
        xmlhttp2.open("POST","https://criterion1.pythonanywhere.com/seguimiento/")
        xmlhttp2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp2.send( JSON.stringify({id_articulo_seg:"https://criterion1.pythonanywhere.com/articulos/3/", id_cliente: rut_pac, estado: "En curso"}) );
        alert("Compra realizada con éxito, revise tu pestaña de seguimiento.");

    }else{
        if(saldo<precio){
            alert("No tienes saldo suficiente en tu cuenta para realizar esta compra");
        }else{
            alert("Ha ocurrido un error al procesar tu compra, por davor intenta nuevamente");
        }
    }
}

