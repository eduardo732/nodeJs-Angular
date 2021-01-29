'use strict'

var Project= require('../models/project');
//Libreria node para borrar archivos
var fs = require('fs');

var controller={
    home:function(req, res){
       return res.status(200).send({
           message: "I'm the big home"
       });
    },
    test:function(req, res){
        return res.status(200).send({
            message: "I'm the big test"
        });
    },
    saveProject:function(req, res){
        var project= new Project();

        //Primero debemos recoger los parametros que vienen desde el frontend...
        var params=req.body;
        project.name=params.name;
        project.description=params.description;
        project.category=params.category;
        project.year=params.year;
        project.langs=params.langs;
        project.image=null;

        project.save((err, projectStored) => {
            if (err) return res.status(500).send({
                message: 'Error status 500 al guardar el projecto...'
            });
            if (!projectStored) return res.status(404).send({
                message: 'Error 404 al intentar guardar el projecto'
            });

            return res.status(200).send({project: projectStored});
        }); 
    },
    getProject:function(req, res){
        var projectId = req.params.id;
        if (projectId== null) return res.status(404).send({
            message: 'Error status 404'
        });

        Project.findById(projectId, (err, project)=>{
            if (err) return res.status(500).send({
                message: 'Error status 500'
            });
            if (!project) return res.status(404).send({
                message: 'Error status 404'
            });

            return res.status(200).send({
                project
            });
        });
    },
    getAllProjects:function(req, res){

        Project.find({}).exec((err, projects)=>{
            if (err) return res.status(500).send({
                message: 'Error status 500'
            });
            if (!projects) return res.status(404).send({
                message: 'Error status 404'
            });

            return res.status(200).send({
                projects
            });
        });
    }, 
    updateProject:function(req,res){
        var projectId=req.params.id;
        if (projectId== null) return res.status(404).send({
            message: 'Error status 404'
        });
        var update=req.body;

        Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated)=>{
            if (err) return res.status(500).send({
                message: 'Error status 500'
            });
            if (!projectUpdated) return res.status(404).send({
                message: 'Error status 404'
            });

            return res.status(200).send({
                projectUpdated
            });
        });
    },
    deleteProject:function(req,res){
        var projectId=req.params.id;
        if (projectId== null) return res.status(404).send({
            message: 'Error status 404'
        });
        Project.findByIdAndDelete(projectId, (err, project)=>{
            if (err) return res.status(500).send({
                message: 'Error status 500'
            });
            if (!project) return res.status(404).send({
                message: 'Error status 404'
            });

            return res.status(200).send({
                message: 'Eliminado correctamente'
            });
        });
    },
    uploadImage:function(req,res){
        var projectId=req.params.id;
        let fileName='Imagen no subida...';

        if(req.files){
            
            var filePath= req.files.null.path;
            var fileSplit= filePath.split('/');
            fileName=fileSplit[1];
            var extSplit= fileName.split('.');
            var fileExt= extSplit[1];

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg'  || fileExt == 'gif' ){
                Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true} , (err, projectUpdated)=>{
                    if (err) return res.status(500).send({message: 'La imagen no se ha subido.'});
    
                    if (!projectUpdated) return res.status(404).send({ message: 'El proyecto no existe y no se ha subido la imagen.'});
    
                    return res.status(200).send({
                        project: projectUpdated
                    });
                });
            }else{

                fs.unlink(filePath, (err) =>{
                    return res.status(200).send({message: 'La extension no es valida'});
                });
            }
            
            

            
        }else{
            return res.status(200).send({
                files: fileName
            });
        }
    }
};

module.exports=controller;