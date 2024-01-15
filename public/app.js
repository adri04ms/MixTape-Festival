const NUM_RESULTS = 4;
let loadMoreRequests = 0;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

async function loadMore() {
    const from = (loadMoreRequests + 1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    try {
        const response = await fetch(`servidor?from=${from}&to=${to}`);
        const newArtists = await response.text();

        const artistContainer = document.getElementById("artist-container");
        artistContainer.innerHTML += newArtists;

        // Restore the state of heart buttons for existing favorites
        renderFavorites();
        
        loadMoreRequests++;
    } catch (error) {
        console.error('Error al cargar artistas:', error);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    var subtitulo = "The best festival of your entire life";
    var velocidad = 100;
    var elemento = document.querySelector(".cabecera p");

    function escribirTexto(texto, elemento) {
        var i = 0;
        var intervalo = setInterval(function () {
            if (i < texto.length) {
                elemento.innerHTML += texto.charAt(i);
                i++;
            } else {
                clearInterval(intervalo);
            }
        }, velocidad);
    }
    escribirTexto(subtitulo, elemento);
    efectoImagen();
    renderFavorites();
});

function renderFavorites() {
    const favoritosLista = document.getElementById('favoritos-lista');
    favoritosLista.innerHTML = ''; // Clear existing content

    const artistContainer = document.getElementById("artist-container");

    favorites.forEach((favorite) => {
        const cantanteDiv = artistContainer.querySelector(`[data-id="${favorite.id}"]`);
        if (cantanteDiv) {
            // Set the 'active' class for the heart button
            const heartButton = cantanteDiv.querySelector('.btn-corazon');
            heartButton.classList.add('active');

            // Append the favorite to the favorites list
            const nuevoFavorito = document.createElement('li');
            nuevoFavorito.textContent = favorite.nombre;
            nuevoFavorito.setAttribute('data-id', favorite.id);
            favoritosLista.appendChild(nuevoFavorito);
        }
    });
}



function efectoImagen() {
    var contenedor = document.querySelector('#artist-container');

    contenedor.addEventListener('mouseover', function (event) {
        if (event.target.tagName === 'IMG') {
            event.target.style.transform = 'scale(1.1)';
        }
    });

    contenedor.addEventListener('mouseout', function (event) {
        if (event.target.tagName === 'IMG') {
            event.target.style.transform = 'scale(1)';
        }
    });
}

function toggleCorazon(button) {
    const cantanteDiv = button.closest('.cantante');
    const cantanteId = cantanteDiv.getAttribute('data-id');
    const cantanteNombre = cantanteDiv.querySelector('p').textContent;

    const esFavorito = button.classList.toggle('active');

    if (esFavorito) {
        favorites.push({ id: cantanteId, nombre: cantanteNombre });
    } else {
        favorites = favorites.filter((favorite) => favorite.id !== cantanteId);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites();
}

function toggleFavoritesSidebar() {
    const favoritosSidebar = document.getElementById('favoritosSidebar');
    const body = document.body;

    // Toggle the 'hidden' class to show/hide the sidebar
    favoritosSidebar.classList.toggle('hidden');

    // Cambia la clase del cuerpo para ajustar los estilos
    body.classList.toggle('favoritos-open');

    // Change the button text based on the sidebar visibility
    const isOpen = !favoritosSidebar.classList.contains('hidden');
    const buttonText = isOpen ? 'Ocultar Artistas Favoritos' : 'Mostrar Artistas Favoritos';

    // Cambia el texto del botón
    document.getElementById('FavoritosBtn').innerText = buttonText;

    // Muestra u oculta la barra lateral
    favoritosSidebar.style.display = isOpen ? 'block' : 'none';
}

function mostrarAlerta(id) {
    var alerta = document.getElementById(id);
    alerta.style.display = 'block';
    setTimeout(function() {
        alerta.style.display = 'none';
    }, 5000);
}

function validarFormulario() {
var nombre = document.getElementById('nombre').value;
var imagen = document.getElementById('imagen').value;
var genero = document.getElementById('genero').value;
var fecha = document.getElementById('fecha').value;
var hora = document.getElementById('hora').value;
var descripcion = document.getElementById('descripcion').value;

// Validaciones adicionales
var regexLetraMayuscula = /^[A-Z]/;

if (nombre === '' || !regexLetraMayuscula.test(nombre) || !esURLValida(imagen) || imagen === '' || genero === '' || fecha === '' || hora === '' || descripcion === '' || descripcion.length < 50 || descripcion.length > 500) {
    if (nombre === '' || !regexLetraMayuscula.test(nombre)) mostrarAlerta('alertaNombre');
    if (descripcion === '' || descripcion.length < 50 || descripcion.length > 500) mostrarAlerta('alertaDescripcion');
    if (!esURLValida(imagen) || imagen === '') mostrarAlerta('alertaImagen');
    if (genero === '') mostrarAlerta('alertaGenero');
    if (fecha === '') mostrarAlerta('alertaFecha');
    if (hora === '') mostrarAlerta('alertaHora');
    return false;
}

return true; // Envía el formulario si todas las validaciones son exitosas
}

function esURLValida(url) {
// Esta función puede ser más compleja dependiendo de los requisitos específicos
// Aquí, simplemente verifica si es una URL válida
var regexURL = /^(ftp|http|https):\/\/[^ "]+$/;
return regexURL.test(url);
}

function mostrarAlertaCancion(id) {
    document.getElementById(id).style.display = 'block';
    setTimeout(function () {
        document.getElementById(id).style.display = 'none';
    }, 4000);
}

function validarFormularioCancion() {
    var nombre = document.getElementById('nombre').value;
    var duracion = document.getElementById('duracion').value;
    var lanzamiento = document.getElementById('lanzamiento').value;
    if (nombre === '' || duracion === '' || lanzamiento === '') {
        // Muestra las alertas
        if (nombre === '') mostrarAlertaCancion('alertaNombre');
        if (duracion === '') mostrarAlertaCancion('alertaDuracion');
        if (lanzamiento === '') mostrarAlertaCancion('alertaLanzamiento');
        return false;
    }
    return true; // Envía el formulario si todos los campos están llenos
}

function filtrarPorNombre() {
    // Obtener el valor ingresado por el usuario
    var filtro = document.getElementById('busqueda').value.toLowerCase();
    
    // Obtener la lista de elementos en el mapa
    var contenedorArtistas = document.getElementById('artist-container');
    var artistas = contenedorArtistas.getElementsByClassName('cantante');

    // Iterar sobre los elementos y mostrar/ocultar según el filtro
    for (var i = 0; i < artistas.length; i++) {
        var nombre = artistas[i].getElementsByTagName('p')[0].innerText.toLowerCase();
        if (nombre.includes(filtro)) {
            artistas[i].style.display = 'block';
        } else {
            artistas[i].style.display = 'none';
        }
    }
}

function comprobar() {
    var inputNombre = document.getElementById('nombre');
    var nuevoNombre = inputNombre.value.trim(); // Obtén el valor del campo y elimina espacios en blanco

    // Verifica si el nuevo nombre ya existe en el mapa
    if (nombresCantantes.has(nuevoNombre)) {
        alert('Ya hay un cantante con ese nombre. Por favor, elige otro nombre.');
        // Puedes realizar acciones adicionales, como desactivar el botón de enviar o cambiar estilos
    } else {
        // Si el nombre no existe, actualiza el mapa
        nombresCantantes.set(nuevoNombre, true);
    }
}
