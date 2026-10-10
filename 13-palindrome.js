/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
 * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

function palindrome(text) {
  if (typeof text !== "string") {
    throw new Error("Incorrect Data Type");
  }
  const cleanStraightText = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll(",", "")
    .replaceAll(" ", "")
    .replaceAll(".", "");
  const reversedText = [...cleanStraightText].reverse().join("");

  return cleanStraightText === reversedText;
}
palindrome("anita, lava, la tina");
palindrome("jose es muy bueno");

module.exports = palindrome;
