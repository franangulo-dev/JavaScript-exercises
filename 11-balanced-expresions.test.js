const packageChecker = require("./11-balanced-expresions");

test("Una expresion ordenada correctamente debe ser true", () => {
  expect(packageChecker("{ [ a * ( c + d ) ] - 5 }")).toBe(true);
});

test("Una expresion de orden incorrecto debe ser false", () => {
  expect(packageChecker("{ a * ( c + d ) ] - 5 }")).toBe(false);
});

test("Una expresion vacia debe ser false", () => {
  expect(packageChecker("")).toBe(false);
});

test("Una expresion con falta de cierres debe ser false", () => {
  expect(packageChecker("(((")).toBe(false);
});
