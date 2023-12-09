import {createServer} from 'http';

const httpServer = createServer((req, res)  => {
        const elemento = servidor.getElemetno(0, 15); //de 0  a 15 son los que se muestran por primera vez en la pagina
    res.render('index', { elemento: elemento});  //cargo el mustache 
});

httpServer.listen(3000); 


