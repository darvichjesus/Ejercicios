# Ejercicios de JavaScript

## 1. Sencillo: Variables y Alertas

### Enunciado:
Declarar una variable llamada `nombre` y asignarle tu nombre.
Mostrar un mensaje de bienvenida en la consola que incluya el contenido de la variable `nombre`.

### Respuesta:
Creo una variable "nombre" en la cual se puede adjuntar el nombre de cualquier persona y posterior a ello coloco un console log en el cual se concatena tanto el ""Bienvenido" como el contenido de la variable nombre.

## 2. Nivel Intermedio: Condicionales y Operadores Lógicos
Enunciado:
Crear una función llamada calcularDescuento que tome dos parámetros: precio y descuento.
La función debe calcular el precio con el descuento aplicado y mostrar el resultado en la consola.
Utilizar operadores lógicos (&& y ||) para gestionar casos especiales.

### Respuesta:
Creo la funcion pedida que recibe los parametros de precio y descuento e incluyo para ello una condicional y es que de ser mayor la cantidad a descontar que el producto en si, esto arroje un console log con el mensaje "Error: El descuento no puede ser mayor al precio." y en caso de que no sea asi arroje  3 console logs en los cuales se de el precio, descuento y el resultado de aplicar ese descuento al precio en el resultado final. Se adjuntan dos casos de uso

// Caso de uso 1
calcularDescuento(100, 20);

// Caso de uso 2
calcularDescuento(50, 70);
## 3. Arreglos y Ciclos
Enunciado:
Crear un arreglo con números enteros.
Escribir una función llamada sumarPares que sume solo los números pares del arreglo.
Mostrar el resultado en la consola.

### Respuesta:
primero creo la funcion `sumarPares` que toma un arreglo como argumento. La función itera a través de cada elemento del arreglo usando un bucle `for`. Dentro del bucle, se verifica si el elemento actual es par verificando si su residuo al dividir por 2 es igual a cero. Si es así, se agrega ese número a una variable llamada `suma`. Al finalizar la iteración, la función devuelve la suma de todos los números pares en el arreglo.

Por supuesto que creo un array de nombre `numeros` que contiene los números del 1 al 10. Se llama a la función `sumarPares` pasándole este arreglo como argumento, y el resultado se almacena en una variable llamada `resultado`. Finalmente, se imprime en la consola el mensaje "Suma de números pares:" seguido del valor almacenado en la variable `resultado`. 

## 4. Condicionales y Ciclos
Enunciado:
Crear una función llamada imprimirPatron que tome un parámetro n (número).
La función debe imprimir un patrón en la consola, donde cada línea tenga números del 1 al n.

### Respuesta:
Creo una función llamada imprimirPatron. Esta función toma un parámetro n, que representa el número de líneas del patrón. Dentro de la función, inicio un bucle for que itera desde 1 hasta n.

Dentro de este bucle, creo otra variable llamada linea que utilizo para construir cada línea del patrón. Luego, hay otro bucle for que itera desde 1 hasta el valor actual de mi variable i. En cada iteración de este bucle interno, concateno el valor de j a la variable linea.

Finalmente, imprimo la variable linea en la consola, lo que crea el patrón deseado. Al llamar a mi función imprimirPatron con el argumento 8, genero un patrón de 8 líneas donde cada línea contiene números del 1 al número de la línea actual.

## 5. Nivel Avanzado: Funciones y Manejo Avanzado de Arreglos
Enunciado:
Crear una función llamada encontrarPares que tome un arreglo de números.
La función debe devolver un nuevo arreglo con solo los números pares, ordenados de mayor a menor.
Utilizar funciones de arreglo como filter y sort.

### Respuesta:
Creo una función llamada encontrarPares que toma un arreglo de números como parámetro. Dentro de esta función, utilizo el método filter para crear un nuevo arreglo llamado numerosPares, que contiene solo los números pares del arreglo original.

Después, aplico el método sort al arreglo numerosPares, utilizando una función de comparación que ordena los números de mayor a menor. El resultado final es un arreglo llamado numerosParesOrdenados.

Luego, creo un arreglo llamado arregloNumeros con algunos valores. Llamo a la función encontrarPares pasando este arreglo como argumento, y almaceno el resultado en la variable numerosParesOrdenados.

Finalmente, imprimo en la consola el mensaje "Los números pares ordenados de mayor a menor son:" seguido del arreglo resultante.
