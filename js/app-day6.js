let listaInvitados = [];

function modificarLista(accion){
    if (accion === "agregar") {
        let nombre = prompt("Ingrese el nombre del invitado: ");
        agregarInvitado(nombre);
    }
    else if (accion === "eliminar") {
        let nombre = prompt("Ingrese el nombre del invitado a eliminar: ");
        eliminarInvitado(nombre);
    }
}

function agregarInvitado(nombre) {
    if (nombre === "" || nombre === null) {
        alert("El nombre no puede estar vacío.");
        return;
    }
    listaInvitados.push(nombre);
    renderizarLista();
}

function eliminarInvitado(nombre) {
    let index = listaInvitados.indexOf(nombre);
    if (index !== -1) {
        listaInvitados.splice(index, 1);
        renderizarLista();
    }else{
        alert("El nombre no existe en la lista.");
    }
}

function renderizarLista() {
    let listaNombres = document.getElementById("array_nombres");
    let listaNumeros = document.getElementById("array_numeros");

    listaNumeros.innerHTML = "";
    listaNombres.innerHTML = "";

    listaInvitados.forEach((item, index) => {
        let liName = document.createElement("li");
        let liNumber = document.createElement("li");

        liNumber.textContent = `${index + 1}`;
        liNumber.classList.add((index % 2 === 0) ? "par" : "impar");
        
        liName.textContent = `${item}`;
        liName.classList.add((index % 2 === 0) ? "par" : "impar");

        listaNombres.appendChild(liName);
        listaNumeros.appendChild(liNumber);
    });
}