console.log("Tarea 01")

var numeros = [1,2,3,4,5];

function suma(array){
    let sum=0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum;
};
console.log(suma(numeros));
