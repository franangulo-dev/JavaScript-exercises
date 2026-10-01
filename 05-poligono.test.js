const polygonCalculator = require("./05-poligono.js");

test("El area de un cuadrado debe ser", () => {
  expect(polygonCalculator({ name: "cuadrado", lado: 25 })).toBe(625);
});
test("El area de un triangulo debe ser", () => {
  expect(polygonCalculator({ name: "triangulo", base: 15, altura: 7 })).toBe(
    52.5,
  );
});
test("El area de un rectangulo debe ser", () => {
  expect(polygonCalculator({ name: "rectangulo", base: 30, altura: 10 })).toBe(
    300,
  );
});
