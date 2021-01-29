'use strict'

var express = require('express');

var projectController=require('../controller/projectController');

var router= express.Router();

//Para subir archivos hay que configurar el multipart y el middleware.
var multiPart= require('connect-multiparty');
var multiPartMiddleware= multiPart({uploadDir: './uploads'});

router.get('/home', projectController.home);
router.post('/test', projectController.test );
router.post('/saveProject', projectController.saveProject);
router.get('/getProject/:id?', projectController.getProject);
router.get('/getAllProjects', projectController.getAllProjects);
router.put('/updateProject/:id', projectController.updateProject );
router.delete('/deleteProject/:id', projectController.deleteProject);
router.post('/uploadImage/:id', multiPartMiddleware, projectController.uploadImage);
module.exports = router;