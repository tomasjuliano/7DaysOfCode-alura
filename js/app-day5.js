// Arays de alimentos categorizados
let FrutasYVerduras = [];
let CarnesYPescados = [];
let Bebidas = [];
let SnacksYAperitivos = [];
let AlimentosEnlatados = [];
let Panaderia = [];

// Elementos del DOM
let botonAgregar = document.getElementById("boton_agregar_alimento");
let inputYBoton = document.getElementById("input_y_enviar");
let inputAlimento = document.getElementById("input_alimento");
let botonEnviar = document.getElementById("enviar_alimento");
let listaFrutasYVerduras = document.getElementById("lista_fyv");
let listaCarnesYPescados = document.getElementById("lista_cyp");
let listaBebidas = document.getElementById("lista_beb");
let listaSnacksYAperitivos = document.getElementById("lista_sya");
let listaAlimentosEnlatados = document.getElementById("lista_aen");
let listaPanaderia = document.getElementById("lista_pan");
let seleccionListas = document.getElementById("container_listas_y_texto");
let botonReiniciar = document.getElementById("boton_reinicio");

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAlimento(){
    botonAgregar.style.display = "none";
    inputYBoton.style.display = "flex";
}

function enviarAlimento(){
    let alimento = inputAlimento.value;
    if(alimento == ""){
        alert("Por favor, ingrese un alimento.");
        return;
    }

    inputYBoton.style.display = "none";
    seleccionListas.style.display = "flex";
}

function eleccionCategoria(categoria){
    botonReiniciar.style.display = "flex";
    switch(categoria){
        case "FyV":
            FrutasYVerduras.push(inputAlimento.value);
            asignarTextoElemento("lista_fyv", FrutasYVerduras.join(", "));
            console.log(FrutasYVerduras);
            seleccionListas.style.display = "none";
            botonAgregar.style.display = "flex";
            inputAlimento.value = "";
            break;
        case "CyP":
            CarnesYPescados.push(inputAlimento.value);
            asignarTextoElemento("lista_cyp", CarnesYPescados.join(", "));
            console.log(CarnesYPescados);
            seleccionListas.style.display = "none";
            botonAgregar.style.display = "flex";
            inputAlimento.value = "";
            break;
        case "Beb":
            Bebidas.push(inputAlimento.value);
            asignarTextoElemento("lista_beb", Bebidas.join(", "));
            console.log(Bebidas);
            seleccionListas.style.display = "none";
            botonAgregar.style.display = "flex";
            inputAlimento.value = "";
            break;
        case "SyA":
            SnacksYAperitivos.push(inputAlimento.value);
            asignarTextoElemento("lista_sya", SnacksYAperitivos.join(", "));
            console.log(SnacksYAperitivos);
            seleccionListas.style.display = "none";
            botonAgregar.style.display = "flex";
            inputAlimento.value = "";
            break;
        case "AEn":
            AlimentosEnlatados.push(inputAlimento.value);
            asignarTextoElemento("lista_aen", AlimentosEnlatados.join(", "));
            console.log(AlimentosEnlatados);
            seleccionListas.style.display = "none";
            botonAgregar.style.display = "flex";
            inputAlimento.value = "";
            break;
        case "Pan":
            Panaderia.push(inputAlimento.value);
            asignarTextoElemento("lista_pan", Panaderia.join(", "));
            console.log(Panaderia);
            seleccionListas.style.display = "none";
            botonAgregar.style.display = "flex";
            inputAlimento.value = "";
            break;
        default:
            alert("Categoría no válida. Por favor, elija una categoría válida.");
            break;
    }
}

function reiniciarListas(){
    FrutasYVerduras = [];
    CarnesYPescados = [];
    Bebidas = [];
    SnacksYAperitivos = [];
    AlimentosEnlatados = [];
    Panaderia = [];

    asignarTextoElemento("lista_fyv", "");
    asignarTextoElemento("lista_cyp", "");
    asignarTextoElemento("lista_beb", "");
    asignarTextoElemento("lista_sya", "");
    asignarTextoElemento("lista_aen", "");
    asignarTextoElemento("lista_pan", "");

    botonReiniciar.style.display = "none";
}