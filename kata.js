import { writeFileSync, readFileSync } from "fs";

//EXERCICE 1
console.log("---------------EXERCICE 1---------------");

writeFileSync("./bonjour.txt", "Bonjour Ada !");
let content = readFileSync("./bonjour.txt", "utf-8");
console.log(content);

//EXERCICE 2
console.log("---------------EXERCICE 2---------------");

writeFileSync("./bonjour.txt", "Au revoir Ada");
content = readFileSync("./bonjour.txt", "utf-8");
console.log(content);

/* Le fichier bonjour.txt contient maintenant "Au revoir Ada", l'ancien texte "bonjour Ada !"" a disparu. La fonction writeFileSync écrase le contenu précédent */
