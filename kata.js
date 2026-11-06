import { writeFileSync, readFileSync } from "fs";

//EXERCICE 1
console.log("---------------EXERCICE 1---------------");

writeFileSync("./bonjour.txt", "Bonjour Ada !");
let content = readFileSync("./bonjour.txt", "utf-8");
console.log(content);
