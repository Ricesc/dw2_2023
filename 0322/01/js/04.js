console.log("Tarea 04")
var arreglo = [1,2,3,4,5]

console.log(arreglo)

console.log("Elige un valor para reemplazar")

function reemplazarValor(array,valor,nuevoValor){
    
    for(let i = 0; i <= array.length; i++){
        if(valor === array[i]){
            array[i]=nuevoValor;
        }
    }
}
reemplazarValor(arreglo,3,8);
console.log(arreglo);
