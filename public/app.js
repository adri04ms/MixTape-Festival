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
