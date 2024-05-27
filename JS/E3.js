// déclaration des variables
let myNumber = 12;
console.log(myNumber == 12);
console.log(myNumber == null);
console.log(myNumber == "12");
console.log(myNumber == undefined);

let myString = "12";
console.log(myString == 12);
console.log(myString === 12);
console.log(myString == null);
console.log(myString == undefined);
// max et min
if (myNumber === "12") {
    console.log("la condition est vraie");
}
if (myNumber > min && myNumber < max) {
    console.log("myNumber est compris entre 10 et 20");
}

//if...else


let heure = null
let matin = "Matin";
let aprem = "Après-midi"
let soir = "soir"
let myHour = prompt("Quelle heure est il (à 1 heure près) ?");

if (myHour < 12) {
    heure = matin;
} else if (myHour >= 12 && myHour <= 19) {
    heure = aprem;
} else if (myHour > 19 && myHour <= 23) {
    heure = soir;
}
let myHour = prompt("Quelle heure est il (à 1 heure près) ?")
if (typeof myHour == "number" && myHour > 12) {
    console.log("oui");
} else {
    console.log("non");
}
// bonne maniére de programmé un switch

const matin = "Matin";
const aprem = "Après-midi";
const soir = "Soir";
let momentJournée = "";
const heureLimiteMatin = 12;
const heureLimiteAprem = 19;
const heureLimiteSoir = 24;
const casErreur = "cas non prévu";
const boissonMatin = "café";
const boissonAprem = "thé";
const boissonSoir = "infusion";
const boissonDefault = "eau";

if (myHour < 12) {
    momentJournée = matin;
} else if (myHour < 19) {
    momentJournée = "aprem";

}else if (myHour < 24) {
    momentJournée = "soir;"
}
console.log(momentJournée);

switch (momentJournée) {
    case matin:
        console.log(boissonMatin);
        break;
    case aprem:
        console.log(boissonAprem);
        break;
    case soir:
        console.log(boissonSoir);
        break;
    default:
        console.log(boissonDefault);
        break;
}

// Switch...case

switch (heure) {
    case matin:
        Text = "Café";
        break;
    case aprem:
        Text = "Thé";
        break;
    case soir:
        Text = "Infusion";
        break;
    default:
        Text = "Eau";
}

console.log( myHour + Text );