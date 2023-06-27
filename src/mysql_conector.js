
//Importar mysql
import mysql from 'mysql'
let todos 

//Crear la conexion 
const conector = mysql.createConnection({

    host:'localhost',
    user: 'Yulieth',
    password: '12345678',
    database: 'agenda_contactos',

})

const conectar= () => {
    conector.connect(err => {
        if(err) throw err
        console.log('conectado')
    })
}

const agregarContacto = (numero, nombre) => {
    const sql = `INSERT INTO agend (id_agenda, numero_contacto, nombre_contacto) VALUES (${null}, ${numero}, "${nombre}")`
    conector.query(sql, function(err, result, filed){
        if(err) throw err
        console.log(result)
    })
}

const obtenerContactos = () => {
    const sql = 'SELECT * FROM agend'
    conector.query(sql, function (err, result,field){
        todos = result
    })
    return todos
}

const borrarContacto = id => {
    const sql = `DELETE FROM agend where id_agenda=${id}`
    conector.query(sql)
}


export {conectar, agregarContacto, obtenerContactos, borrarContacto}