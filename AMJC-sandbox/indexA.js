/* ------------ CLASE VIERNES 17 FEB ------------- */

/*
var a = 1; b = "1";
if(a==b){
    console.log("Iguales");
} else{
    console.log("Distintos");
}


function log(msg){
    console.log(msg);
}

log("Mi fantastico log");

var numbers = [1,2,3,4];


a[0] = 1;
a[1] = 2;
a[2] = 3;
a[3] = 4;

a.push(5);


for(var i=0;i<numbers.length;i++){
    log(numbers[i]);
}

numbers.forEach(log);

numbers.forEach(function(msg){
    console.log(msg);
});


var i = numbers.filter((n)=>{
    return n > 2;
}).map((n)=>{
    return n+1;
}).reduce((a,n)=>{
    return n+a;
});

log(i);
*/

/* ------------ CLASE VIERNES 24 FEB ------------- */

var express = require("express");
var cool = require("cool-ascii-faces");
const { request, response } = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 12345;
app.use(bodyParser.json());

/*
app.get("/faces", (request,response) => {
    response.send(cool());
    console.log("New request");
});
*/

var contacts = [
    {
        name : "pepe",
        phone: 12345
    },
    {
        name : "pablo",
        phone : 67890
    }
];

const BASE_API_URL = "/api/v1";

app.get(BASE_API_URL+"/contacts", (request,response) => {
    response.json(contacts);
    console.log("New GET to /contacts");
});


app.post(BASE_API_URL+"/contacts", (request,response) => {
    var newContact = request.body;
    console.log(`newContact = <${newContact}>`);
    console.log("New POST to /contacts");
    response.sendStatus(201);
});


app.listen(port,()=>{
    console.log(`Server ready in port ${port}`);
});


