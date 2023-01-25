//#region les différent possibilité avec la Console.
console.log('simple log');
console.info('log d\'informations');
console.warn('log d\'attention');

console.log("********************************************************");
console.log("********************************************************");
//#endregion

//#region Récupération d'un élément du DOM et lui affiche une valeur
document.getElementById("title").innerText = ("Review to Javascript");
//#endregion

//#region Test des différents valeur de retour si falsy ou truesly
let testBoolTrue1 = true; //renvoie true
let testBoolTrue2 = "a"; //renvoie true
let testBoolTrue3 = 1; //renvoie true

let bool1 = Boolean(testBoolTrue1);
let bool2 = Boolean(testBoolTrue2);
let bool3 = Boolean(testBoolTrue3);

console.log("Ci dessous les valeur qui retourne => True");
console.log("(1) " + bool1);
console.log("(2) " + bool2);
console.log("(3) " + bool3);

console.log("********************************************************");

let testBoolFalse1 = false; //renvoie false
let testBoolFalse2 = ""; //renvoie false
let testBoolFalse3 = 0; //renvoie false
let testBoolFalse4 = undefined; //renvoie false
let testBoolFalse5 = NaN; //renvoie false
let testBoolFalse6 = null; //renvoie false

let boolFalse1 = Boolean(testBoolFalse1);
let boolFalse2 = Boolean(testBoolFalse2);
let boolFalse3 = Boolean(testBoolFalse3);
let boolFalse4 = Boolean(testBoolFalse4);
let boolFalse5 = Boolean(testBoolFalse5);
let boolFalse6 = Boolean(testBoolFalse6);

console.log("Ci dessous les valeur qui retourne => False");
console.log("(1) " + boolFalse1);
console.log("(2) " + boolFalse2);
console.log("(3) " + boolFalse3);
console.log("(4) " + boolFalse4);
console.log("(5) " + boolFalse5);
console.log("(6) " + boolFalse6);

console.log("********************************************************");
console.log("********************************************************");
//#endregion

//#region La concaténation avec les backtick  => ``
const firstName = 'Jonathan';
const lastName = 'Buchet';

console.log("Ci dessous la concaténation avec les backtick => ``");
console.log(`Mon nom est : ${firstName}
Mon prénom est : ${lastName}`)

console.log("********************************************************");
console.log("********************************************************");
//#endregion

//#region Les tableaux
const monTableau = ['vert', 2, true];

console.log(monTableau);
console.log("Taille de mon tableau => " + monTableau.length);
console.log();

console.log("Remarque ci dessous le tableau initial est d'une longueur de 3, j'y ajoute un éléments a la place '5' du coup il me génère automatiquement => 2 slots vide")
monTableau[5] = null;

console.log(monTableau);
console.log("Nouvelle taille de mon tableau => " + monTableau.length);

console.log();
console.log("Ici je parcour mon tableau a l'aide d'une boucle 'for'");

for (let i = 0; i < monTableau.length; i++) {
    console.log(`J'affiche depuis la boucle 'for'
=> la valeur de l'index numéro ${i} de mon tableau = ${monTableau[i]}`);
}

console.log("********************************************************");
console.log("********************************************************");
//#endregion

//#region Les Objects
const ObjectExample = {
    Name: "Jonathan",
    Year: 10
};

console.log("J'affiche mon object en brut ci dessous :");
console.log(ObjectExample);
console.log("J'affiche juste le nom de mon objet ci dessous :");
console.log("=> " + ObjectExample.Name);
console.log("J'affiche juste l'age ci dessous :");
console.log("=> " + ObjectExample.Year);
console.log()

console.log("Une autre façon de parcourir un objet, un peu à l'instar des tableaux")

console.log(ObjectExample['Name']);
console.log();
console.log("Ci dessus j'ai afficher le nom de mon objet en spécifiant entre [] le nom de la propriété que je voulais ciblé ici le 'Name'")
console.log("********************************************************");
console.log("********************************************************");
//#endregion

//#region Les ternaires
const yearRequired = 18;

const mineurYear = 15;

const majeurYear = 18;

yearRequired > mineurYear ? console.log("Vous êtes mineur") : console.log("Vous êtes majeur");
yearRequired <= majeurYear ? console.log("Vous êtes majeur") : console.log("Vous êtes majeur");

console.log("************************************************");
console.log("************************************************");
//#endregion

//#region Boucle avec les instruction Break et Continue

let number = 0;

//Ici avec le mot clef 'continue' quand 'i' est égal à la valeur de 5
//permet de sortir de l'itération de la boucle en cours et continue ensuite normalement
//ici je met la chaine de caractère coucou pour prouver que j'intervient bien
console.log("Début de la boucle : ");

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("coucou, je suis sur la valeur 5")
        continue;
    }
    console.log(`La valeur de i est => ${i}`);
}
console.log("Boucle terminée !");

console.log("************************************************");
console.log();

//Ici avec le mot clef 'Break' on s'apperçoit que quand la condition est true
//La boucle arrête sont itération, je sort de la boucle

console.log("Démo avec le mot clef 'Break' :");

console.log("Début de la boucle : ");

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("coucou, je suis sur la valeur 5")
        break;
    }
    console.log(`La valeur de i est => ${i}`);
}
console.log("Boucle terminée !");

console.log("************************************************");
console.log("************************************************");
//#endregion
