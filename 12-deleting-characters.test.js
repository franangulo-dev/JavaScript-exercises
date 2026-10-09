const stringSplitter = require("./12-deleting-characters")

test("Ambas cadenas deben ser strings con diferencias", () => {
  expect(stringSplitter("coco","casa")).toEqual(["oo","asa"]);
});
test("Los datos trabajados deben ser strings", () => {
  expect(() => stringSplitter(true, "casa")).toThrow("Incorrect DataType");
});

test("Si 1 o los 2 strings estan vacios el resultado estaria vacio", () => {
  expect(stringSplitter("","casa")).toEqual(["","casa"]);
});