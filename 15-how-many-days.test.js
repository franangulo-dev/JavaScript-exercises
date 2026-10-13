const dateComparor = require("./15-how-many-days");

test("Las fechas son correctas", () => {
  expect(dateComparor("13/10/2025", "13/10/2026")).toBe(365);
});
test("Las fechas iguales dan 0", () => {
  expect(dateComparor("13/10/2025", "13/10/2025")).toBe(0);
});
test("Las fechas son inexistentes", () => {
  expect(() => dateComparor("45/11/2025", "10/20/2026")).toThrow(
    "Fecha inexistente",
  );
});
test("El formato o los datos son incorrectos ", () => {
  expect(() => dateComparor("05-10-2026", "hola/10/2026")).toThrow(
    "Formato de fecha incorrecto",
  );
});
