/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

// --NOTA IMPORTANTE: Este ejercicio esta semi resuelto, y quedara pendiente a modificaciones del primer filtro
// isMorse, que tiene una falla conceptual, en la cual filtraria cualquir texto regular que contenga '.' o '-' como codigo morse
//El README tambien queda pendiente
const morseAlphabet = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  ch: "----",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  ñ: "--.--",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  ü: "..--",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  '"': ".-..-.",
  "/": "-..-.",
};

const alphabetSwitch = Object.entries(morseAlphabet);
const regularAlphabet = {};

alphabetSwitch.forEach((pair) => {
  const letra = pair[0];
  const morse = pair[1];
  regularAlphabet[morse] = letra;
});

const morseTranslator = function (text) {
  const isMorse = /^[\-\. ]+$/.test(text);
  if (isMorse) {
    const morseWords = text.split("  ");
    const translatedWords = morseWords.map((morseWord) => {
      const modifiedMorseLetters = morseWord.split(" ");
      const regularLetters = modifiedMorseLetters.map((singleLetter) => {
        return regularAlphabet[singleLetter];
      });
      return regularLetters.join("");
    });
    return translatedWords.join(" ");
  } else {
    const cleanText = text.toLowerCase();
    const words = cleanText.split(" ");
    const wordsInMorse = words.map((words) => {
      const letters = words.split("");
      const morseLetters = letters.map((letter) => {
        return morseAlphabet[letter];
      });
      return morseLetters.join(" ");
    });
    return wordsInMorse.join("  ");
  }
};
morseTranslator("hola, mundo");
morseTranslator(".... --- .-.. .- --..--  -- ..- -. -.. ---");

module.exports = morseTranslator