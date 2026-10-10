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
   -Objetivo: Llevar numeros decimales a codigo binario
   -Metodo: se aplico una funcion, con 2 contenedores, uno que acumule los resultados, y uno que maneje el numero e y sus modificaciones. Se aplican 2 filtros, para el 0, para los datos que no sean numeros enteros, y un bucle para que mientras el numero sea mayor que 0, se cargue en una variable tempora, el resultado del modulo del numero convertido, acumulandolo en una variable espejo, para que el orden quede invertido, y en la siguiente linea se aplique el math.floor que aplanara a un numero entero, el resultado de la division (/2) en caso de que de un resto con (.5, ej 13/2 = 6.5 pasa a 6)luego se retorna el resultado y se llama a la funcion. Se le aplico tambien un testing

4. morse-code #10
   -Objetivo: crear un traductor que reciba texto comun y lo transforme a codigo morse, y vice-versa
   -Metodo: La logica esta terminada y funcionando, pero tiene un fallo en que el filtro podria tomar textos regulares que contengan '.' o '-' como codigo morse, por lo cual el codigo quedara pendiente a modificaciones y tambien este readme

5. balanced-expresions #11
   -Objetivo: Crear un programa que detecte si la apertura y el cierre dentro de una expresion estan equilibrados ej: () {} o [] en orden
   -Metodo: Se creo una funcion, con parametro la expresion a analizar. Que a traves de un array contenedor, que almacenara nuestros abridores `( { o [`. El primer condicional filtra expresiones vacias, luego un bucle recorre la expresion metiendo los abridores dentro del conenedor en el ult indice con .push, el segundo condicional recibira los cierres `] } o )` y los comparara con los abridores, usando una constante que los recogera para luego borrarlos usando .pop, si el valor de cierre NO coincide con el abridor, devuelve falso. por ultimo fuera de estos condicionales filtramos el length del contenedor el cual deberia ser 0 si el proceso se completo correctamente o false si quedo algun abridor pendiente, eso nos dara el resultado true o false cuando pasemos la expresion.
   -Metodo 2: se utilizo un segundo metodo procesando los datos de un objeto con clave y valor usando la misma tecnica de comparacion, con valor2 para recorrer y comparar valores y claves

6. Deleting-Characters #12
   -Objetivo: crear un sistema que reciba 2 cadenas, y devuelva 2 cadenas distintas, la primera con los datos que esten en 1 pero NO en 2, y la segunda con los que esten en 2 pero NO en 1.
   -Metodo: Creamos una funcion que recibira 2 parametros, nuestras cadenas de texto. Creamos 2 const contenedoras que recibiran en un array a travez de spread nuestras cadenas. 2 let temporales vacias que seran el resultado del filtrado. y 2 const en set, que recibiran un parametro, para poder aplicar metodos de set y filtrar con menor rendimiento de memoria aplicando has en vez de includes.
   Recorremos nuestro primer array con un for of, y aplicamos un if donde si nuestro set 2 NO tiene el valor actual del caracter, lo suma a resultStr1, aplicando la misma logica a la inversa en el segundo for of, le sumamos los valores a resultStr2, conteniendo asi, resultStr1 el filtrado de la primer cadena, y resultStr2 el resultado de la segunda. Retornamos ambos a la vez en un array. Al inal y fuera de nuestra funcion, una constante con out1 y out2 para ambos resultados de forma mas legible, que llama a nuestra funcion y le pasa ambas cadenas como modelo de prueba.

7. Palindrome #13
   -Objetivo: Detectar con true o false palindromos, incluso cuando tengan espacios, comas "," o tildes.
   -Metodo: Funcion que recibe parametro el string a analizar. Datos que no sean string son catalogados como error.
   Se crea una constante que limpia el texto de: diferenciar mayusculas, de signos sobre las letras utilizando normalize(NFD) y el replace para lo que resulte, luego Replace para "," "." y espacios vacios.
   Una vez el texto este limpio, se guarda en una constante contenedora, usando un spread de la constante trabajada, se invierte el orden de los caracteres individuales, y se juntan con join en un string.
   Para luego compararse en el return y en caso de ser iguales conseguir el true y de ser distintos false. Llamamos a 2 ejemplos y tambien aplicamos un jest.
