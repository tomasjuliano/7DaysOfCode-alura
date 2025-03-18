let calculatorStatus = "off";
let expresionAcumulada = "";

let displayCalculadora = document.getElementById("display");

function changeStatus(){
    if (calculatorStatus === "off") {
        expresionAcumulada = "";
        calculatorStatus = "on";
        displayCalculadora.textContent = "|";
        displayCalculadora.classList.add("typing");
    } else {
        calculatorStatus = "off";
        expresionAcumulada = "";
        displayCalculadora.textContent = " ";
        displayCalculadora.classList.remove("typing");
    }
}

function clearDisplay() {
    if (calculatorStatus === "on" && displayCalculadora.textContent !== " ") {
        expresionAcumulada = "";
        displayCalculadora.textContent = "|";
        displayCalculadora.classList.add("typing");
    }
}

function pulsarBoton(boton){
    if (calculatorStatus === "on") {
        // Si es un número o un paréntesis, se agrega a la expresión acumulada
        if (!["*", "/", "+", "-", "=", "÷"].includes(boton)){
            expresionAcumulada += boton;
            displayCalculadora.textContent = expresionAcumulada;
            displayCalculadora.classList.remove("typing");
        }
        // Si es un operador (excepto "="), se valida que no haya operadores seguidos
        else if (["*", "/", "+", "-", "÷"].includes(boton) && expresionAcumulada !== "") {
            // Evitar operadores seguidos o un operador al principio
            if (expresionAcumulada === "" || /[*\-+÷/]$/.test(expresionAcumulada)) {
                mostrarError("Error: ya hay un operador");
                return;
            }
            expresionAcumulada += boton;
            displayCalculadora.textContent = expresionAcumulada;
        }
        else if (boton === "=" && expresionAcumulada !== "") {
            let resultado = calcularSeguro(expresionAcumulada);
            if (resultado !== null) {
                expresionAcumulada = resultado.toString();
                displayCalculadora.textContent = expresionAcumulada;
                return;
            }
        }
        else{
            mostrarError("Error: no se puede ingresar un operador si no hay un número antes");
            return;
        }
    }
    else {
        mostrarError("La calculadora está apagada.");
    }
}

const calcularSeguro = (expresion) => {
    //Reemplazar ÷ por /
    expresion = expresion.replace(/÷/g, '/');

    // Validar que la expresión no contenga caracteres no permitidos
    // Solo se permiten dígitos y operadores
    if (!/^[\d+\-*/÷().\s]+$/.test(expresion)) {
        mostrarError("Expresión inválida");
        return null;
    }

    // Verificar si la expresión termina en un operador
    if (/[+\-*/]$/.test(expresion)) {
        mostrarError("Error: la expresión termina en un operador");
        return null; 
    }

    // Validar que no se pueda dividir por cero
    let resultado = new Function(`return ${expresion}`)();
    if (resultado === Infinity || resultado === -Infinity) {
        mostrarError("Error: no se puede dividir por cero");
        setTimeout(() => {
            clearDisplay();
        }, 1500);
        return null;
    }

    // Devolver el resultado de la expresión
    return resultado;
};

function mostrarError(mensaje) {
    displayCalculadora.style.color = "red";
    displayCalculadora.style.fontSize = "1rem";
    displayCalculadora.textContent = mensaje;
    displayCalculadora.classList.remove("typing");
    setTimeout(() => {
        displayCalculadora.textContent = expresionAcumulada;
        displayCalculadora.style.color = "yellow";
        displayCalculadora.style.fontSize = "2.5rem";

    }, 1500);
}