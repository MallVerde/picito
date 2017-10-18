// Cargando dependencias

var path = require ('path'),
    exphdp = require ('express-handlebars'),
    express = require ('express'),
    bodyParser = require ('body-parser'),
    cookieParser = require ('cookie-parser'),
    morgan = require ('morgan'),
    methodOverride = require ('method-override'),
    errorHandler = require ('errorhandler'),
    moment = require ('moment')
    multer = require ('multer');

module.exports= function(app){
    // Conectando Middlewares
    // Middleware para
    // loggin de HTTP
    app.use(morgan('dev'));
    // Parseo de URL
    app.use(bodyParser.urlencoded({
        'extended':true
    }));
    app.use(bodyParser.json());
    // Compatibilidad de verbos HTTP
    app.use(methodOverride());
    // Parseo de Cookies
    app.use(cookieParser('Algun-valor-secreto'));
    // Habilitando el servicio estatico 
    // de archivos
    app.use ('/public/', express.static(path.join(
        __dirname, '../public'
    )));
    // Middleware para el  manejo 
    // de errores
    if (app.get('env') === 'development'){
        app.use(errorHandler());
    }
    return app;

}