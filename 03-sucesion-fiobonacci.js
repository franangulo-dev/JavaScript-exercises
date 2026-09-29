/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

let fioboPrinter = function () {
    let starter = 0;
    let changer = 1;
  for (let i = 1; i <= 50; i++) {
      console.log(starter);
     let result = starter + changer  
    starter = changer
    changer = result
  }
};
fioboPrinter();
