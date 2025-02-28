// Obtención de los elementos
const variables = document.querySelectorAll(".main__variable");
const dropZones = document.querySelectorAll(".main__dropzone");
const respuesta = document.getElementById("respuesta_comparacion");

// Hacer que los contenedores sean arrastrables
variables.forEach(variable => {
    variable.addEventListener("dragstart", (e) => {
        const name = e.target.getAttribute("data-name");
        const type = e.target.getAttribute("data-type");

        if (name && type) {
            e.dataTransfer.setData("text", JSON.stringify({ id: e.target.id, name, type }));
        }
    });
});

// Permitir que las casillas acepten los contenedores arrastrados
dropZones.forEach(zone => {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault(); // Necesario para que se permita el drop
    });

    zone.addEventListener("drop", (e) => {
        e.preventDefault();

        const dataText = e.dataTransfer.getData("text");

        // Verificar si hay datos antes de hacer JSON.parse()
        if (!dataText) {
            console.warn("No se pudo obtener información del elemento arrastrado.");
            return;
        }

        let data;
        try {
            data = JSON.parse(dataText);
        } catch (error) {
            console.error("Error al analizar JSON:", error);
            return;
        }

        const draggedElement = document.getElementById(data.id);
        if (!draggedElement) return;

        // Clonar el elemento para que el original no desaparezca
        const clonedElement = draggedElement.cloneNode(true);
        clonedElement.classList.add("dropped"); // Clase opcional para estilos

        // Remover solo los elementos dentro de la casilla sin borrar la casilla misma
        while (zone.firstChild) {
            zone.removeChild(zone.firstChild);
        }

        zone.appendChild(clonedElement);
        verificarComparacion();
    });
});

document.addEventListener("dragstart", () => {
    document.body.style.cursor = "grabbing";
});

document.addEventListener("dragend", () => {
    document.body.style.cursor = "default"; // O vuelve al valor original
});


// Función para verificar la comparación
function verificarComparacion() {
    const dropA = document.getElementById("dropA").firstChild;
    const dropB = document.getElementById("dropB").firstChild;

    if (!dropA || !dropB) {
        respuesta.textContent = "Arrastra dos elementos para comparar.";
        return;
    }

    // Obtener los datos de cada elemento dentro de las casillas
    const nameA = dropA.getAttribute("data-name");
    const typeA = dropA.getAttribute("data-type");
    const nameB = dropB.getAttribute("data-name");
    const typeB = dropB.getAttribute("data-type");

    let mensaje = "No coinciden";
    desaparecerSignosPregunta();
    coincidenciaNula();

    if (nameA === nameB && typeA === typeB) {
        mensaje = "Coincidencia por valor y tipo de dato";
        desaparecerSignosPregunta();
        coincidenciaTotal();
    } else if (nameA === nameB) {
        mensaje = "Coincidencia por valor pero no por tipo de dato";
        desaparecerSignosPregunta();
        coincidenciaSimple();
    } else if (typeA === typeB) {
        mensaje = "Coincidencia por tipo de dato pero no por valor";
        desaparecerSignosPregunta();
        coincidenciaSimple();
    }

    respuesta.textContent = mensaje;
}

function desaparecerSignosPregunta(){
    document.getElementById("¿").style.display = "none";
    document.getElementById("?").style.display = "none";
}

function coincidenciaTotal(){
    document.getElementById("dropA").style.border = "0.25rem solid green";
    document.getElementById("dropB").style.border = "0.25rem solid green";
}
function coincidenciaSimple(){
    document.getElementById("dropA").style.border = "0.25rem solid orange";
    document.getElementById("dropB").style.border = "0.25rem solid orange";
}
function coincidenciaNula(){
    document.getElementById("dropA").style.border = "0.25rem solid red";
    document.getElementById("dropB").style.border = "0.25rem solid red";
}

