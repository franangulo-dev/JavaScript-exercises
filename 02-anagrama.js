/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */
let comparator = function (word1, word2) {
  let container = {};
  let container2 = {};
  word1
    .toLowerCase()
    .split("")
    .forEach((letra) => {
      if (container[letra] !== undefined) {
        container[letra] = container[letra] + 1;
      } else {
        container[letra] = 1;
      }
    });
  word2
    .toLowerCase()
    .split("")
    .forEach((letra) => {
      if (container2[letra] !== undefined) {
        container2[letra] = container2[letra] + 1;
      } else {
        container2[letra] = 1;
      }
    });
  if (word1 === word2) {
    return false;
  }
  if (word1.length !== word2.length) {
    return false;
  }
  for (let letra in container) {
    if (container[letra] !== container2[letra]) {
      return false;
    } 
  }
  return true
};
console.log(comparator("argentina", "rageanitn"))
