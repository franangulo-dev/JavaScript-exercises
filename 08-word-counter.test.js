const wordCounter = require("./08-word-counter.js");
describe("Pruebas del reto #08 - contador de palabras", () => {
  test("caso base con texto, mayuscula y comas", () => {
    const textoDePrueba = "hola, me llamo fran, hola, aqui esta fran";
    const resultado = wordCounter(textoDePrueba);
    expect(resultado).toEqual({
      hola: 2,
      me: 1,
      llamo: 1,
      fran: 2,
      aqui: 1,
      esta: 1,
    });
  });
  test("Debe manejar multiples espacios seguidos sin meter palabras vacias", () => {
    const textoConEspacios = "hola    mundo";
    const resultado = wordCounter(textoConEspacios);
    expect(resultado).toEqual({
      hola: 1,
      mundo: 1,
    });
  });
});
