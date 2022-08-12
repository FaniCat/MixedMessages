const frutas=['manzana', 'pera', 'uva'];
const proteinas=['pollo', 'pescado', 'res'];
const ejercicio=['correr', 'caminar', 'nadar'];

//prints the three lines of a random 
let frase=[];
frase.push(frutas[getRandomIndex(getMaxNumber(frutas))]);

frase.push(proteinas[getRandomIndex(getMaxNumber(proteinas))]);
frase.push(ejercicio[getRandomIndex(getMaxNumber(ejercicio))]);

console.log(`Mi fruta de hoy es ${frase[0]} , mi proteina es ${frase[1]} y mi ejercicio es 10 minutos de ${frase[2]}`);

function getMaxNumber(array){
    let rango= array.length;
    return rango;
}


function getRandomIndex(rango){
      let randomIndex=Math.floor(Math.random()*rango);
      return randomIndex;
}