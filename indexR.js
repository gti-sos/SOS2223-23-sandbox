//Esto son pruebas del lab05, este fichero desaparecera en la rama prinicpal

var cool = require('cool-ascii-faces');
var express = require('express');


var app = express();
var port = 12345;

app.get('/faces', (req, res) => {
    res.send(cool());
    console.log('New request')
})

app.listen(port, () => {
    console.log(`Server ready in port ${port}`);
});

