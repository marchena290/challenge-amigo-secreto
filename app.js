// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let obtenerNombre = document.getElementById('amigo').value;

    // Validar si el campo esta vacio
    if (obtenerNombre.trim() === "") {
        alert("Por favor, inserte un nombre");
        return // Detener la funcion si el campo esta vacion 
    } else {
        // Agregar amigos a la lista
        amigos.push(obtenerNombre);

        // reiniciar campo
        document.getElementById('amigo').value = "";

        // Mostrar el nombre en la lista visual
        let lista =  document.getElementById('listaAmigos');
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = obtenerNombre;
        lista.appendChild(nuevoElemento);
    }


}

function actualizarLista() {
    // Obtener el elemento de la lista html
    let lista =  document.getElementById('listaAmigos')

    // Limpiar la lista actual para que no hayan duplicados 
    lista.innerHTML = "";

    // Iterar sobre el array 'amigos' y agregar cada uno 
    for (let amigo of amigos) {

        // Crear nuevo li
        let nuevoElemento = document.createElement('li');

        // Asignar el texto del amigo al <li>
        nuevoElemento.textContent = amigo;

        // Añadir el <li> a la lista en el html
        lista.appendChild(nuevoElemento);
    }
}


function sortearAmigo() {

    // Validar si almenos hay 2 amigos para sortear 
    if (amigos.length < 2) {
        alert('Por favor, añade al menos dos amigos para hacer el sorteo')
        return;
    }

    // Crear un array para almacenar los resultado 
    let resultados = [];
    // Hacer una copia del arry para evitar modificar el original
    let amigosCopy = [...amigos];

    // Recorrer el array de amaigos
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i]

        // Elegir un amigo secreto al azr
        let indiceAleatorio = Math.floor(Math.random() * amigosCopy.length);

        // Asegurarse que una persona no sea asignada a si misma
        while (amigosCopy[indiceAleatorio] === amigo) {
            indiceAleatorio = Math.floor(Math.random() * amigosCopy.length);
        }

        // Agregar el amigo secreto al array 
        resultados.push(`El amigo secreto de ${amigo} es: ${amigosCopy[indiceAleatorio]}`);

        // Eliminar al amigo asignado para que no se repita
        amigosCopy.splice(indiceAleatorio, 1);
    }

    // Mostrar los resultados en la pagina 
    let listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ""; //Limpiar resultados anteriores

    // Mostrar cada resultado
    for (let resultado of resultados) {
        let li = document.createElement('li');
        li.textContent = resultado;
        listaResultado.appendChild(li)
    }
}
