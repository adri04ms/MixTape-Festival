const artistas = new Map();
let nextId = 0;


export function loadSampleData(){

    addArtista({
        nombre: 'BAD BUNNY',
        imagen: 'FotosArtistas/Bad Bunny.jpg',
        genero: 'TRAP LATINO'
    
    });

    addArtista({
        nombre: 'DANI FERNANDEZ',
        imagen: 'FotosArtistas/Dani Fernandez.jpg',
        genero: 'POP ESPAÑOL'
    
    });

    addArtista({
        nombre: 'ESTOPA',
        imagen: 'FotosArtistas/Estopa.jpg',
        genero: 'POP ESPAÑOL'
    
    });

    addArtista({
        nombre: 'HARRY STYLES',
        imagen: 'FotosArtistas/Harry Styles.jpg',
        genero: 'POP'
    
    });

    addArtista({
        nombre: 'KIDD KEO',
        imagen: 'FotosArtistas/Kidd Keo.jpg',
        genero: 'TRAP ESPAÑOL'
    
    });

    addArtista({
        nombre: 'MELENDI',
        imagen: 'FotosArtistas/Melendi.jpg',
        genero: 'POP ESPAÑOL'
    
    });

    addArtista({
        nombre: 'RAUW ALEJANDRO',
        imagen: 'FotosArtistas/Rauw Alejandro.jpg',
        genero: 'REGUETON'
    
    });

    addArtista({
        nombre: 'SHAWN MENDES',
        imagen: 'FotosArtistas/Shawn Mendes.jpg',
        genero: 'POP'
    
    });

    addArtista({
        nombre: 'NIKONE',
        imagen: 'FotosArtistas/Nikone.jpg',
        genero: 'RAP'
    
    });

    addArtista({
        nombre: 'ONE DIRECTION',
        imagen: 'FotosArtistas/One Direction.jpg',
        genero: 'POP'
    
    });

    addArtista({
        nombre: 'QUEVEDO',
        imagen: 'FotosArtistas/Quevedo.jpg',
        genero: 'REGUETON'
    
    });

    addArtista({
        nombre: 'TAYLOR SWIFT',
        imagen: 'FotosArtistas/Taylor Swift.jpg',
        genero: 'POP'
    
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
