const express = require('express')
    // linea que declara la variable app para utilizar la funcion express
const app = express()
const hbs = require('hbs');

require('./hbs/helpers');

// puerto para heroku
const port = process.env.PORT || 3000;



// un midelwer es una instruccion o un callback que se ejecuta simepre sin importar
// la direccion que el usuario solicite

app.use(express.static(__dirname + '/public'));


/* 
Nota:
__dirname sirve para definir un path sin importar en que 
arpte este entra y buscara el nombre del archivo o carpeta
como esta definido
 */

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'joRgE jUrAdO'

    });
});
app.get('/about', (req, res) => {

    res.render('about', {

    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port}`);
})