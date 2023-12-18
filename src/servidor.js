const artistas = new Map();
let nextId = 0;


export function cargarArtistas(){

    addArtista({
        nombre: 'MELENDI',
        imagen: 'https://cdn-p.smehost.net/sites/a8928da38df6414aae98564041b07ae0/wp-content/uploads/2016/09/Melendi.jpg',
        genero: 'POP ESPAÑOL',
        fecha: '2024-07-18',  
        hora: '00:45',
        descripcion: 'Melendi, nombre artístico de Ramón Melendi; Oviedo, España, nacio el 1980. Cantante y compositor español. Ramón Melendi es un asturiano nacido en la ciudad de Oviedo en el año 1980 que gracias a las canciones de su primer disco ha conseguido ser conocido rápidamente en todo el país. El niño Ramón Melendi no era un apasionado por la música. De pequeño su principal afición era el fútbol y demostraba tener calidad suficiente como para tener un cierto futuro en la práctica de este deporte. Después de hacer las pruebas necesarias para entrar en el equipo jugó durante varios años en todas las categorías inferiores del histórico club de su ciudad, el Real Oviedo. No dejó el fútbol más o menos profesional hasta el 2001. Fue ese año cuando decidió encaminar sus pasos al mundo de la música y creó junto a algunos de sus amigos su primer grupo, El Bosque de Sherwood. Una de las canciones que forma parte de Sin noticias de Holanda es Con la luna llena. Este tema fue escogido para ser la sintonía oficial de la Vuelta Ciclista a España 2004. Media España lo conoció gracias al video promocional que se grabó con la participación del cantante y del campeón ciclista Abraham Olano y se enganchó a su ritmo contagioso convirtiéndolo en la canción del verano. Esto significa el lanzamiento definitivo a la fama de Melendi, que es incluso escogido cantante revelación del 2004. Los conciertos multitudinarios se suceden y el cantante consigue llenar escenarios tan importantes como el Palau Sant Jordi de Barcelona y el de Vistalegre de Madrid.',        
        canciones: [
        {
            nombre: 'Mi rumbita pa` tus pies',
            duracion: '3:54',
            colaborador: 'Pole',
            lanzamiento: '2023'
        },
        {
            nombre: 'Tu jardin con enanitos',
            duracion: '4:14',
            colaborador: 'Sin colaborador',
            lanzamiento: '2018'
        }
        ] 
    
    });


    addArtista({
        nombre: 'ESTOPA',
        imagen: 'https://cdn.notikumi.com/e/2023/04/22/1080/2023-4-22-concierto-tributo-a-estopa.jpg',
        genero: 'POP ESPAÑOL',
        fecha: '2024-07-17',  
        hora: '20:45',
        descripcion: 'Estopa es un dúo musical originario de Cornellá de Llobregat, Barcelona, España, que incursionó en la industria musical con géneros como el pop, flamenco, rock y rumba. Esta dupla nació en octubre de 1999 y se encuentra conformada por José Manuel Muñoz, quien se encargó de la guitarra, además asumió la vocalización junto a su hermano David Muñoz. Tras su conformación, Estopa se preparó para el lanzamiento de su primer trabajo discográfico que llevó nombre “Estopa”, cuyo estreno se llevó a cabo en octubre de 1999. Esta producción vino compuesta por 12 temas musicales, entre los que se pueden mencionar: “Tu calorro”, “La raja de tu falda”, “Me falta el aliento”, “Tan solo” y “Bossanova”, además trabajaron junto al sello discográfico Sony/BMG, con el que lograron vender más de mil doscientas copias, lo que se tradujo en un récord, ya que ninguna banda debutante había logrado tal cifra en tan poco tiempo. Tal fue la receptividad que logró este dúo musical, que emprendieron su primera gira promocional titulada “Ducados 2000” con la que recorrieron varios rincones de España e incluso llegaron a presentarse en Sudamérica, además lograron llevarse los premios como Artista Revelación y Mejor Grupo Español en los Premios Amigo, mientras que los Premio Ondas recibieron el galardón como Artista Revelación. En 2019 el dúo cumple 20 años desde la salida de su primer álbum y lo festeja editando, el 26 de abril, el doble CD+DVD Estopa - 20 Aniversario, que incluye el disco original y sus demos y además grabaciones de otros temas que quedarían para álbumes posteriores.​',        
        canciones: [
        {
            nombre: 'Tu calorro',
            duracion: '4:45',
            colaborador: 'Sin colaborador',
            lanzamiento: '2010'
        },
        {
            nombre: 'Vino tinto',
            duracion: '3:25',
            colaborador: 'Sin colaborador',
            lanzamiento: '2009'
        }
        ] 
    
    });

    addArtista({
        nombre: 'HARRY STYLES',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Harry_Styles_Wembley_June_2022.jpg/800px-Harry_Styles_Wembley_June_2022.jpg',
        genero: 'POP',
        fecha: '2024-07-17',  
        hora: '21:45',
        descripcion: 'Harry Edward Styles, conocido artísticamente como Harry Styles, es un cantante, compositor y actor británico, integrante de One Direction. Nació en Redditch, Worcestershire, Inglaterra, el 1 de febrero de 1994. Su disco debut como solista lleva por nombre "Harry Styles", lanzado al mercado el 12 de mayo de 2017. Su primer sencillo fue el tema Sign of The Times. En su carrera con One Direction, ha compuesto temas como Taken, Everything About You, Same Mistakes, Back for You y Summer Love, pertenecientes a los álbumes Up All Night y Take Me Home. También co-escribió los temas "Where Do Broken Hearts Go" y "Stockholm Syndrome" para el álbum Four, así como las canciones Hey Angel, Perfect, If I Could Fly y Olivia, del disco Made in the A.M., lanzado en 2015. Ha compuesto canciones para artistas como Ariana Grande, Meghan Trainor, Kodaline y Augustana. Tras el anuncio de que One Direction se tomaría un descanso, Harry Styles fue anunciado como parte del elenco de la nueva película de Christopher Nolan, Dunkirk. La filmación comenzó el 23 de mayo de 2016 y su estreno se espera para julio de 2017. Con influencias de The Beatles, Coldplay o Elvis Presley, para One Direction compuso canciones como Back for You, Taken, Everything About You, Summer Love o Same Mistakes para álbumes como Up All Night y Take Me Home.',        
        canciones: [
        {
            nombre: 'As it was',
            duracion: '2:47',
            colaborador: 'Sin colaborador',
            lanzamiento: '2020'
        },
        {
            nombre: 'Kiwi',
            duracion: '3:47',
            colaborador: 'Sin colaborador',
            lanzamiento: '2017'
        }
        ] 
    
    });


    addArtista({
        nombre: 'NIKONE',
        imagen: 'https://cdn.wegow.com/media/artists/nikone/nikone-1678697423.1800318.jpg',
        genero: 'RAP',
        fecha: '2024-07-18',  
        hora: '16:15',
        descripcion: 'Diego Garcia Andanuche, conocido artísticamente como Nikone, es un chico nacido en 1993 en el barrio Madrileño de Carabanchel. Fascinado desde pequeño por la escritura y la música, será atraído por el género Rap, ya que le permitía desahogarse y poner sus letras por fin sobre música. Empezó así a cantar por el barrio y en cada batalla/freestyle donde podía participar.Pero Nikone no es ningún novato. Su crecimiento como artista sucede sobre todo en Youtube y sus inicios se remontan a 2008, cuando empieza a dar forma a sus primeras canciones. Desde entonces no ha parado de escribir y en 2013 publica por fin su primera maqueta, Pa qué. Dos años más tarde lanza Biribibae, su tercer trabajo, que además de dar título a la maqueta, se convierte en una palabra fetiche que dará nombre desde entonces a su estilo personal. Cuando le decían que su estilo no era ni rap ni reggae, Nikone aclaraba que él hacía Biribibae, su particular visión de un estilo transgénero. En los últimos meses ha ido lanzando un buen puñado de temas. El último es Kiubo, una canción que transpira rap y reggae y que supone el sexto avance del disco después de Blanco y Negro, Dale, Buril, Casino y Báilalo. Precisamente, tracks como estos alertan de la gran diversidad de estilos que nos espera en Onirikone, desde rap o trap hasta otros sonidos más pop.',
        Canciones: [
        {
            nombre: 'Lo Real',
            duracion: '4:43',
            colaborador: 'Sin colaborador',
            lanzamiento: '2015'
        },
        {
            nombre: 'Mi amor',
            duracion: '2:59',
            colaborador: 'Sin colaborador',
            lanzamiento: '2023'
        }
        ] 
    
    });
    

    addArtista({
        nombre: 'DANI FERNANDEZ',
         imagen: 'https://hips.hearstapps.com/hmg-prod/images/dani-fondo-blanco-1546434571.jpg',
         genero: 'POP',
         fecha: '2024-07-17',  
         hora: '19:45',
         descripcion: 'Daniel Fernández Delgado, mejor conocido en el medio musical como Dani Fernández; también conocido por ser exmiembro de la banda Auryn, es un cantante y compositor. Nació en Alcázar de San Juan, Ciudad Real, España, el 11 de diciembre de 1991. Desde el 2009 hasta el 2016 estuvo como miembro de la banda Auryn, donde ganó un amplio reconocimiento en la escena musical; y en ese mismo 2016 comienza su carrera como solista haciendo covers de famosos cantantes. Tras haber ganado más popularidad después de haber participado en Destino Eurovisión, el 18 de octubre de 2011 los chicos de Auryn lanzaron su primer disco, titulado ‘Endeless Road, 7058’ de manera independiente y sin el apoyo de ninguna discográfica. El álbum fue número uno en España y permaneció durante dos años en la lista de los más vendidos. Las discográficas se dieron cuenta del potencial del grupo y en 2012 Auryn pasó a formar parte de la multinacional Warner Music Spain. En 2013 lanzaron su segundo disco ‘Anti-heroes’, con el que cuatro semanas después de su lanzamiento recibieron el Disco de Oro y con el que además fueron los ganadores del premio MTV Europe Music Awards 2013 al Mejor Artista Español.',
         canciones: [
         {
             nombre: 'Cero',
             duracion: '3:25',
             colaborador: 'Sin colaborador',
             lanzamiento: '2015'
         },
         {
             nombre: 'Clima tropical',
             duracion: '3:45',
             colaborador: 'Sin colaborador',
             lanzamiento: '2016'
         }
         ] 
     
     });


    addArtista({
        nombre: 'RAUW ALEJANDRO',
        imagen: 'https://www.rollingstone.com/wp-content/uploads/2022/01/R1360_RAUW_3.jpg',
        genero: 'REGUETON',
        fecha: '2024-07-18',  
        hora: '23:30',
        descripcion: 'Raúl Alejandro Ocasio Ruiz, conocido artísticamente como Rauw Alejandro, nació en Palma Sola, un pequeño y humilde barrio de Canóvanas (norte de Puerto Rico) en una familia humilde. Corría el año 1993. Sus padres, ambos cantantes, se divorciaron cuando él tenía 10 años. Tras la separación, su padre se mudó a Estados Unidos, su país natal, y Rauw Alejandro se crió con su madre, su hermana y su abuela, soñando con ser futbolista. “Mi madre tenía tres trabajos para mantenernos”, aseguraba. Se formó como músico en las calles de Carolina. Comenzó a publicar canciones de reguetón en la plataforma musical digital Soundcloud. El éxito fue progresivo pero irrefutable. Su primer disco, Afrodisíaco, se publicó en 2020 y contó con la colaboración de artistas como J Balvin, entre otros. Su gusto por la experimentación y la búsqueda se consolidó con la publicación de su segundo álbum de estudio, Vice versa. Su tercer disco, Saturno, lo llevó de gira por todo el mundo. A continuación, en febrero de 2022, lanzó su último sencillo con el productor Dímelo Flow con Farruko y la cantante María Becerra «Suelta», poco tiempo después, el 23 de febrero el cantante puertorriqueño sacaría a la luz el tracklist de su nuevo EP Trap Cake, Vol. 2 contando con colaboraciones de Future, Rvssian, Ankhal, Shenseea, Ty Dolla Sign. Éste saldría dos días después con sus nueve canciones, e incluiría diferentes géneros como trap, rap y hip hop.',        
        canciones: [
        {
            nombre: 'Baby Hello',
            duracion: '3:06',
            colaborador: 'Bizarrap',
            lanzamiento: '2022'
        },
        {
            nombre: 'Cuki',
            duracion: '3:06',
            colaborador: 'Sin colaborador',
            lanzamiento: '2023'
        }
        ] 
    
    });


    addArtista({
        nombre: 'SHAWN MENDES',
        imagen: 'https://phantom-elmundo.unidadeditorial.es/6079a7a3c2c64836a1063f6e7c7dd43d/resize/640/assets/multimedia/imagenes/2021/07/01/16251269932462.jpg',
        genero: 'POP',
        fecha: '2024-07-18',  
        hora: '17:45',
        descripcion: 'Shawn Peter Raul Mendes (8 de agosto de 1998, Pickering, Ontario) es un exitoso músico canadiense. Su padre es un hombre de negocios portugués asentado en Canadá, mientras que su madre es una agente de bienes raíces y nació en Gran Bretaña. Tiene una hermana menor, Aaliyah. En su infancia y adolescencia, jugó al hockey sobre el hielo y al fútbol; también recibió clases de actuación. Participó en castings de Disney Channel, pero no llegó a ser elegido. A los quince años, comenzó a publicar versiones de sus artistas favoritos en Youtube y en la aplicación social Vine. Hacia 2014, era el tercer músico con un mayor número de seguidores en Vine, lo que hizo que fuera fichado por la discográfica Island Records. Lanzó su primer sencillo, Life of the Party en junio de aquel año, por lo que se convirtió en el más joven en debutar entre los veinticinco primeros en el Billboard Hot 100 de Estados Unidos. Al mes siguiente su primer EP tuvo también una excelente acogida. Un año más tarde, llegó al fin su primer álbum, Handwritten, con un clamoroso éxito. Alcanzó el número uno en el Billboard 200 y certificó un disco de platino. Participó igualmente como telonero de Taylor Swift en su gira 1987. También participó en la banda sonora de la película de Diney, Los descendientes. Fue señalado por la revista Time como uno de los treinta adolescentes más influyentes del mundo.',        
        canciones: [
        {
            nombre: 'Stitches',
            duracion: '3:27',
            colaborador: 'Sin colaborador',
            lanzamiento: '2015'
        },
        {
            nombre: 'Bad reputation',
            duracion: '3:17',
            colaborador: 'Sin colaborador',
            lanzamiento: '2019'
        }
        ] 
    
    });


    addArtista({
        nombre: 'QUEVEDO',
        imagen: 'https://i.pinimg.com/736x/6f/80/e5/6f80e5cd99bf1fb94f64dc6796055d56.jpg',
        genero: 'REGUETON',
        fecha: '2024-07-18',  
        hora: '14:45',
        descripcion: 'Pedro Luis Domínguez Quevedo nació el 7 de diciembre de 2001 en Madrid. Con un año de edad, viajó con su familia a Brasil donde vivieron durante cinco años hasta que decidieron volver a España. Actualmente está radicado en Las Palmas de Gran Canaria. Aún siendo un adolescente, se inició en el freestyle rap, cantando para familiares y amigos. En el año de la pandemia, ha contado, se sintió perdido y decidió refugiarse en la música. Abandonó la universidad y se metió en un estudio a componer. Su carrera profesional comenzó a despegar de la mano del productor independiente Alejandro Prendergast (1998, Canarias), conocido Linton, que carecía de una cantera variada de artistas pero que supo ver su talento entonces. Así se ha ido moviendo por los géneros urbanos como el trap, el reguetón o el hip-hop hasta publicar más de una treintena de canciones. En 2021, su sencillo Ahora y siempre ocupó el puesto 19 en el top 50 de Los más virales: Global Spotify. También el segundo puesto de Los 50 más virales de España. En 2022 su carrera dio un gran salto con la grabación de “Cayó la noche remix”, junto a artistas del archipiélago como La Pantera, Juseph, Bejo, Cruz Cafuné, Abhir Hathic y El Ima, que supera los 100 millones de reproducciones en YouTube. Este tema lideró la lista Los 50 más virales: España y Top 50 España, además de situarse en el top de Los 50 más virales: Global. ',        
        canciones: [
        {
            nombre: 'Columbia',
            duracion: '3:26',
            colaborador: 'Sin colaborador',
            lanzamiento: '2023'
        },
        {
            nombre: 'Buenas',
            duracion: '3:33',
            colaborador: 'Sin colaborador',
            lanzamiento: '2023'
        }
        ] 
    
    });


    addArtista({
        nombre: 'ONE DIRECTION',
        imagen: 'https://m.media-amazon.com/images/I/81A-XG0dcXL.AC_UF894,1000_QL80.jpg',
        genero: 'POP',
        fecha: '2024-07-18',  
        hora: '15:45',
        descripcion: 'One Direction (abreviado frecuentemente como 1D) es una "boy band" británica-irlandesa formada en 2010 en Londres, Reino Unido, en el programa The X Factor. Durante la transmisión del concurso, el quinteto, compuesto en aquel entonces por Harry Styles, Liam Payne, Zayn Malik, Niall Horan y Louis Tomlinson. Zayn Malik abandono el grupo en marzo de 2015 para convertirse en solista. El grupo firmó con el sello discográfico de Simon Cowell, Syco Records, después de terminar tercero en la séptima serie del concurso. Propulsado al éxito internacional a través de las redes sociales, sus cuatro álbumes: Up All Night (2011), Take Me Home (2012), Midnight Memories (2013) y Four (2014) encabezaron las listas de popularidad, con éxitos como "What Makes You Beautiful", "Live While Were Young, Story of My Life y Steal My Girl. Tras el lanzamiento de su primer sencillo titulado "What Makes You Beautiful", la banda logró debutar en el puesto número uno de las principales listas del Reino Unido e Irlanda. Debido a su gran debut, recibieron varios reconocimientos, entre ellos: Brit Award al mejor sencillo británico, tres MTV Video Music Awards al mejor artista nuevo, mejor vídeo pop y vídeo más digno de compartir. Tiempo más tarde lograron gracias a tres nuevos sencillos que su éxito se expandiera por Europa y Oceanía. El álbum que posee todos estos sencillos, Up All Night, logró debutar en la posición número uno del Billboard 200, y además convirtió a la banda británica en el primer grupo que alcanza el número uno con su primer disco en la historia de la lista.',        
        canciones: [
        {
            nombre: 'Best song ever',
            duracion: '3:21',
            colaborador: 'Sin colaborador',
            lanzamiento: '2013'
        },
        {
            nombre: 'Stocholm Syndrome',
            duracion: '3:39',
            colaborador: 'Sin colaborador',
            lanzamiento: '2014'
        }
        ] 
    
    });


    addArtista({
        nombre: 'TAYLOR SWIFT',
        imagen: 'https://pyxis.nymag.com/v1/imgs/78d/600/9bacacbd254c30f24c6213ecb44edc0383-29-taylor-swift-acoustic.rvertical.w330.jpg',
        genero: 'POP',
        fecha: '2024-07-18',  
        hora: '13:45',
        descripcion: 'Taylor Swift es la compositora de las letras que nunca necesitaron de grandes contribuciones o ediciones para entregar su mensaje. Como una revisión de su vida, las canciones crecieron junto a ella, desde el momento en que se estrenó en el mundo del country, hasta convertirse en la cara más relevante de la última década del pop. Sus letras migraron de la fantasía a usar la metáfora para afrontar y criticar la realidad. Taylor y su música significaron el escapismo para muchos adolescentes, los mismos que hoy la validan por su autenticidad. Cuando tenía once años, ella y su familia hicieron su primera visita a Nashville, Tennessee, para buscar un contrato de grabación, aunque no salió nada de ello. Swift era juzgada a menudo y negada por sellos discográficos por ser muy joven. Dos años más tarde, su familia se mudó a Nashville: en el mismo año que Swift tuvo su contrato con RCA Records, que fue finalmente rechazada porque ella se negó a estar en un acuerdo de desarrollo de artista. A los 14 años, recibió su contrato con Sony/ATV Music. En 2005, mientras se presentaba en The Bluebird Café, Swift captó la atención de Scott Borchetta, Jefe de Big Machine Records; y eventualmente firmó con el sello.Conocida por letras basadas en experiencias personales, se interesó por la música desde niña, participando en karaokes y producciones de teatro musical. Incluso ganó un concurso de talento local cuyo premio fue cantar en el acto de apertura del músico Charlie Daniels.',        
        canciones: [
        {
            nombre: 'All too well',
            duracion: '10:23',
            colaborador: 'Sin colaborador',
            lanzamiento: '2022'
        },
        {
            nombre: 'Blank space',
            duracion: '3:52',
            colaborador: 'Sin colaborador',
            lanzamiento: '2014'
        }
        ] 
    
    });

     /*addArtista({
        nombre: 'BAD BUNNY',
        imagen: 'https://rec-end.elnuevodia.com/images/tn/0/10/892/1200/473/618/2019/01/23/721a274eb5cb4f078abc21094c72cb95.jpg',
        genero: 'TRAP LATINO', 
        fecha:  '2024-07-17',
        hora: '18:45',
        descripcion: 'Benito Antonio Martínez Ocasio (Almirante Sur, Vega Baja, Puerto Rico; 10 de marzo de 1994), conocido artísticamente como Bad Bunny o Conejo Malo, es un cantante, compositor, productor musical y luchador profesional puertorriqueño. Su estilo de música es generalmente definido como reguetón y trap latino, pero también ha interpretado varios géneros como kizomba, norteño, entre otros. Se caracteriza por su entonación grave, sin ninguna técnica vocal y su estilo de vestir. Bad Bunny había creado una canción llamada "Diles" y la subió a la plataforma de distribución de audio en línea, SoundCloud. La canción fue escuchada por muchos, incluido el productor musical DJ Luian. Luian quedó impresionado con las habilidades de canto de Bad Bunny y por lo tanto lo contrató, convirtiéndolo en un artista habitual para el sello discográfico "Hear this Music" y comenzando a colaborar con músicos populares. En 2017, se unió al cantante colombiano J Balvin y apareció en su exitoso Si Tu Novio Te Deja Sola. También apareció en el sencillo de Becky G, Mayores. En el mismo año, Bad Bunny firmó un acuerdo de reserva con Cardenas Marketing Network (CMN). Colaboró con Becky G en el single Mayores. En noviembre de 2017, su tema Tu no metes cabra, alcanzó el puesto 38 de la lista Hot Latin Songs. Prácticamente al mismo tiempo, el tema Sensualidad, lanzado en colaboración entre Bad Bunny, J Balvin y Prince Royce, se colocó en el puesto número 10 de Hot Latin Songs. ',
        canciones: [
        {
            nombre:'Amorfoda',
            duracion: '4:17',
            colaborador: 'nadie',
            lanzamiento: '2016'
        },
        {
            nombre:'WHERE SHE GOES',
            duracion: '3:33',
            colaborador: 'nadie',
            lanzamiento: '2023'
        }
        ]
    
    });

    addArtista({
        nombre: 'KIDD KEO',
        imagen: 'https://www.neo2.com/wp-content/uploads/2019/07/kidd-keo-luna-sobrino-exclusiva-neo2-2.jpg',
        genero: 'TRAP ESPAÑOL',
        fecha: '2024-07-17',  
        hora: '22:45',
        descripcion: 'Padua Keoma Salas, mejor conocido como Kidd Keo, es un joven nacido en 1995 en Alicante, España, con ascendencia canadiense. Es un rapero español famoso por sus canciones en Spanglish, destacándose por tener una posición fija en los puestos top en la escena trap español. Kidd ha dicho que el hecho de estar por ahí con gente de todos lados, y que su padre fuese extranjero y su familia del extranjero, han desarrollado en el un estilo mas extenso, influenciado por la cultura de otros países. En sus adolescencia, Kidd vivió en Canadá donde absorbió influencias no solo de música trap y rap, sino también de la moda, cultura y estilo de vida. Él y Neelo, con quien comparte una fuerte amistad y varias colaboraciones musicales, son amigos desde pequeño y hacían muchas travesuras desde el colegio, ellos han colaborado en un tema que se llama “Elevate”. En su adolescencia comenzó a escuchar música rap de Francia, de hecho unas de sus canciones más escuchada llamada “Okay”, es una adaptación de la canción del rapero francés Damson llamada “Debrouillard”. De igual forma comenzó a escuchar música trap y rap de Estados Unidos y Canadá, por estas razones, debido a su residencia en Canadá, es que se dice que el rapero está caracterizado por su estética americana.Para el cantante lo más preciado del mundo es su madre ya que fue la que se hizo cargo de él pues Keo nunca conoció a su padre. ',        
        canciones: [
        {
            nombre: 'Serpiente veneno',
            duracion: '3:18',
            colaborador: 'nadie',
            lanzamiento: '2017'
        },
        {
            nombre: 'Drakukeo',
            duracion: '3:30',
            colaborador: 'nadie',
            lanzamiento: '2019'
        }
        ] 
    
    });*/


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
    nuevaCancion.colaborador = colaborador !== "" ? nuevaCancion.colaborador : "Sin colaborador";        
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

cargarArtistas();
