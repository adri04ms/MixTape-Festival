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

let autores = [new autor('Bad Bunny', 'FotosArtistas/Bad Bunny.jpg', 'TRAP LATINO'),new autor('Bad Bunny', 'FotosArtistas/Bad Bunny.jpg', 'TRAP LATINO')];


let contenedor = document.getElementById("autor");

for (let i = 0; i < autores.length; i++) {
    let autor = autores[i];    
    addAutorToDOM(autor, i);
}

function addAutorToDOM(autor, i) {
let div = document.createElement("div");
div.id = "autorDiv";

let nombreElement = document.createElement("p");
nombreElement.textContent = autores[i].nombre;
nombreElement.href = "masinfo.html";


let imagenElement = document.createElement("img");
imagenElement.src = "FotosArtistas/Bad Bunny.jpg";
imagenElement.alt = autores[i].imagen;
imagenElement.href = "masinfo.html";

div.appendChild(nombreElement);
div.appendChild(imagenElement);

document.getElementById("divAutor").appendChild(div);

}