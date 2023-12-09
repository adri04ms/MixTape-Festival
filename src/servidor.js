const artistas = new Map();
let nextId = 0;


export function loadSampleData(){

    addArtista({
        nombre: 'BAD BUNNY',
        imagen: 'FotosArtistas/Bad Bunny.jpg',
        genero: 'TRAP LATINO'
    
    });

    addArtista({
        nombre: 'BAD BUNNY',
        imagen: 'FotosArtistas/Bad Bunny.jpg',
        genero: 'TRAP LATINO'
    
    });

    addArtista({
        nombre: 'BAD BUNNY',
        imagen: 'FotosArtistas/Bad Bunny.jpg',
        genero: 'TRAP LATINO'
    
    });

    addArtista({
        nombre: 'BAD BUNNY',
        imagen: 'FotosArtistas/Bad Bunny.jpg',
        genero: 'TRAP LATINO'
    
    });

    addArtista({
        nombre: 'BAD BUNNY',
        imagen: 'FotosArtistas/Bad Bunny.jpg',
        genero: 'TRAP LATINO'
    
    });
}

export function addArtista(artista) {
    let id = nextId++;           
    artista.id = id.toString();
    artistas.set(artista.id, artista);
  
}


export function getArtistas(from, to) {
    return [...artistas.values()];
}

export function getArtista(id) {
    return artistas.get(id);
  }

loadSampleData();  