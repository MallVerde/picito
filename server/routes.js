// Se cargan las dependencias 
// para crear as rutas

var express = require('express'),
    router = express.Router();

// Se caran los controladores

var homeController = require('../controllers/home');
var imageController = require('../controllers/image');


module.exports = function(app){
    // Se empaquetan las rutas usando 
    // el objeto raouter
    //para el home

    router.get( '/', homeController.index);
    router.get( '/home', homeController.index);
    router.get( '/home/index', homeController.index);

    //para img

    router.get( '/images/index/:image_id', imageController.index);
    router.get( '/images/create',imageController.create);
    router.get( '/images/like/:image_id',imageController.like);
    router.get( '/images/comment/:image_id',imageController.comment);

    // Cargando las rutas empaquetadas a la aplicación 
    app.use(router);
    return app;
};