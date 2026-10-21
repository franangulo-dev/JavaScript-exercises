# Retos de Programación - JavaScript & Node.js

Saludos! Mi nombre es **Francisco Angulo** y este repositorio es una muestra de mis ejercicios de entrenamiento, enfocado para Full Stack con prioridad de Backend...

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
   -Metodo: Se crea un objeto con key la letra o signo del abecedario regular, y value su equivalente en morse.
   se crea una constante "alphabetSwitch"sobre la cual al pasarlo a array podremos trabajar los datos de dicho objeto. Y otra constante "regularAlphabet", como objeto vacio que recibira los datos trabajados.
   Utilizamos un forEach para recorrer cada key y value como valores de un array de arrays. y luego asignandolos a nuestro objeto vacio.
   Luego creamos una funcion, que recibira nuestro texto como parametro, donde una constante que servira de filtro, a traves de una regEx que detecta si se tiene SOLO "." "-" o " " si se cumple esta condicion, primero almacenara las palabras en morse separandolas por " " y recorrera las palabras separando las letras por " ". luego las retorna en nuestro regularAlphabet como caracteres que luego unira con join "" para letras, y " " para palabras completando asi su transformacion.
   Else recibe el texto y lo limpia a todas minusculas, separa las palabras con " ", recorre las palabras y separa las letras con "" luego deposita las letras en morseAlphabet recorriendo las letras y retornandolas en su lugar, luego las une en letras morse con join " " y en palabras en morse con join " "
   Llamamos a sus respectivos ejemplos y aplicamos un test.

5. balanced-expressions #11
   -Objetivo: Crear un programa que detecte si la apertura y el cierre dentro de una expresion estan equilibrados ej: () {} o [] en orden
   -Metodo: Se creo una funcion, con parametro la expresion a analizar. Que a traves de un array contenedor, que almacenara nuestros abridores `( { o [`. El primer condicional filtra expresiones vacias, luego un bucle recorre la expresion metiendo los abridores dentro del contenedor en el ult indice con .push, el segundo condicional recibira los cierres `] } o )` y los comparara con los abridores, usando una constante que los recogera para luego borrarlos usando .pop, si el valor de cierre NO coincide con el abridor, devuelve falso. por ultimo fuera de estos condicionales filtramos el length del contenedor el cual deberia ser 0 si el proceso se completo correctamente o false si quedo algun abridor pendiente, eso nos dara el resultado true o false cuando pasemos la expresion.
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

8. recursive-factorial #14
   -Objetivo: Encontrar el factorial de un numero usando recursividad
   -Metodo: Se creo una constante que recibe como parametro un numero
   Aplicamos condicionales para que los datos a trabajar sean exclusivamente numeros, o BigInt y luego para que solo sean enteros. Un tercero para que 0 siempre devuelva 1, ya que ese es su valor factorial.
   Aplicamos la constante que recibia nuestros numeros y los convertia en BigInts, multiplicandola por la misma funcion -1 para factorializar, luego la guardamos en una constante almacenadora del resultado, y la retornamos. Se aplico un test.

9. how-many-days #15
   -Objetivo: Saber cuantos dias de diferencia existen entre una fecha y otra, independientemenete del orden
   -Metodo: Declaramos una funcion, que recibe 2 fechas en formato string. El primer filtro es una regEx que analiza de principio a fin el string, y detecta que tenga la cantidad de caracteres y el orden correcto y separado por / (DD/MM/YYYY).
   El segundo filtro es un condicional que testea la regex en ambos strings, dejando un error si el formato no coincide.
   Declaramos una variable para ordenar los datos separandolos individualmente con split("/") y almacenarlos en day month y year, respectivamente y replicado para ambos strings, el -1 de month es para que el indice 0 coincida con el mes 1.
   El siguiente condicional, con get day compara si coincide el valor en caso de que se modifique automaticamente por javascript, con el valor depositado en day1 o day2, al igual que hace getMonth y getFullYear respectivamente, si no coincide cualquiera de estos, por eso usamos el ||, lanzara un error.
   La siguiente variable miliSecondDiff compara first date con second date, luego dividimos los mili segundos con dayDifference, por mil para tener segundos, por 60 para tener minutos, por 60 para tener horas, y finalmente por 24 para tener dias, luego Math.abs lo convierte en absoluto, ni negativo ni positivo se vera discriminado. Lo retornamos y asi tenemos el resultado completo en dias. Se aplico un jest para testear la correcta funcionalidad.

10. async-management #16
    -Objetivo: Identificar si el ID de un usuario es correcto (del 1 al 100)
    -Metodo: Se crea una funcion que recibe el ID a analizar (ficticio, no se trae de ninguna base de datos) la resolucion es a travez de retornar una promesa, la cual rechaza si el id es mayor a 100 o menor que uno, el setTimeout simula 2 segundos de busqueda. En caso de ser correcto resuelve el objeto simulado que tiene un id, nombre, y role. La segunda funcion es asincronica para poder manejar los tiempos de espera, donde metemos el resultado del try en una constante, llamando a nuestro user con su id, y devolvemos la constante contenedora. declaramos el catch para dar el mensaje de error en caso de no ser valido, se le aplico un test.

11. URL-extractor #17
    -Objetivo: Crear una funcion que reciba una URL (inventada) y filtre sus datos
    -Metodo: Se crea una funcion que recibe como parametro una URL, se filtra segun si esta incompleta o le falta el comienzo de la separacion de los datos. En ese caso lanza una excepcion.
    En caso de funcionar, se crea una variable que recibe los datos de la url para poder manejarlos, luego una variable que almacenara el resultado de cortar en la primera separacion "?" luego se filtra la segunda mitad, donde estan los datos (indice 1), y se vuelve a filtrar usando split para la separacion "&".
    Se crea un objeto que almacenara los datos del usuario una vez limpios, para filtrar se recorre el array con forEach, y a cada elemento lo ubicamos en otra varaible luego de aplicarle el split "=" y lo almacenamos en el objeto usando el indice de cada parte, asignandolo a clave o valor. Se retorna el objeto al final del proceso. Se le aplica un test

12. file-processor #18
-Objetivo: Crear un script que interactue con archivos del disco rigido, en este caso leyendo texto plano y contabilizando errores
-Metodo: Se invoca a require("fs").promises y se almacena en 2 constantes sus funciones readFile y writeFile para poder leer y escribir archivos. 
Se crea una funcion que recibe texto como parametro, dentro una constante que tendra el contador de errores. Luego una variable que almacenara las lineas despues de separarlas individualmente en el texto. 
Se crea un bucle que recorrera cada una de esas lineas, con los condicionales de que si incluye (includes) "ERROR_500" o "UNAUTHORIZED_401" lo sume al contador (report) y luego retorne el resultado. 
Luego se crea una funcion asincrona, que en el try, llamara al archivo "./logs.txt" previamente creado, con el filtro de lenguaje "utf-8" a traves de readfile. Depositandolo en la constante text. 
Se guardara la ejecucion de la funcion anterior sobre el archivo almacenado en text, dentro de una nueva constante "reportContainer"
Luego writeFile, creara un JSON, aplicandole .stringify al anterior mencionado resultado en reportContainer. 
En caso de errores, nuestro catch muestra por consola un mensaje de error. Se aplica un testing. 

13. vending-machine #19
-Objetivo: Simular una maquina expendedora, que devuelva el producto y el cambio en la menor cantidad de moneas posible. Y errores correspondientes a mal uso.
-Metodo: Se crea una constante con el tipo de monedas validas.
Se crea un objeto con nuestros productos: nombre, indice y su precio.
Se crea la maquina en una funcion que recibe como parametros el dinero que metera el usuario, y el indice de producto. Se crea una variable para operar el dinero del usuario. Se crea una constante que simplifica trabajar con el indice del producto. Y se crea una varaiable que sera el cambio que se devuelva una vez realizada la operacion.
El filtro para moneda incorrecta, es un bucle, que recorre cash, y si no encuentra el valor, en coins, la lista de monedas validas, devuelve un mensaje y el dinero que ingreso como estaba. Caso contrario suma el valor a userMoney, y sigue la operacion.
El filtro para productos inexistentes, si el producto da undefined, devuelve un mensaje y el dinero que ingreso como estaba.
El filtro para dinero insuficiente, compara el dinero del usuario y si es menor al precio del producto, devuelve un mensaje y el dinero como estaba.
Una vez pasados los filtros, se opera restando del dinero ingresado el precio del producto. Se coloca en una variable. Luego se crea un bucle, que recorrera las monedas validas, mientras el resultado (dinero menos precio) sea mayor o igual al valor de las monedas, se restan los valores y se asignan de nuevo al resultado. Y se acumulan en change, para asi dejar la deuda en 0 y sumar las monedas mas grandes a nuestro cambio. 
Se crea un objeto con el resultado de la compra exitosa, devolviendo el nombre del producto, y el cambio actualizado. Se aplicaron test.