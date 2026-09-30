/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */
let numberCleaner = function (numbers) {
  if (numbers <= 1) {
    return false;
  }
  for (let i = 2; i < numbers; i++) {
    if (numbers % i === 0) {
      return false;
    }
  }
  return true;
};

let primeNumbers = function () {
  for (let i = 1; i <= 100; i++) {
    if (numberCleaner(i) === true) {
      console.log(i);
    }
  }
};
primeNumbers();
