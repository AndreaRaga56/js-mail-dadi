let dadoUser = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
let dadoComputer = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(`Il tuo numero è ${dadoUser}.
Il numero del computer è ${dadoComputer}.`);

if (dadoUser > dadoComputer){
    console.log("Hai vinto!");
} else if (dadoUser < dadoComputer) {
    console.log("Hai perso :(");
} else {
    console.log("È un pareggio.");
}
