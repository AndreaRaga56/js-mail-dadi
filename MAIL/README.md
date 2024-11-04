## Esercizio
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.
NON USARE INCLUDES!

## Dati
Array di mail approvate
Mail inserita dall'utente
Variabile Booleana falsa

## Esecuzione Logica
Faccio inserire la mail dell'utente tramite prompt.

Eseguo un ciclo for che si reitererà finchè i sarà inferiore alla lunghezza dell'array, aumentando di 1 ad ogni fine ciclo
    Se la Mail dell'utente è uguale alla mail i-esima dell'array
        Stampa la mail inserita ti consente di accedere
        La variabile Booleana diventa vera
        Esci dal ciclo

Se la variabile Booleana è falsa
    Stampa la mail inserita non è tra quelle accettate, ricarica la pagina e inseriscine una diversa
