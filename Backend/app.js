'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app= express();

//archivos de RUTAS
var projectRoutes=require('./routes/projectRoutes');

//MIDDLEWARES
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS
//Para las peticiones ajax de angular u jquery, con esta configuracion, funciona correctamente
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//RUTAS
app.use('/api', projectRoutes);


//EXPORTAR
module.exports=app;