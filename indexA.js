/*
var a = 1; b = "1";
if(a==b){
    console.log("Iguales");
} else{
    console.log("Distintos");
}
*/

function log(msg){
    console.log(msg);
}

log("Mi fantastico log");

var numbers = [1,2,3,4];

/*
a[0] = 1;
a[1] = 2;
a[2] = 3;
a[3] = 4;

a.push(5);
*/

/*
for(var i=0;i<numbers.length;i++){
    log(numbers[i]);
}

numbers.forEach(log);

numbers.forEach(function(msg){
    console.log(msg);
});
*/

var i = numbers.filter((n)=>{
    return n > 2;
}).map((n)=>{
    return n+1;
}).reduce((a,n)=>{
    return n+a;
});

log(i);

