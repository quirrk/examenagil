var rut_pac = document.getElementById('rut_pac').innerHTML;
console.log(rut_pac)


function serologico(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST","https://servet.pythonanywhere.com/examenes/")
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(
        JSON.stringify({tipo_examen:"https://servet.pythonanywhere.com/listaexamenes/5/",rut_entidad:"60536429-8",rut_paciente: rut_pac ,fecha_entrega:"2019-07-01",estado:"En curso",rut_especialista:"13548987-8"})
    );
    alert("Exámen agendado correctamente, revisa tu agenda");
}

function tiroides(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST","https://servet.pythonanywhere.com/examenes/")
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(
        JSON.stringify({tipo_examen:"https://servet.pythonanywhere.com/listaexamenes/4/",rut_entidad:"60536429-8",rut_paciente: rut_pac ,fecha_entrega:"2019-06-26",estado:"En curso",rut_especialista:"13548987-8"})
    );
    alert("Exámen agendado correctamente, revisa tu agenda");
}

function inmuno(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST","https://servet.pythonanywhere.com/examenes/")
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(
        JSON.stringify({tipo_examen:"https://servet.pythonanywhere.com/listaexamenes/3/",rut_entidad:"60536429-8",rut_paciente: rut_pac ,fecha_entrega:"2019-06-25",estado:"En curso",rut_especialista:"13548987-8"})
    );
    alert("Exámen agendado correctamente, revisa tu agenda");
}

function hormonal(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST","https://servet.pythonanywhere.com/examenes/")
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(
        JSON.stringify({tipo_examen:"https://servet.pythonanywhere.com/listaexamenes/2/",rut_entidad:"60536429-8",rut_paciente: rut_pac ,fecha_entrega:"2019-07-06",estado:"En curso",rut_especialista:"13548987-8"})
    );
    alert("Exámen agendado correctamente, revisa tu agenda");
}

function lumbar(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST","https://servet.pythonanywhere.com/examenes/")
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(
        JSON.stringify({tipo_examen:"https://servet.pythonanywhere.com/listaexamenes/1/",rut_entidad:"60536429-8",rut_paciente: rut_pac ,fecha_entrega:"2019-06-28",estado:"En curso",rut_especialista:"13548987-8"})
    );
    alert("Exámen agendado correctamente, revisa tu agenda");
}


