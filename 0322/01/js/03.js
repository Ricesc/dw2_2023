console.log("Tarea 03")
var palabra = "Reconocer";

function palindromo (string){
    string = string.toLowerCase();
    let reverseStr="";
    for(let i = string.length - 1; i >= 0; i--){
        reverseStr += string[i];
    }
    if(reverseStr === string){
        console.log("Sí es un palindromo");
    } else{
        console.log("No es un palindromo")
    }
}
palindromo(palabra);