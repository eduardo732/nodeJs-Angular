'use strict'

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
    }
};

module.exports=controller;