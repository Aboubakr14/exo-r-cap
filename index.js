// création de ma variable maBoolean //
let maBoolean = Boolean;
// création de mon tableau
let monArray = [];
// création de monObjet //
let monObjet = new Object ();
// création de monString //
let monString = ("hello");
// création de monInteger //
let monInteger = parseInt(5);
// création et instance de monObjet //
class Marque {
    constructor(nom, année){
        this.nom = nom;
        this.année = année;
    }
}

let marque = new Marque ("Samsung", 1950);

// fonction flêchée //
let fonctionFléchée = (paramètre1, paramètre2) => {
// on écrit le code pour que la fonction adéquant en fonction de ce que l'on veut que la fonction fasse //
} 

// vérification si monInt est plus petit que 8 //

let monInt = parseInt(9);

if (monInt < 8) {
    console.log("votre nombre est plus petit que 8");
} else {
    console.log("votre nombre est plus grand que 8");
    
}

// création d'un tableau qui incrémente une variable de 0 jusqu'à 9 //

let incrémente = 0;
console.log(incrémente);

for (let i = 0; i <= incrémente; i++) {
        if (incrémente < 9) {
            incrémente++;
            console.log(incrémente);
            
        }
}

// création d'une date //

let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));(2020,01,21,0,0,0);
console.log(date.toLocaleDateString(undefined));

// création d'un string majuscule //

let mot = ("salut");

let maj = (mot) => { 
    return mot.toUpperCase();
}

console.log(maj(mot));

// création d'une fonction qui retourne une chaine avec la première et derniere lettre en maj
 
let maju  = (mot) => { 
    return mot.charAt(0).toUpperCase() + mot.substr(1) + mot.charAt(mot.length-1).toUpperCase() 
}

console.log(maju(mot));


