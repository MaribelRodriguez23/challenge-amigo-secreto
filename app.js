// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo()
 {
    let nombreAmigo = document.getElementById("amigo").value.trim ();
    
    // Verificar que el campo no esté vacío
    if (nombreAmigo !== "") {

        amigos.push(nombreAmigo);
        
        document.getElementById('amigo').value = "";  // Limpiar el campo de entrada
        mostrarListaAmigos();
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}

// Función para mostrar la lista de amigos en la pantalla
function mostrarListaAmigos() {}

// Función para realizar el sorteo de amigo secreto
function sortearAmigo() {}
