let numeroAleatorio = 0;
let intentosUsuario = 0;
let numeroIntentos = 3;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

let textoBienvenida = document.getElementById("texto_bienvenida");
let botonComenzar = document.getElementById("comenzar_juego");
let contenedorJuego = document.getElementById("contenedor_juego");
let inputIntento = document.getElementById("casilla_intento");
let botonEnviar = document.getElementById("enviar_numero");
let botonReiniciar = document.getElementById("reiniciar_juego");

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

asignarTextoElemento("texto_bienvenida", `<span style="color: yellow">Bienvenid@</span>!<br>Hoy vamos a jugar a adivinar un número entre <span style="color: yellow">0</span> y <span style="color: yellow">10</span>.<br>Recuerda que tienes <span style="color: yellow">3 intentos</span> para adivinar el número.`);

function comenzarJuego(){
    textoBienvenida.style.display = "none";
    botonComenzar.style.display = "none";
    contenedorJuego.style.display = "flex";
    
    condicionesIniciales(); // establezco las condiciones iniciales del juego
}

function condicionesIniciales(){
    botonReiniciar.disabled = true; // deshabilito el boton de reinicio
    botonReiniciar.classList.add("button_disabled");

    botonEnviar.disabled = false; // habilito el boton de enviar
    botonEnviar.classList.remove("button_disabled");
    
    inputIntento.value = ""; // limpio la caja del número
    inputIntento.style.boxShadow = ""; // limpio el borde de la caja
    inputIntento.placeholder = "Ingresa un número"; // coloco el placeholder por defecto
    inputIntento.disabled = false; // habilito la caja de texto
    
    
    numeroAleatorio = generarNumeroAleatorio(); // genero un nuevo número aleatorio
    intentosUsuario = 0; // reinicio los intentos
    
    asignarTextoElemento("numero_intentos", `Tienes <span style="color: yellow">${numeroIntentos}</span> intentos:`);
}

function estilizacionAcierto(){
    asignarTextoElemento("numero_intentos", `<span style="color: yellow">¡Felicidades!</span> Has adivinado el número <span style="color: yellow">${numeroAleatorio}</span> en ${intentosUsuario} intentos.`);
    inputIntento.style.boxShadow = "inset green 0 0 0 2px";
    inputIntento.placeholder = "Número correcto!";
    inputIntento.value = "";

    inputIntento.disabled = true;

    botonEnviar.disabled = true;
    botonEnviar.classList.add("button_disabled");

    botonReiniciar.disabled = false;
    botonReiniciar.classList.remove("button_disabled");
}

function estilizacionPierde(){
    asignarTextoElemento("numero_intentos", `<span style="color: red">Lo siento, has agotado tus intentos.</span> El número era <span style="color: yellow">${numeroAleatorio}</span>.`);
    inputIntento.style.boxShadow = "inset red 0 0 0 2px";
    inputIntento.value = "";

    inputIntento.disabled = true;
    
    botonEnviar.disabled = true;
    botonEnviar.classList.add("button_disabled");

    botonReiniciar.disabled = false;
    botonReiniciar.classList.remove("button_disabled");
}

function generarNumeroAleatorio(){
    let numeroAleatorio = Math.floor(Math.random() * 11);

    console.log(numeroAleatorio);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('numero_intentos', 'Ya se sortearon todos los números posibles.');
        } else {
            //verifico si el numero esta en la lista
            if(listaNumerosSorteados.includes(numeroAleatorio)) {
                return generarNumeroAleatorio();
            }else {
                listaNumerosSorteados.push(numeroAleatorio);
                return numeroAleatorio;
            }
    }
}

function reiniciarJuego(){
    condicionesIniciales(); // establezco las condiciones de un nuevo juego
}


function adivinarNumero(){
    let numeroUsuario = parseInt(document.getElementById("casilla_intento").value);

    intentosUsuario++;

    if(numeroAleatorio == numeroUsuario){
        estilizacionAcierto();
        return;
    }

    if(intentosUsuario >= numeroIntentos){ // Aquí ya ha usado todos sus intentos
        estilizacionPierde();
        return;
    }

    asignarTextoElemento("numero_intentos", `Tienes <span style="color: yellow">${numeroIntentos - intentosUsuario}</span> intentos:`);
    inputIntento.style.boxShadow = "inset red 0 0 0 2px";
    inputIntento.value = "";
}