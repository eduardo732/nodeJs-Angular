'use strict'

var moongoose=require('moongoose');

var Schema=moongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: number,
    langs: [String]
});

module.exports=moongoose.model('Project', ProjectSchema);