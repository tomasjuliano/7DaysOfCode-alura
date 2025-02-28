/* "Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!" */

let preguntas =[
    "¿Cuál es tu nombre?", // paso = 0
    "¿Cuántos años tienes?", //paso = 1
    "¿Qué lenguaje de programación estás estudiando?" // paso = 2
]
let respuestas = [];
let paso = 0;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja(){
    document.getElementById("input_respuesta").value = '';
}

function consultarRespuesta(){
    let pregunta = document.getElementById("p_pregunta1");
    let input = document.getElementById("input_respuesta");

    if(input.value == "" || input.value == null){
        alert("Por favor, escribe una respuesta");
        return;
    }

    respuestas[paso] = input.value;
    limpiarCaja();
    paso++;

    if(paso < preguntas.length){
        asignarTextoElemento("p_pregunta1", preguntas[paso]);
    }
    else{
        asignarTextoElemento("p_pregunta1",`Hola ${respuestas[0]}, tienes ${respuestas[1]} años y ya estás aprendiendo ${respuestas[2]}!` );
        document.getElementById("div_preguntayrespuesta").style.display = "none";
        asignarTextoElemento("p_pregunta2", `¿Te gusta estudiar ${respuestas[2]}?`)
        document.getElementById("div_botones").style.display = "flex";
    }
}

function respuestaBotonSi(){
    let respuesta = 1;
    respuestaBoton(respuesta);
}

function respuestaBotonNo(){
    let respuesta = 2;
    respuestaBoton(respuesta);
}

function respuestaBoton(respuesta){
    if(respuesta == 1){
        asignarTextoElemento("p_pregunta1", "¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
        document.getElementById("p_pregunta2").style.display = "none";
        document.getElementById("div_botones").style.display = "none";
    }
    if(respuesta == 2){
        asignarTextoElemento("p_pregunta1", "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
        document.getElementById("p_pregunta2").style.display = "none";
        document.getElementById("div_botones").style.display = "none";
    }
}