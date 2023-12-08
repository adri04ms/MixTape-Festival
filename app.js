class autor{
    canciones = [];

    constructor(nombre, imagen, genero){
        this.nombre = nombre;
        this.imagen = imagen;
        this.genero = genero;
    }

    toString(){
        let a = '';
        a += '<div class="cantante col-12 col-md-6 col-lg-3"><a href="masinfo.html">'+this.autor+'</a><a href="masinfo.html"><img src='+this.imagen+'></a><h3>'+this.genero+'</h3></div>';
        return a;
        }
}

let autores = [new autor('BAD BUNNY', 'FotosArtistas/Bad Bunny.jpg', 'TRAP LATINO'), new autor('DANI FERNANDEZ', 'FotosArtistas/Dani Fernandez.jpg', 'POP ESPAÑOL'), new autor('ESTOPA', 'FotosArtistas/Estopa.jpg', 'POP ESPAÑOL'), new autor('HARRY STYLES', 'FotosArtistas/Harry Styles.jpg', 'POP'), new autor('KIDD KEO', 'FotosArtistas/Kidd Keo.jpg', 'TRAP ESPAÑOL'), new autor('MELENDI', 'FotosArtistas/Melendi.jpg', 'POP ESPAÑOL'),  new autor('RAUW ALEJANDRO', 'FotosArtistas/Rauw Alejandro.jpg', 'TRAP LATINO'), new autor('SHAWN MENDES', 'FotosArtistas/Shawn Mendes.jpg', 'POP'), new autor('NIKONE', 'FotosArtistas/Nikone.jpg', 'RAP'), new autor('ONE DIRECTION', 'FotosArtistas/One Direction.jpg', 'POP'), new autor('QUEVEDO', 'FotosArtistas/Quevedo.jpg', 'REGUETON'), new autor('Taylor Swift', 'FotosArtistas/Taylor Swift.jpg', 'POP')];


let contenedor = document.getElementById("autor");

for (let i = 0; i < autores.length; i++) {
    let autor = autores[i];    
    addAutorToDOM(autor, i);
}

function addAutorToDOM(autor, i) {
let div = document.createElement("div");
div.classList = "cantante col-12 col-md-5 col-lg-3";

let nombreElement = document.createElement("p");
nombreElement.textContent = autores[i].nombre;



let imagenElement = document.createElement("img");
imagenElement.src = autores[i].imagen;
imagenElement.alt = autores[i].nombre;

let generoElement = document.createElement("h3");
generoElement.textContent = autores[i].genero;

div.appendChild(nombreElement);
div.appendChild(imagenElement);
div.appendChild(generoElement);

document.getElementById("divAutor").appendChild(div);

}
