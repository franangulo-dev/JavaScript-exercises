/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

const wordCounter = function (text) {
  const cleanText = text.replace(/[^\w\s]/g, "").toLowerCase();
  let container = {};
  cleanText.split(" ").forEach((word) => {
    if (word === "") {
      return;
    }
    if (container[word] !== undefined) {
      container[word] = container[word] + 1;
    } else {
      container[word] = 1;
    }
  });
  return container;
};
wordCounter("hola, me llamo fran, hola, aqui esta fran");

module.exports = wordCounter;
