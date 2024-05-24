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