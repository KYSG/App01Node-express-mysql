
import express from 'express'  //Importamos express
import {conectar, agregarContacto, obtenerContactos, borrarContacto} from './src/mysql_conector.js'

let todos 

const app= express () //Inicia express

//Incio del servidor
app.listen('8000', function () { //callback
    console.log('aplicacion iniciada en el puerto 8000')
})

//Configuracion de pug
app.set('views','./vistas')
app.set('view engine','pug') 

//Configuracion de archivos estaticos 
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))

app.get('/', function(req,res) { //get: ruta incial
    //res.send('aplicacion iniciada OK')
    todos = obtenerContactos()
    res.render('index', {titulo:'Aplicacion de contactos', contactos:todos})
})

app.get('/agregar/:nombre/:numero', function(req, res) {
    let nombre = req.params.nombre
    let numero = req.params.numero
    agregarContacto(numero, nombre)
    res.redirect('/')
    console.log(nombre, numero)
})
app.get('/borrar/:id', function(req, res){
    let id = req.params.id
    borrarContacto(id)
    res.redirect('/')
})
