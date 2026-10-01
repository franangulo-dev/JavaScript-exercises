/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

let printer = function () {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};
printer();

/* Arriba esta mi codigo de practica, y abajo esta la solucion planteada por brais que plantea
el ejercicio. Se puede diferenciar el lenguaje, javascript arriba y kotlin abajo
la diferencia que aprendi luego de ver su codigo despues de hacer el mio
es la buena practica de crear las 3 funciones con la logica y luego aplicarla, 
dentro de los condicionales, a diferencia mia que la aplique direcamente cuando la declare
lo que hizo el, permite llamarla cuantas veces sea necesario en el futuro

fun main() {

    for (index in 1..100) {
        val divisibleByThree = index % 3 == 0
        val divisibleByFive = index % 5 == 0
        if (divisibleByThree && divisibleByFive) {
            println("fizzbuzz")
        } else if (divisibleByThree) {
            println("fizz")
        } else if (divisibleByFive) {
            println("buzz")
        } else {
            println(index)
        }
    }
}
*/