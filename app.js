class autor{
    canciones = [];

    constructor(nombre, imagen, genero){
        this.nombre = nombre;
        this.imagen = imagen;
        this.genero = genero;
    }

    toString(){
        let a = '';
        a += '<div class="cantante col-12 col-md-6 col-lg-3"><a href="masinfo.html"><p>'+this.autor+'</p></a><a href="masinfo.html"><img src="'+this.imagen+'"></a><h3>'+this.genero+'</h3></div>';
        return a;
        }
}

let autores = [new autor('Bad Bunny', 'FotosArtistas/Bad Bunny.jpg', 'TRAP LATINO'),new autor('Bad Bunny', 'FotosArtistas/Bad Bunny.jpg', 'TRAP LATINO'),new autor('Bad Bunny', 'FotosArtistas/Bad Bunny.jpg', 'TRAP LATINO')];


let contenedor = document.getElementById("autor");

for (let i = 0; i < autores.length; i++) {
    let autor = autores[i];    
    addAutorToDOM(autor, i);
}

function addAutorToDOM(autor, i) {
let div = document.createElement("div");
div.classList = "cantante col-12 col-md-6 col-lg-4";

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