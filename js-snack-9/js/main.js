const arrayVuoto = [];

let somma = 0

while (somma < 200){
    arrayVuoto.push(parseInt(prompt("Inserisci un numero")));
    somma +=  arrayVuoto[arrayVuoto.length - 1];
}

console.log(somma);