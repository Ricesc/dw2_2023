/*console.log("Hola Mundo!!!");
var variable=1;
console.log(variable);
variable="Hola!!!";
console.log(variable);
variable=[1,3,"tres",[4,5]];
console.log(variable);
console.log(variable.length);
var i=0;
console.log("while");
while (i<variable.length)
{
    console.log(variable[i]);
    i++;
}
console.log("for");
for (x=0;x<variable.length;x++)
{
console.log(variable[x]);
}
console.log("for each");
variable.forEach(e => { 
    console.log(e);
});
var edad=21;
if (edad!=20){
    console.log("no puede comprar alcohol");
} else { console.log("si puede =)") }


function cliqueo ()
{
    //var ele=document.getElementById("texto");
    var ele=document.getElementsByClassName("texto");
    console.log(ele);
    //ele.innerHTML="Hola";
    //ele.classList.add("text-danger");
    console.log("lista")
    for (var i=0; i<ele.length; i++ )
    {
        console.log(ele[i]);
        ele[i].classList.add("text-danger");
    }

    // ele.forEach(e => {
    //     e;
    //  });
    
    alert("CORRE!");
}
*/

var frutas=["naranja","banana","sandia"];
console.log(frutas);
frutas[2]="pera";
console.log(frutas);
frutas.push("frutilla");
console.log(frutas);
console.log(frutas.indexOf("pera"));
frutas.unshift("mandarina");
console.log(frutas);
frutas.shift();
console.log(frutas);
console.log(frutas.length);
frutas.pop();
console.log(frutas);
function suma(a,b) {return a+b};
console.log(suma(5,10));
const resta = (a,b) => {return a-b};
//resta=[];//
console.log(resta(10,5));
frutas.forEach((item,i)=>{
    console.log("index es "+i+" y el valor es "+item)
});
frutas[1]="pomelo";
console.log(frutas);
