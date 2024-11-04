arrayDiMail = [
    "margherita.bianchi@email.com",
    "luca.rossi87@mail.com",
    "elena.verdi@outlook.com",
    "giovanni.neri@gmail.com",
    "federica.bianchi@mail.com",
    "andrea.russo@libero.it",
    "giulia.corti@gmail.com",
    "francesco.neri@yahoo.com",
    "laura.pucci@outlook.com",
    "simone.bianchi@tiscali.it",
    "sara.ferrari@icloud.com",
    "alessandro.grigio@fastwebnet.it",
    "valentina.blu@live.com",
    "matteo.gialli@yahoo.com",
    "chiara.rossi@libero.it",
];

let mailUser = prompt("Inserisci la tua mail");
let bool = false;

console.log(arrayDiMail);

for (let i = 0; i < arrayDiMail.length; i++){
    if (arrayDiMail[i] === mailUser) {
        console.log("La mail inserita ti consente di accedere");
        bool = true;
        break;
    }
}

if(bool == false){
    console.log("La mail inserita non è tra quelle accettate, ricarica la pagina e inseriscine una diversa");
}

