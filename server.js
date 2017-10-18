// Cargando dependecias

const express = require("express"),
    path = require("path"),
    config = require ("./server/configure");

// Creando la instancia de una aplicación

var app = express();

// Guardando unas variablesde 
// de entorno 

app.set('port',process.env.PORT ||3000);
app.set('ip',process.env.IP || '0.0.0.0');

//Configurar las rutas de las vistas

app.set('views', path.join ( __dirname,"/views"));

//Aplicando configuraciones a nuestra App

app=config(app);

// Crear las rutas de pruena de la app

app.get('/', (req, res)=>{
    //Codificando de la respuesta
    res.send ("Hola Mundo")
});

// Consultar las variables de entorno 
// p ara rescatar la IP y el PORT

const IP = app.get ('ip');
const PORT = app.get ('port');
//Iniciar el servidor
app.listen(PORT, IP, (err)=>{
    if (err){
        console.log("> Error al iniciar server");
        throw err;
    }
    console.log(`> Servidor escuchando en http://${IP}:${PORT}`);

})