var myInteger = 1;
var myFloat = 1.2;
var myBoolean = false;
var a = 1; b = "1";
if(a==b){
    console.log("Iguales");
} else{
    console.log("Distintos");
}
function log(msg){
    console.log(msg)
}

log("Mi fantastico log");
var o = new Object();
var mapa = new Map();
var a = new Array();

var numbers = [1,2,3,4];
log(numbers);
/*
for (var i = 0;i<numbers.length;i++){
    log(numbers[i]);
}
Ambas son iguales, el forEach aplica la función a cada elemento,usando cada elemento como parámetro.
numbers.forEach(log);

callback sirve mucho, es pasar la función como parámetro y sirve como respuesta a algo que no sabemos cuando ocurrirá, sirve para funciones
asíncronas.
*/ 

/*Si la función solo la voy a usar aquí puedo crearla directamente y haría lo mismo

numbers.forEach(function log (msg){
        console.log("version 2"+msg)
});
y si lo vamos a usar una vez para que ponerle nombre: 

numbers.forEach(function (msg){
        console.log("version 3"+msg)
});

y si lo vamos a usar una vez para que ponerle fuction: 
numbers.forEach((msg) => {
        console.log("version 4"+msg)
}); Todo da el mismo resultado.
*/
/*Otros iteradores
.filter:llama a la función por cada elemento y te filtra y te devuelve un array en los que se cumpla la condición cierto.
*/
numbers.filter((n)=>{
        return n > 2;
    }).forEach(log);
/*
.map: pasa cada uno de los elementos y devuelve en que se transforman cada uno de los elementos
*/
numbers.filter((n)=>{
    return n > 2;
}).map((n)=>{
    return n+1;
}).forEach(log);
/*
.reduce: recibe dos parámetros, acumulador y el elemento que se va a iterar. Devuelve el valor del acumulador
*/
var i = numbers.filter((n)=>{
    return n > 2;
}).map((n)=>{
    return n+1;
}).reduce((a,n)=>{
    return a + n;
});
log(i);