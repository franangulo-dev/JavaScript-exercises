/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */
const cuadrado = {
  name: "cuadrado",
  lado: 25,
};
const triangulo = {
  name: "triangulo",
  base: 15,
  altura: 7,
};
const rectangulo = {
  name: "rectangulo",
  base: 30,
  altura: 10,
};
const polygonCalculator = function (polygon) {
  if (!polygon || typeof polygon !== "object") {
    console.log("⚠️ Alerta: El dato ingresado no es válido.");
    return false;
  }
  let area = 0;
  if (polygon.name === "cuadrado") {
    area = polygon.lado ** 2;
  } else if (polygon.name === "rectangulo") {
    area = polygon.base * polygon.altura;
  } else if (polygon.name === "triangulo") {
    area = (polygon.base * polygon.altura) / 2;
  } else {
    console.log(`❌ Polígono no soportado: ${polygon.name}`);
    return false;
  }
 return area;
};
module.exports = polygonCalculator

