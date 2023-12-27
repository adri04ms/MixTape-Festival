const NUM_RESULTS = 4;
let loadMoreRequests = 0;

async function loadMore() {
    const from = (loadMoreRequests + 1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    try {
        const response = await fetch(`servidor?from=${from}&to=${to}`);
        const newArtists = await response.text();

        const artistContainer = document.getElementById("artist-container");
        artistContainer.innerHTML += newArtists;

        loadMoreRequests++;
    } catch (error) {
        console.error('Error al cargar artistas:', error);
    }
}


function search() {
    var input = document.getElementById('searchInput').value.trim().toLowerCase();
    var artistas = document.getElementsByClassName('cantante');

    for (var i = 0; i < artistas.length; i++) {
        var nombre = artistas[i].getElementsByTagName('p')[0].innerText.trim().toLowerCase();
        var genero = artistas[i].getElementsByTagName('h3')[0].innerText.trim().toLowerCase();

        // Mostrar u ocultar el elemento según si coincide con la búsqueda en nombre o género
        if (nombre.includes(input) || genero.includes(input)) {
            artistas[i].style.display = 'block';
        } else {
            artistas[i].style.display = 'none';
        }
    }
}
function resetSearch() {
    var artistas = document.getElementsByClassName('cantante');

    for (var i = 0; i < artistas.length; i++) {
        artistas[i].style.display = 'block';
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

    var titulo = document.querySelector("h1");

    function cambiarColor() {
        if (titulo.style.color === "black") {
            titulo.style.color = "white";
        } else {
            titulo.style.color = "black";
        }
    }
    setInterval(cambiarColor, 300);

    efectoImagen();
});

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
    const favoritosLista = document.getElementById('favoritos-lista');
    const cantanteNombre = cantanteDiv.querySelector('p').textContent;

    // Verifica si el botón tiene la clase 'active'
    const esFavorito = button.classList.toggle('active');

    // Encuentra el elemento existente en la lista de favoritos
    const favoritoItem = document.querySelector(`#favoritos-lista li[data-id="${cantanteId}"]`);

    if (esFavorito && !favoritoItem) {
        // Añade el cantante a la lista de favoritos
        const nuevoFavorito = document.createElement('li');
        nuevoFavorito.textContent = cantanteNombre;
        nuevoFavorito.setAttribute('data-id', cantanteId);
        favoritosLista.appendChild(nuevoFavorito);
    } else if (!esFavorito && favoritoItem) {
        // Elimina el cantante de la lista de favoritos
        favoritosLista.removeChild(favoritoItem);
    }
}

function toggleFavoritesSidebar() {
    const favoritosSidebar = document.getElementById('favoritosSidebar');

    // Toggle the 'hidden' class to show/hide the sidebar
    favoritosSidebar.classList.toggle('hidden');

    // Change the button text based on the sidebar visibility
    const isOpen = !favoritosSidebar.classList.contains('hidden');
    const buttonText = isOpen ? 'Ocultar Artistas Favoritos' : 'Mostrar Artistas Favoritos';

    // Cambia el texto del botón
    document.getElementById('FavoritosBtn').innerText = buttonText;
    
    // Muestra u oculta la barra lateral
    favoritosSidebar.style.display = isOpen ? 'block' : 'none';
}
