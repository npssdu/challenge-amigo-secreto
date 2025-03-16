// Arreglo para almacenar los nombres
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); //trim() elimina los espacios en blanco al inicio y al final de la cadena
    
    if (nombre !== "") { // Verifica que el nombre no esté vacío
    amigos.push(nombre);
    actualizarLista(); // Actualiza la lista visible con todos los nombres
    input.value = ""; // Limpia el input
    } else {
    alert('Debes ingresar un nombre válido por favor.');
    }
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Vacía la lista actual

    // Se recorre el arreglo de amigos y se crean elementos li para cada uno
    amigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatoriamente y mostrar el resultado
function sortearAmigo() {
    if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
    }
    
    // Se genera un índice aleatorio basado en la longitud del arreglo
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indice];

    // Se actualiza el contenido del elemento resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Tu amigo secreto es: ${amigoSeleccionado}`;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Vacía el arreglo
    amigos.length = 0;

    // Limpia la lista de amigos en el DOM
    document.getElementById('listaAmigos').innerHTML = "";
    
    // Limpia el resultado del sorteo
    document.getElementById('resultado').textContent = "";
}
