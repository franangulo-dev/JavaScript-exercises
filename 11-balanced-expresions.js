/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */
//--primero creamos un objeto, el cual sera el alphabeto romano como key y el morse como value
// --se declara una constante, que a partir del primer objeto, creara un array con cada key y value como un conjunto de 2 piezas
// en sub arrays dentro del mismo.
//  --luego creamos un objeto vacio que recibira nuestros valores para crear el segundo alfabeto
// con los mismos key-value pero a la inversa (morse key, romano value)
// --aplicamos for each a nuestro array de arrays, para acomodar dentro de nuestra segundo alfabeto, los datos del primer objeto. usando el indice de las piezas
//-- creamos una funcion (morseTranslator) que recibira el texto a traducir, 

// ----NOTA: Al ser ejercicios que fui creando con los conocimientos que tengo mas la guia de la ia de google.
// Puede tener fallos conceptuales,  que seran modificados en el futuro para seguir ahora con los ejercicios siguientes
// Este ejercicio y el ReadMe estan en pendiente. la primer constante dentro de la funcion (isMorse) tiene un fallo conceptual