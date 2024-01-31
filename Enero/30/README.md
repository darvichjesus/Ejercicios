# Ejercicios de dificultad intermedia

## 1. Ejercicio 1: Declaracion de variables y condicionales

### Enunciado:
Solicita al usuario que ingrese dos números. Luego, verifica si el primer número es mayor que el segundo. Si es así, imprime "El primer número es mayor". De lo contrario, imprime "El segundo número es mayor o son iguales".

### Respuesta:
Creo un formulario HTML con dos campos de entrada de números y un botón de envío. Cuando se envía el formulario, se procesa en el mismo archivo utilizando PHP.

En PHP, verifico si el método de solicitud es POST. Si es así, obtengo los valores ingresados en los campos de entrada y los almaceno en variables.

Luego, utilizo una estructura condicional para comparar los números. Si el primer número es mayor que el segundo, se muestra un mensaje indicando que el primer número es mayor. Si el primer número es menor que el segundo, se muestra un mensaje indicando que el segundo número es mayor. Si ambos números son iguales, se muestra un mensaje indicando que los números son iguales.

El resultado de la comparación se muestra en la página después de enviar el formulario.

## 2. Ejercicio 2: Ciclos y Arrays

### Enunciado:
Crea un programa que solicite al usuario ingresar una lista de nombres. Luego, utiliza un bucle for each para imprimir cada nombre en una línea separada.

### Respuesta:
En este código, se ha creado un formulario HTML con un campo de entrada de texto y un botón. El objetivo es ingresar una lista de nombres separados por comas y luego imprimir cada nombre en párrafos separados.

Cuando se hace clic en el botón "Imprimir", se ejecuta la función imprimirNombres() en JavaScript. Dentro de esta función, se obtiene el valor del campo de entrada de texto utilizando document.getElementById("nombres") y se divide en una lista de nombres utilizando el método split(",").

Luego, se utiliza un bucle forEach para iterar sobre cada nombre en la lista. Para cada nombre, se crea un nuevo elemento de párrafo (<p>) utilizando document.createElement("p"). El contenido de texto del párrafo se establece en el nombre actual utilizando p.textContent = nombre. Finalmente, se agrega el párrafo al cuerpo del documento utilizando document.body.appendChild(p).

## 3. Ejercicio 3: Funciones y Arrays Asociativos

### Enunciado:
Define una función llamada calcularPromedio que reciba un array de números como parámetro y devuelva el promedio de esos números. Luego, crea un array asociativo con nombres de estudiantes como claves y arrays de calificaciones como valores. Utiliza la función para calcular el promedio de las calificaciones de cada estudiante e imprime los resultados.

### Respuesta:
Aqui se está calculando el promedio de calificaciones para varios estudiantes y mostrando los resultados en la página. Primero, se define una función llamada "calcularPromedio" que toma un array de calificaciones y devuelve el promedio. Luego, se crea un objeto llamado "calificaciones" que contiene las calificaciones de diferentes estudiantes.

Después, se obtiene una referencia al elemento HTML con el id "resultados" y se guarda en la variable "resultadosDiv". Esto se utilizará para mostrar los resultados del cálculo del promedio.

A continuación, se itera sobre cada estudiante en el objeto de calificaciones utilizando un bucle "for...in". En cada iteración, se calcula el promedio de las calificaciones del estudiante llamando a la función "calcularPromedio" y se guarda en la variable "promedio". Luego, se crea un nuevo párrafo y se establece su contenido de texto con el resultado del cálculo del promedio. Este párrafo se agrega al elemento "resultadosDiv".

## 4. Ejercicio 4: Uso de Include y Require

### Enunciado:
Crea dos archivos: uno llamado "funciones.php" que contenga una función simple (por ejemplo, una que multiplique dos números) y otro llamado "index.php" que utilice la función desde "funciones.php" para realizar una operación e imprimir el resultado.

### Respuesta:
En el archivo "funciones.php", se crea una función llamada "multiplicar". Esta función toma dos parámetros, $num1 y $num2, y devuelve el resultado de multiplicarlos.

En el "index.php" se llama el archivo "funciones.php" utilizando la declaración "include 'funciones.php'". Esto me permite acceder a la función "multiplicar" definida en el archivo mencionado.

Después de incluir el archivo, se realiza una operación de multiplicación llamando a la función "multiplicar" con los valores 5 y 3. El resultado de esta operación se guarda en la variable $resultado.

Luego, se utiliza el comando "echo" para imprimir un mensaje en la pantalla. El mensaje muestra el texto "El resultado de la multiplicación es: " concatenado con el valor almacenado en la variable $resultado.

## 5. Ejercicio de dificultad avanzada

### Enunciado:
Crea un sistema de gestión de libros en una biblioteca. Define una clase llamada Libro con propiedades como título, autor y año de publicación. Luego, crea un array de objetos Libro. Implementa una función que filtre los libros publicados después de un año específico. Finalmente, utiliza un ciclo para imprimir la información de los libros filtrados de manera formateada. Además, utiliza un archivo externo para almacenar la clase Libro y asegúrate de incluirlo correctamente en tu script principal.

### Respuesta:
El código completo realiza la gestión de libros en una biblioteca y muestra los libros filtrados según un año específico en una página web.

En el primer archivo HTML, se crea una página web básica que incluye un encabezado, un título y un div vacío con el id "librosFiltrados". También se importa un archivo JavaScript llamado "script.js" utilizando la etiqueta script con el atributo type="module". Este archivo JavaScript se encargará de gestionar los libros.

El segundo archivo JavaScript, "script.js", define una clase llamada "Libro" que tiene propiedades como "titulo", "autor" y "anioPublicacion". Luego, se crea un array llamado "libros" que contiene varias instancias de la clase "Libro" con diferentes títulos, autores y años de publicación.

A continuación, se define una función llamada "filtrarLibrosPorAnio" que toma el array de libros y un año como parámetros. Esta función utiliza el método filter para filtrar los libros cuyo año de publicación sea mayor que el año proporcionado.

Luego, se obtiene una referencia al elemento HTML con el id "librosFiltrados" y se guarda en la variable "librosFiltradosDiv". Esto se utilizará para mostrar los libros filtrados en la página.

A continuación, se itera sobre cada libro en el array "librosFiltrados". Para cada libro, se crea un elemento div llamado "libroDiv" y se establece su contenido HTML utilizando la interpolación de cadenas. Esto incluye el título, autor y año de publicación del libro.

Finalmente, se agrega cada "libroDiv" como hijo del elemento "librosFiltradosDiv" utilizando librosFiltradosDiv.appendChild(libroDiv). Esto muestra cada libro filtrado en el div con el id "librosFiltrados" en la página web.