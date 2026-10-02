/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */
const reversedText = function (text) {
  let resultContainer = "";
  for (let i = text.length - 1; i >= 0; i--) {
    resultContainer += text[i];
  }
  return resultContainer;
};
reversedText("Este texto estara al reves");

const SecondReversedText = function (text) {
  let SecondResultContainer = "";
  for (let value of text) {
    SecondResultContainer = value + SecondResultContainer;
  }
  return SecondResultContainer;
};
SecondReversedText("Este texto estara al reves");

let thirdReversedText = function (text){
 if (text === "") {
    return text
 }
 return  thirdReversedText(text.slice(1)) + text[0]
}
thirdReversedText("Este texto estara al reves")

/* En este ejercicio decidi hacer 3 modelos distintos de resolucion ya que era algo simple
y quise explorar las distintas formas de razonar ante un mismo problema y tocar distintos temas*/
