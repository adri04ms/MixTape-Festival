const artistas = new Map();
let nextId = 0;


export function loadSampleData(){

    addArtista({
        nombre: 'BAD BUNNY',
        imagen: 'https://rec-end.elnuevodia.com/images/tn/0/10/892/1200/473/618/2019/01/23/721a274eb5cb4f078abc21094c72cb95.jpg',
        genero: 'TRAP LATINO', 
        fecha:  '17/7/24',
        hora: '17:45',
        descripcion: 'Benito Antonio Martínez Ocasio (Almirante Sur, 10 de marzo de 1994), conocido artísticamente como Bad Bunny, es un cantante, compositor, productor musical y luchador profesional puertorriqueño. Su estilo musical es generalmente definido como reguetón y trap latino, aunque también ha interpretado otros géneros y estilos variados. Se caracteriza por su entonación grave y su estilo de vestir. ',
        canciones: [
        {
            nombre:'Amorfoda',
            duracion: '4:17',
            colaborador: 'nadie',
            lanzamiento: '2016'
        }
        ]
    
    });

    addArtista({
       nombre: 'DANI FERNANDEZ',
        imagen: 'https://www.themusicrepublic.es/wp-content/uploads/2022/03/Dani-Fernandez-2.jpg',
        genero: 'POP',
        fecha: '17/07/2024',  
        hora: '18:45',
        descripcion: 'Entre el 2017 y 2018 Dani subió otras versiones acústicas de sus canciones, antes de que fueran incluidas en su futuro primer álbum. El 18 de mayo del 2018 presentó su primera canción en solitario Te esperaré toda la vida, canción que recibió una gran acogida por parte del público y más tarde fue certificada disco de platino.',
        canciones: [
        {
            nombre: 'Cero',
            duracion: '3:25',
            colaborador: 'nadie',
            lanzamiento: '2015'
        }
        ] 
    
    });

    addArtista({
        nombre: 'ESTOPA',
        imagen: 'https://cdn.notikumi.com/e/2023/04/22/1080/2023-4-22-concierto-tributo-a-estopa.jpg',
        genero: 'POP ESPAÑOL',
        fecha: '17/07/2024',  
        hora: '19:45',
        descripcion: 'Estopa es un dúo español de rumba catalana formado por los hermanos David y José Manuel Muñoz. Creado el 18 de octubre de 1999, el grupo es natural de la ciudad de Cornellá de Llobregat, comarca del Bajo Llobregat, Barcelona. Con su primer disco consiguieron ventas superiores a 1.000.000 de copias, logrando así el reconocimiento en su país natal y después en países americanos como Argentina, México, Colombia y Venezuela. Su música mezcla el estilo flamenco y rumbas urbanas. Son grandes admiradores de Joaquín Sabina, Joan Manuel Serrat, Robe Iniesta y de Pancho Varona. Han vendido más de 4 millones de discos en el ámbito nacional e internacional.2​',        
        canciones: [
        {
            nombre: 'Tu calorro',
            duracion: '4:45',
            colaborador: 'nadie',
            lanzamiento: '2010'
        }
        ] 
    
    });

    addArtista({
        nombre: 'HARRY STYLES',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Harry_Styles_Wembley_June_2022.jpg/800px-Harry_Styles_Wembley_June_2022.jpg',
        genero: 'POP',
        fecha: '17/07/2024',  
        hora: '20:45',
        descripcion: 'Luego de que One Direction anunciara un descanso indefinido, Styles inició su carrera como solista con la publicación de su álbum homónimo en 2017, el cual recibió buenos comentarios de la crítica y debutó en la cima de las listas de los principales mercados del mundo.',        
        canciones: [
        {
            nombre: 'As it was',
            duracion: '2:47',
            colaborador: 'nadie',
            lanzamiento: '2020'
        }
        ] 
    
    });

    addArtista({
        nombre: 'KIDD KEO',
        imagen: 'https://www.neo2.com/wp-content/uploads/2019/07/kidd-keo-luna-sobrino-exclusiva-neo2-2.jpg',
        genero: 'TRAP ESPAÑOL',
        fecha: '17/07/2024',  
        hora: '22:45',
        descripcion: 'Ha registrado colaboraciones con artistas como Duki, Lil Xan, Kevin Roldán, Neo Pistea, Lit Killah, FMK, Bizarrap, Cruz Cafuné y Recycled J, y ha participado en eventos como Buenos Aires Trap, Madrid Salvaje, Holika Festival, Arenal Sound, Cosquín Rock y el Festival Lollapalooza Argentina.Paralelo a su carrera como solista, hace parte del proyecto Bardero$ junto a Homer El Mero Mero, con el que ha grabado varios álbumes de estudio. C.R.O es conocido como «el artista de los 100 géneros».',        
        canciones: [
        {
            nombre: 'Serpiente veneno',
            duracion: '3:18',
            colaborador: 'nadie',
            lanzamiento: '2017'
        }
        ] 
    
    });

    addArtista({
        nombre: 'MELENDI',
        imagen: 'https://cdn-p.smehost.net/sites/a8928da38df6414aae98564041b07ae0/wp-content/uploads/2016/09/Melendi.jpg',
        genero: 'POP ESPAÑOL',
        fecha: '18/07/2024',  
        hora: '00:45',
        descripcion: 'De joven sentía atracción por el fútbol, deporte que lo condujo por una corta carrera de futbolista, debutando en varias categorías inferiores en el equipo de su ciudad, el Real Oviedo. Dejó el fútbol a inicios de 2001, mismo año cuando decidió encaminar sus primeros pasos como músico, formando parte de una banda creada con sus amigos de nombre «El bosque de Sherwood»',        
        canciones: [
        {
            nombre: 'Mi rumbita pa` tus pies',
            duracion: '3:54',
            colaborador: 'Pole',
            lanzamiento: '2023'
        }
        ] 
    
    });

    addArtista({
        nombre: 'RAUW ALEJANDRO',
        imagen: 'https://images.ecestaticos.com/55chEtTYR0Ecs90P5EaKNXcPC8M=/573x0:1689x1489/1440x1920/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F440%2Fa34%2F386%2F440a34386be33828eb24867fc7240705.jpg',
        genero: 'REGUETON',
        fecha: '18/07/2024',  
        hora: '17:30',
        descripcion: 'Raúl Alejandro Ocasio Ruiz (San Juan, Puerto Rico; 10 de enero de 1993), conocido artísticamente como Rauw Alejandro, es un cantante, compositor, productor musical y bailarín puertorriqueño. Pertenece a la «nueva generación» de músicos urbanos puertorriqueños. Su álbum de estudio debut es Afrodisíaco, estrenado en 2020, mientras que su segundo álbum de estudio, Vice Versa, estrenado en junio de 2021, contó con el sencillo principal, el éxito «Todo de ti». Ha ganado un Premio Grammy Latino de cuatro nominaciones.',        
        canciones: [
        {
            nombre: 'Baby Hello',
            duracion: '3:06',
            colaborador: 'Bizarrap',
            lanzamiento: '2022'
        }
        ] 
    
    });

    addArtista({
        nombre: 'SHAWN MENDES',
        imagen: 'https://hips.hearstapps.com/hmg-prod/images/shawn-mendes-ckc-1557398943.jpg',
        genero: 'POP',
        fecha: '18/07/2024',  
        hora: '18:45',
        descripcion: 'Shawn Peter Raul Mendes (Pickering, Ontario, 8 de agosto de 1998) es un cantante, compositor y modelo canadiense. Obtuvo seguidores en 2013, cuando comenzó a publicar versiones de canciones en la aplicación para compartir videos de Vine. Al año siguiente, llamó la atención del gerente artístico Andrew Gertler y del jefe de A&R de Island Records, Ziggy Chareton, lo que lo llevó a firmar un acuerdo con dicho sello discográfico. Desde entonces, lanzó tres álbumes de estudio, encabezó tres giras mundiales y recibió varios premios. En 2015, publicó su primer álbum Handwritten, que tuvo éxito en los Estados Unidos al entrar en la número 1 del Billboard 200, al igual que su sencillo «Stitches» que ingresó a las diez principales posiciones del Billboard Hot 100 en los Estados Unidos y Canadá, y la número uno en la lista de sencillos de Reino Unido.',        
        canciones: [
        {
            nombre: 'Stitches',
            duracion: '4:18',
            colaborador: 'nadie',
            lanzamiento: '2017'
        }
        ] 
    
    });

    addArtista({
        nombre: 'NIKONE',
        imagen: 'https://cdn.wegow.com/media/artists/nikone/nikone-1678697423.1800318.jpg',
        genero: 'RAP',
        fecha: '18/07/2024',  
        hora: '20:15',
        descripcion: 'Diego Garcia Andanuche, conocido artísticamente como Nikone, es un chico nacido en 1993 en el barrio Madrileño de Carabanchel. Fascinado desde pequeño por la escritura y la música, será atraído por el género Rap, ya que le permitía desahogarse y poner sus letras por fin sobre música. Empezó así a cantar por el barrio y en cada batalla/freestyle donde podía participar.',
        Canciones: [{
            nombre: 'Lo Real',
            duracion: '4:43',
            colaborador: 'nadie',
            lanzamiento: '2015'
        }
        ] 
    
    });

    addArtista({
        nombre: 'ONE DIRECTION',
        imagen: 'https://m.media-amazon.com/images/I/81A-XG0dcXL._AC_UF894,1000_QL80_.jpg',
        genero: 'POP',
        fecha: '18/07/2024',  
        hora: '21:45',
        descripcion: 'One Direction (abreviado frecuentemente como 1D) fue una boy band británico-irlandesa formada en 2010 en Londres (Reino Unido), con motivo del programa The X Factor. Durante la transmisión del concurso, el quinteto, compuesto en aquel entonces por Harry Styles, Liam Payne, Zayn Malik, Niall Horan y Louis Tomlinson, fue apadrinado por Simon Cowell. Su formación se dio luego de que los cinco integrantes hicieran sus audiciones y fueran expulsados de la competencia. Tras esto, Nicole Scherzinger, una de las juezas, sugirió que los cinco formasen parte de un grupo, al que finalmente llamaron One Direction. El grupo finalmente quedó en el tercer lugar del concurso, pero aun así Cowell pagó un contrato discográfico con Syco Music para que pudiesen lanzar un disco',        
        canciones: [
        {
            nombre: 'Best song ever',
            duracion: '3:20',
            colaborador: 'nadie',
            lanzamiento: '2012'
        }
        ] 
    
    });

    addArtista({
        nombre: 'QUEVEDO',
        imagen: 'https://i.pinimg.com/736x/6f/80/e5/6f80e5cd99bf1fb94f64dc6796055d56.jpg',
        genero: 'REGUETON',
        fecha: '18/07/2024',  
        hora: '22:45',
        descripcion: 'Quevedo nació en Madrid pero a los pocos meses su familia se mudó a Brasil, donde vivió hasta los cinco años. Tras unos años viviendo en Sudamérica su familia regresó a España, concretamente a Las Palmas de Gran Canaria. Al llegar a Gran Canaria empezó a estudiar en el Colegio San Antonio María Claret, tras completar bachillerato empezó a estudiar Administración y Dirección de Empresas (ADE), carrera que terminaría abandonando para centrarse en su carrera musical. Después de iniciarse en el freestyle rap, Quevedo comenzó su carrera en 2020, de la mano del productor Linton. Su sencillo «Ahora y siempre» (2021) ocupó el puesto #19 en la playlist Los 50 más virales: Global de Spotify, alcanzando también el segundo puesto en la lista de Los 50 más virales: España.',        
        canciones: [
        {
            nombre: 'Columbia',
            duracion: '4:16',
            colaborador: 'nadie',
            lanzamiento: '2023'
        }
        ] 
    
    });

    addArtista({
        nombre: 'TAYLOR SWIFT',
        imagen: 'https://pyxis.nymag.com/v1/imgs/78d/600/9bacacbd254c30f24c6213ecb44edc0383-29-taylor-swift-acoustic.rvertical.w330.jpg',
        genero: 'POP',
        fecha: '18/07/2024',  
        hora: '00:45',
        descripcion: 'Taylor Alison Swift (West Reading, Pensilvania; 13 de diciembre de 1989) es una cantautora, productora, directora, actriz y empresaria estadounidense. Criada en Wyomissing (Pensilvania), se mudó a Nashville (Tennessee) a los 14 años para realizar una carrera de música country. Firmó con la compañía discográfica independiente Big Machine Records y se convirtió en la artista más joven contratada por Sony/ATV Music Publishing House. En 2006 lanzó su álbum debut homónimo, que la estableció como una estrella en la música Pop. «Our Song», su tercer sencillo, la convirtió en la persona más joven en escribir temas de forma solista e interpretar una canción número uno en la lista de Hot Country Songs. En 2008 recibió una nominación a mejor artista nuevo en la 50.ª edición de los Premios Grammy.',        
        canciones: [
        {
            nombre: 'All too well',
            duracion: '10:23',
            colaborador: 'nadie',
            lanzamiento: '2022'
        }
        ] 
    
    });


}

export function addArtista(artista) {
    let id = nextId++;           
    artista.id = id.toString();
    artistas.set(artista.id, artista);
    return artista.id;
  
}

export function addCancion(id,{nombre, duracion, lanzamiento, colaborador}) {
    const artistToUpdate = artistas.get(id);
    let nuevaCancion = {nombre, duracion, lanzamiento, colaborador};          
    artistToUpdate.canciones.push(nuevaCancion);
}

export function getArtistas(from, to) {
    return [...artistas.values()];
}

export function getArtista(id) {
    return artistas.get(id);
  }

export function deleteArtista(id){ /* Borra un elemento del mapa a través de una id que le proporciono */
  artistas.delete(id);
}

export function editArtista(id, { nombre, imagen, genero, fecha, hora, descripcion }) {
        const artistToUpdate = artistas.get(id);
        artistToUpdate.nombre = nombre !== undefined ? nombre : artistToUpdate.nombre;
        artistToUpdate.imagen = imagen !== undefined ? imagen : artistToUpdate.imagen;
        artistToUpdate.genero = genero !== undefined ? genero : artistToUpdate.genero;
        artistToUpdate.fecha = fecha !== undefined ? fecha : artistToUpdate.fecha;
        artistToUpdate.hora = hora !== undefined ? hora : artistToUpdate.hora;
        artistToUpdate.descripcion = descripcion !== undefined ? descripcion : artistToUpdate.descripcion;
        artistas.set(id, artistToUpdate);
    }



loadSampleData();  
