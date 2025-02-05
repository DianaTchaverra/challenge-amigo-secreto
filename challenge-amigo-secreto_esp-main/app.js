let amigos = [];


function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();
    
    if (nombreAmigo !== "") {
        amigos.push(nombreAmigo);
        inputAmigo.value = ""; // Limpiar el input
        actualizarListaAmigos();
    } else {
        alert("Por favor ingresa un nombre válido.");
    }
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("No hay suficientes amigos para sortear.");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar resultado anterior
    
    let li = document.createElement("li");
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultadoLista.appendChild(li);
}

