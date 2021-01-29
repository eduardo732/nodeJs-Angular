'use strict'

var moongoose=require('mongoose');

var Schema=moongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

module.exports=moongoose.model('Project', ProjectSchema);