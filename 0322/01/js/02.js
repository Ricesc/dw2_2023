console.log("Tarea 02");

function numerosPares(num){
    let array=[];
    for(let i = 1; i <= num; i++){
        if(i % 2 === 0){
            array.push(i);
        }
    }
    return array;
}
console.log(numerosPares(20));