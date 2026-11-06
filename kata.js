import { writeFileSync, readFileSync } from "fs";
import { join } from "path";
import { homedir } from "os";

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

//EXERCICE 3
console.log("---------------EXERCICE 3---------------");
const courses = ["pain", "lait", "pommes"];
const liste = courses.join("\n");
writeFileSync("./courses.txt", liste);

//EXERCICE 4
console.log("---------------EXERCICE 4---------------");
const profil = {
  prenom: "Ada",
  langages: ["HTML", "CSS", "JavaScript"],
  debutante: true,
};

const profilStr = JSON.stringify(profil, null, 2);

writeFileSync("./profil.json", profilStr);
const objet = JSON.parse(readFileSync("./profil.json"));
console.log(
  `Nom : ${objet.prenom}\nNombre de langages: ${objet.langages.length}`,
);

//EXERCICE 5
console.log("---------------EXERCICE 5---------------");
const taches = [
  { nom: "lire le cours", faite: true },
  { nom: "finir le TP", faite: true },
  { nom: "relire mes notes", faite: false },
];

function ecrireBilan(chemin, taches) {
  let listeTaches = [new Date().toLocaleDateString("fr-FR")];
  let nbTachesOk = 0;
  let icone = "";
  if (taches.length === 0) {
    writeFileSync(chemin, "Aucune tâche aujourd'hui", {
      encoding: "utf-8",
      flag: "a+",
    });
  } else {
    taches.forEach((tache) => {
      if (tache.faite) {
        icone = "✅";
        nbTachesOk++;
      } else {
        icone = "❌";
      }
      listeTaches.push(`${icone} ${tache.nom}`);
    });
    listeTaches.push("");
    listeTaches.push(
      `Tâches faites : ${Math.round((nbTachesOk / taches.length) * 100)} %\n `,
    );
    writeFileSync(chemin, listeTaches.join("\n"), {
      encoding: "utf-8",
      flag: "a+",
    });
  }
}

const cheminAbsolu = join(homedir(), "Documents", "ada-tech", "bilan.txt");
ecrireBilan(cheminAbsolu, taches);

//Questions de recul

/* 
1. Si je relance le script plusieurs fois, j'ai à chaque fois les messages qui s'inscrivent à nouveau dans la console et les fichiers .txt sont réécrits (écrasés et réécrit par writeFileSync).
J'obtiens un seul fichier courses.txt qui contient toujours la même liste (pain, lait, pomme) puisqu'une fois le fichier créé writeFileSync réécrit dans le même fichier en écrasant le contenu précédent.

2. Node renvoie cette erreur : 
TypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Object
Il me dit que l'argument doit être de type chaine de caractère ou une instance de Buffer, TypedArray ou DataView et qu'il a reçu un argument de type objet. On n'a pas entré le bon type d'argument.
Cela m'apprend qu'un fichier ne peut pas contenir des éléments de type objet. 

3. Le chemin relatif créera le fichier dans le dossier courant dans lequel je me trouve quand je lance le script. Si je lance la commande depuis le dossier bloc1 par exemple (node projets/kata-fichiers/kata.js) les fichiers bilan.txt, bonjour.txt, courses.txt et profil.json seront créés dans le dossier bloc 1.
 */

/* J'ai utilisé un flag pour writeFileSync dans l'exercice 5 pour que bilan puisse contenir les tâches effectuées des jours précédents et voir l'évolution. Le fait de mettre le flag "a+" permet d'éviter que writeFileSync écrase le fichier à l'écriture. Il écrit à la suite de ce qui est déjà présent dans le fichier. */
