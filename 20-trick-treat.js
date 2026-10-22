/*
 * Este es un reto especial por Halloween.
 * Deberemos crear un programa al que le indiquemos si queremos realizar "Truco(trick)
 * o Trato(treat)" y un listado (array) de personas con las siguientes propiedades:
 * - Nombre de la niña o niño
 * - Edad
 * - Altura en centímetros
 *
 * Si las personas han pedido truco(trick), el programa retornará sustos (aleatorios)
 * siguiendo estos criterios:
 * - Un susto por cada 2 letras del nombre por persona
 * - Dos sustos por cada edad que sea un número par
 * - Tres sustos por cada 100 cm de altura entre todas las personas
 * - Sustos: 🎃 👻 💀 🕷 🕸 🦇
 *
 * Si las personas han pedido trato(treat), el programa retornará dulces (aleatorios)
 * siguiendo estos criterios:
 * - Un dulce por cada letra de nombre
 * - Un dulce por cada 3 años cumplidos hasta un máximo de 10 años por persona
 * - Dos dulces por cada 50 cm de altura hasta un máximo de 150 cm por persona
 * - Dulces: 🍰 🍬 🍡 🍭 🍪 🍫 🧁 🍩
 * - En caso contrario retornará un error.
 */
const scares = ["🎃", "👻", "💀", "🕷", "🕸", "🦇"];
const candy = ["🍰", "🍬", "🍡", "🍭", "🍪", "🍫", "🧁", "🍩"];
const peopleList = [
  { name: "pepe", age: 6, height: 80 },
  { name: "roy", age: 15, height: 200 },
  { name: "celi", age: 4, height: 100 },
];
const trickOrTreat = function (decision, list) {
  let candyColector = 0;
  let scaresColector = 0;
  let totalHeight = 0;
  if (decision !== "trick" && decision !== "treat") {
    throw new Error("Operacion invalida, elige trick o treat");
  }
  if (decision === "trick") {
    list.forEach((person) => {
      scaresColector += Math.floor(person.name.length / 2);
      if (person.age % 2 === 0) {
        scaresColector += 2;
      }
      totalHeight += person.height;
    });
    scaresColector += Math.floor(totalHeight / 100) * 3;
    let finalScares = [];
    for (let i = 0; i < scaresColector; i++) {
      let randomScareIndex = Math.floor(Math.random() * scares.length);
      let randomScareEmoji = scares[randomScareIndex];
      finalScares.push(randomScareEmoji);
    }
    return finalScares;
  }
  if (decision === "treat") {
    list.forEach((person) => {
      candyColector += person.name.length;
      let limitedAge = Math.min(person.age, 10);
      candyColector += Math.floor(limitedAge / 3);
      let limitedHeight = Math.min(person.height, 150);
      candyColector += Math.floor(limitedHeight / 50) * 2;
    });
    let finalCandy = [];
    for (let i = 0; i < candyColector; i++) {
      let randomCandyIndex = Math.floor(Math.random() * candy.length);
      let randomCandyEmoji = candy[randomCandyIndex];
      finalCandy.push(randomCandyEmoji);
    }
    return finalCandy;
  }
};
module.exports = trickOrTreat
trickOrTreat("treat", peopleList)
