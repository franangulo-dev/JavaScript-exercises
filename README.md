# Retos de Programación - JavaScript & Node.js

Saludos! Mi nombre es **Francisco Angulo** y este repositorio es una muestra de mis ejercicios de entrenamiento...

## 🧠 Mi Filosofía de Aprendizaje

Estos ejercicios fueron realizados de forma manual sin agentes de ia, ni correcciones automaticas, con el fin de practicar, fijar conocimientos y adquirir nuevos.

## 🛠️ Cómo Ejecutar los Retos

Para correr estos ejercicios en tu máquina, necesitás tener instalado **Node.js**.

1. Clonás el repositorio.
2. Ejecutás en la terminal: `node nombre_del_archivo.js`

## 🗂️ Bitácora de Retos

Dejo explicacion breve de cada ejercicio, lo aplicado y lo aprendido en el.

1. FizzBuzz #01 (facil)
   -Objetivo: Imprimir numeros del 1 al 100, imprimiendo Fizz en los multiplos de 3, Buzz en los de 5, y Fizz buzz en los que sean de ambos.
   -Metodo: se utilizo un bucle for como contador de 100 vueltas, un condicional que use el indice para filtrar los numeros que coincidan con lo pedido, con un modulo para calcular dichos multiplos. Por ultimo, el resto de los numeros se imprimen con el mismo indice, luego se llama a la funcion.

2. WordCounter #08 (Contador de palabras) (medio)
   -Objetivo: Crear un contador, que muestre cuantas veces existe o se repite cada palabra, los signos no cuentan, y mayusculas y minusculas no son palabras distintas.
   -Metodo: una funcion, que alberga una regex que filtra los signos, con un objeto contenedor para cuantificar las palabras, un toLowerCase para que las palabras sean iguales sin discriminar mayusculas/minusculas. El split como separador de cada palabra, y el for each para recorrer el texto. Se aplica un condicional para sumar cada palabra, y en caso de no existir, crear una nueva, y se retorna el resultado. Luego se llama a la funcion pasandole como parametro el texto a procesar. Se agrega tambien un testing.

3. DecimalToBinary #09
