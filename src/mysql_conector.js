
//Importar mysql
import mysql from 'mysql'

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





export {conectar, agregarContacto}