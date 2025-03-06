let especialidadElegida = "";
let especialidadOpuesta = "";
let tecnologiasEstudiadas = ["HTML", "CSS", "JavaScript"];

let mainContainer = document.getElementById("main_container");
let intro = document.getElementById("texto_intro");
let texto = document.getElementById("texto_inicial");
let divPrincipal = document.getElementById("div_principal");
let divsEspecializacion = document.getElementsByClassName("divs_especialidad");
let boton = document.getElementById("boton");
let divElecciones = document.getElementById("eleccion");
let divUser = document.getElementById("user_profile");
let divTecnologias = document.getElementById("contenedor_tecnologias");
let botonesEleccion = document.getElementById("botones_eleccion");
let contenedoresTecnologiasEspecialidad = document.getElementsByClassName("contenedor_tecnologias_especializacion");
let botonesFinales = document.getElementById("botones_finales");
let userName = document.getElementById("user_name");
let textoTecnologiasEstudiadas = document.getElementById("texto_tecnologias-estudiadas");
let tecnologiasFront = document.getElementById("contenedor_tecnologias_front");
let tecnologiasBack = document.getElementById("contenedor_tecnologias_back");


/* FUNCTIONS */
let contadorPulsaciones = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function iniciarJuego(){
    contadorPulsaciones++;
    
    if(contadorPulsaciones == 1){
        asignarTextoElemento("boton", "Continuar");
        intro.style.display = "none";
        texto.style.display = "block";
        asignarTextoElemento("texto_inicial", '<span style="color: yellow;">Hola!</span> Bienvenido a la <span style="color: yellow;">Academia de Desarrollo</span>.<br>Hoy te ayudaremos a elegir tu camino como <span style="color: yellow;">desarrollador</span>. Para ello, debes responder algunas preguntas. Recuerda que no hay respuestas incorrectas, solo diferentes caminos.<br>Comencemos!');
    }
    
    if(contadorPulsaciones == 2){
        asignarTextoElemento("texto_inicial", "Escoge una alternativa:");
        boton.style.display = "none";
        mainContainer.style.flexDirection = "column";
        divPrincipal.style.display = "flex";
    }
}

function borrarEspecialidades(){
    divPrincipal.style.display = "none";
    asignarTextoElemento("texto_inicial", "¿Qué tecnología te gustaría estudiar ahora?");
}

function escogeFrontEnd(){
    borrarEspecialidades();
    let divElecciones = document.getElementById("eleccion");
    divElecciones.style.display = "flex";

    let elecciones = document.getElementById("eleccion");
    elecciones.style.display = "flex";

    let elecFront = document.getElementById("eleccion_front");
    elecFront.style.display = "flex";
}

function escogeBackEnd(){
    borrarEspecialidades();
    divElecciones.style.display = "flex";

    let elecciones = document.getElementById("eleccion");
    elecciones.style.display = "flex";

    let elecBack = document.getElementById("eleccion_back");
    elecBack.style.display = "flex";
}

function mostrarPerfil(tecnologiaElegida, especialidad){
    let listaTecnologiasBack = document.getElementById("contenedor_tecnologias_back");
    listaTecnologiasBack.style.display = "none";
    let listaTecnologiasFront = document.getElementById("contenedor_tecnologias_front");
    listaTecnologiasFront.style.display = "none";

    divElecciones.style.display = "none";
    userName.style.display = "flex";
    divUser.style.display = "flex";
    divTecnologias.style.display = "flex";
    asignarTextoElemento("texto_inicial", "Tu perfil");
    textoTecnologiasEstudiadas.style.display = "block";

    if(especialidad == "Front-End"){
        if(tecnologiaElegida == "React.js"){
            let logoReact = document.getElementById("logo_react");
            logoReact.style.display = "block";
        }
        if(tecnologiaElegida == "Vue.js"){
            let logoVue = document.getElementById("logo_vue");
            logoVue.style.display = "block";
        }
        if(tecnologiaElegida == "AngularJS"){
            let logoAngular = document.getElementById("logo_angular");
            logoAngular.style.display = "block";
        }
        if(tecnologiaElegida == "Svelte"){
            let logoSvelte = document.getElementById("logo_svelte");
            logoSvelte.style.display = "block";
        }
        if(tecnologiaElegida == "TailwindCSS"){
            let logoTailwind = document.getElementById("logo_tailwind");
            logoTailwind.style.display = "block";
        }
    }
    if(especialidad == "Back-End"){
        if(tecnologiaElegida == "C#"){
            let logoCSharp = document.getElementById("logo_csharp");
            logoCSharp.style.display = "block";
        }
        if(tecnologiaElegida == "Java"){
            let logoJava = document.getElementById("logo_java");
            logoJava.style.display = "block";
        }
        if(tecnologiaElegida == "Node.js"){
            let logoNode = document.getElementById("logo_node");
            logoNode.style.display = "block";
        }
        if(tecnologiaElegida == "MySQL"){
            let logoMySQL = document.getElementById("logo_mysql");
            logoMySQL.style.display = "block";
        }
        if(tecnologiaElegida == "Spring"){
            let logoSpring = document.getElementById("logo_spring");
            logoSpring.style.display = "block";
        }
    }
    
    let tecnologiasElegidas = document.getElementById("tecnologias");
    tecnologiasElegidas.style.display = "flex";

    if(tecnologiasEstudiadas.length >= 5){
        asignarTextoElemento("texto_inicial", "Si quieres continuar aprendiendo nuevas tecnologías puedes agregarlas a la lista de tecnologías en tu perfil.");
        botonesFinales.style.display = "flex";
    }
}

function ocultarPerfil(){
    userName.style.display = "none";
    divUser.style.display = "none";
    divTecnologias.style.display = "none";
    textoTecnologiasEstudiadas.style.display = "none";
}

function escogeTecnologia(tecnologiaElegida, especialidad){
    especialidadElegida = especialidad;

    if(especialidadElegida == "Front-End"){
        especialidadOpuesta = "Back-End";
    }
    if(especialidadElegida == "Back-End"){
        especialidadOpuesta = "Front-End";
    }

    if(!tecnologiasEstudiadas.includes(tecnologiaElegida)){
        tecnologiasEstudiadas.push(tecnologiaElegida);
    }
    mostrarPerfil(tecnologiaElegida, especialidad);
}

function avanceAprendizaje(){
    divUser.style.display = "none";
    let botonSiguiente= document.getElementById("boton_siguiente");
    botonSiguiente.style.display = "none";

    asignarTextoElemento("texto_inicial", `Wow! Tu camino como desarrollador se ve cada vez mejor!<br>Para seguir con tu formación como desarrollador... <br> ¿Deseas seguir especializandote en <span style="color: yellow;">${especialidadElegida}</span> o convertirte en desarrollador <span style="color: yellow;">FullStack</span> y estudiar <span style="color: yellow;">${especialidadOpuesta}</span>?`);
    botonesEleccion.style.display = "flex";
}


function ultimaEleccion(especialidad){
    
    
    if(especialidad == especialidadOpuesta){
        asignarTextoElemento("texto_inicial", `Parece que elegiste expandir tus horizontes y convertirte en un desarrollador <span style='color: yellow;'>FullStack</span>!<br>¿Qué tecnología del <span style='color: yellow;'>${especialidadOpuesta}</span> deseas estudiar?`);
    }
    else if(especialidad == especialidadElegida){
        asignarTextoElemento("texto_inicial", `Parece que elegiste seguir especializandote en <span style='color: yellow;'>${especialidadElegida}</span>!<br>¿Qué tecnología deseas estudiar ahora?`);
        
    }

    if(especialidad == "Extra"){
        ocultarPerfil();
        asignarTextoElemento("texto_inicial", "¿Qué especialidad deseas estudiar?");
        botonesFinales.style.display = "none";
        botonesEleccion.style.display = "flex";
    }
    if(especialidad == "Front-End"){
        tecnologiasFront.style.display = "inline-flex";
        botonesEleccion.style.display = "none";
    }
    if(especialidad == "Back-End"){
        tecnologiasBack.style.display = "inline-flex";
        botonesEleccion.style.display = "none";
    }

    
}

function terminarJuego(){
    botonesFinales.style.display = "none";
    ocultarPerfil();
    asignarTextoElemento("texto_inicial", `Felicidades! Has terminado el juego!<br>Has estudiado un total de <span style='color: yellow;'>${tecnologiasEstudiadas.length} tecnologías</span>. <br>Recuerda que siempre puedes volver a jugar y elegir diferentes tecnologías para estudiar!`);
}