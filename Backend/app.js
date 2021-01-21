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

//RUTAS
app.use('/api', projectRoutes);


//EXPORTAR
module.exports=app;