const morseTranslator = require("./10-morse-code");

test("Debe traducir texto natural con signos a código morse", () => {
  expect(morseTranslator("hola, mundo")).toBe(".... --- .-.. .- --..--  -- ..- -. -.. ---");
});

test("Debe traducir código morse puro de vuelta a texto natural", () => {
  expect(morseTranslator(".... --- .-.. .- --..--  -- ..- -. -.. ---")).toBe("hola, mundo");
});

test("Texto natural con puntos debe ir al camino de texto y traducirse a morse", () => {
  expect(morseTranslator("hola.")).toBe(".... --- .-.. .- .-.-.-");
});
