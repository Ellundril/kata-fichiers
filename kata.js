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
    `Tâches faites : ${Math.round((nbTachesOk / taches.length) * 100)} %`,
  );
  writeFileSync(chemin, listeTaches.join("\n"));
}

ecrireBilan("./bilan.txt", taches);
