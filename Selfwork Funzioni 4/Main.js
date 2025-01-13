// Funzione che verifica se una stringa è palindroma

function stringaPalindroma(string) {
    
    // Stringa sennza spazi e poi inverita
    let senzaSpazi = string.replace(/\W/g, "");
    let inverso = senzaSpazi.split('').reverse().join('');
    
    // Controllo se le stringhe sono uguali
    if (senzaSpazi == inverso) {
        return true;
    } 
    else {
        return false;
    }
   

}

// Dichiarazione Variabili
let stringa = 'i topi non avevano nipoti';

let result = stringaPalindroma(stringa);
console.log(result);