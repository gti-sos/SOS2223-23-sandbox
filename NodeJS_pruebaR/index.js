/*Javascript Lenguaje Interpretado

Interpretado Vs Compilado

Un poco de historia: Dos semanas para desarollar un subconjunto de Javascript. Por eso Javascript
depende de una organización sin animo de lucro llamada ECMA.
En 2009 nació el proyecto Chromium, que creo entre otras cosas un motor nuevo de Javascript llamado
V8, que elevo Javascript a otro nivel. Posteriormente se creo NodeJS.

Defectos: Javascript Un gran poder conlleva una gran responsabilidad. Depurar un mal código en 
Javascript es un infierno, hay que ser ordenado y responsable con lo que se escribe.

La guia de referencia que le gusta es MDN JavaScript*/

function log(msg){
    console.log(msg)
}

var a = [1,2,3,4];

/*for(var i=0; i<a.length; i++){
    log(a[i]);
}*/

a.forEach(log); //Concepto de Callback: Paso una funcion como argumento. 

/* Pasar como argumento de una funcion se puede hacer de mil maneras, podemos directamente
definir la función en la propia llamada y podemos llamarla sin nombre sería algo así

a.forEach(function (msg){ console.log(msg) })

De hecho en las últimas actualizaciones se han metido el operador => que simplifica
aun mas la sintaxis de este concepto 

a.forEach((msg) => { console.log(msg) }) */

// Iterador filter

// a.filter((n) => {return n > 2;}).forEach(log); Devuelve 3 y 4

//Iterador Map

// a.map((n) => {return 2*n;}).forEach(log);  Devuelve 2,4,6 y 8

//Iterador reduce