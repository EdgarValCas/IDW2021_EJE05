var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/eje05');

var Person = mongoose.model("Person",schema, "persons");

var person = new Person({
    title: "Nuevo integrante",
    author: "Edgar Valderrama",
    body: "Aqui se escribe el body",
    comments: [
        {
            body: "***comentario***",
            date: "03/05/2021",
        },
    ],
    meta: [{
        votes: 34,
        fav: 2,
    },
],
});

person.save(function(error){
    if(error){
        console.log(console.error());
        process.exit(1);
    }
    console.log('Creacion exitosa');
    process.exit(0);
});