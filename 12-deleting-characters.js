/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */
const stringSplitter = function (str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new Error("Incorrect DataType: Both arguments must be strings");
  }
  const firstStringContainer = [...str1];
  const secondStringContainer = [...str2];
  let resultStr1 = "";
  let resultStr2 = "";
  const setStr1 = new Set(str1);
  const setStr2 = new Set(str2);
  for (let value of firstStringContainer) {
    if (!setStr2.has(value)) {
      resultStr1 += value;
    }
  }
  for (let value of secondStringContainer) {
    if (!setStr1.has(value)) {
      resultStr2 += value;
    }
  }
  return [resultStr1, resultStr2];
};
//out1 is equal to resultStr1 and out2 is equal to resultStr2
const [out1, out2] = stringSplitter(
  "hola soy mugri, t00019",
  "hola me llamo mugri, jy34",
);

module.exports = stringSplitter