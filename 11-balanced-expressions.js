/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */
const packageChecker = function (text) {
  const openerContainer = [];
  if (text === "") {
    return false;
  }
  for (let value of text) {
    if (value === "{" || value === "[" || value === "(") {
      openerContainer.push(value);
    } else if (value === "}" || value === "]" || value === ")") {
      const lastValue = openerContainer.pop();
      if (value === "}" && lastValue !== "{") {
        return false;
      } else if (value === "]" && lastValue !== "[") {
        return false;
      } else if (value === ")" && lastValue !== "(") {
        return false;
      }
    }
  }
  return openerContainer.length === 0;
};
packageChecker("{ [ a * ( c + d ) ] - 5 }");
packageChecker("{ a * ( c + d ) ] - 5 }");

module.exports = packageChecker;

// Segunda resolucion

const couples = {
  ")": "(",
  "}": "{",
  "]": "[",
};

const packageChecker2 = function (text) {
  const openerContainer2 = [];
  for (let value2 of text) {
    if (text === "") {
      return false;
    }
    if (Object.values(couples).includes(value2)) {
      openerContainer2.push(value2);
    } else if (value2 in couples) {
      const lastValue2 = openerContainer2.pop();
      if (lastValue2 !== couples[value2]) {
        return false;
      }
    }
  }
  return openerContainer2.length === 0;
};
