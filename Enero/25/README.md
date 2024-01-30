# Ejercicios de JavaScript

## 1. Ejercicio 1: Cambiar el Texto del Elemento

### Enunciado:
Selecciona un elemento de tu página web por su ID.
Utiliza JavaScript para cambiar el texto de ese elemento a un mensaje personalizado.

### Respuesta:
Al hacer clic en el botón "Cambiar Texto", se llama a la función changeText().
La función changeText() obtiene el elemento con el id "changeText" usando document.getElementById("changeText").
Luego, se actualiza el contenido del elemento usando la propiedad innerHTML y se establece el nuevo texto.

## 2. Ejercicio 2: Agregar un Nuevo Elemento:

### Enunciado:
Crea una función que, al ser llamada, agregue un nuevo elemento (por ejemplo, un párrafo) al final de un contenedor específico en tu página.

### Respuesta:
Al hacer clic en el botón "Agregar Elemento", se llama a la función addNewElement().
La función addNewElement() crea un nuevo elemento div y le asigna un id.
Luego, se crea un nodo de texto con el contenido "Contenido agregado".
El nodo de texto se agrega como hijo del nuevo elemento div.
Finalmente, el nuevo elemento div se agrega como hijo del contenedor con el id "containerToAdd".

## 3. Ejercicio 3: Modificar Estilos Dinamicamente:

### Enunciado:
Selecciona un elemento por su clase.
Escribe una función que cambie dinámicamente el color de fondo o el tamaño de fuente de ese elemento cuando se hace clic en un botón.

### Respuesta:
Al hacer clic en el botón "Cambiar Estilo", se llama a la función changeStyle().
La función changeStyle() selecciona un elemento con la clase "changeStyle" usando document.querySelector('.changeStyle').
Se define un arreglo de colores y se selecciona un color aleatorio.
El estilo del elemento seleccionado se actualiza estableciendo el color del texto con la propiedad style.color.

## 4. Ejercicio 4: Eliminar Elementos:

### Enunciado:
Agrega varios elementos a una lista (por ejemplo, elementos de una lista de tareas).
Implementa una función que elimine un elemento específico de la lista cuando se hace clic en él.

### Respuesta:
Al hacer clic en un elemento de la lista con la clase "task-list", se llama a la función deleteTask(event).
La función deleteTask(event) verifica si el elemento objetivo del evento es una etiqueta "LI".
Si es así, el elemento "LI" se elimina de la lista mediante la función remove().

## 5. Ejercicio 5: Widget Interactivo:

### Enunciado:
Diseña un widget interactivo (como un reloj o un contador) utilizando el DOM y JavaScript.
Permite que el usuario configure ciertos aspectos del widget, como colores o intervalos, y que la interfaz se actualice en consecuencia.

### Respuesta:
Al hacer clic en el botón "Actualizar Widget", se llama a la función updateWidget().
La función updateWidget() obtiene los valores seleccionados del elemento "timeFormat" y el valor del color seleccionado del elemento "backgroundColor".
Se establece un intervalo que actualiza el reloj cada segundo mediante la función setInterval().
Dentro del intervalo, se obtiene la hora actual y se formatea según el formato seleccionado.
El contenido del elemento "clockDiv" se actualiza con la hora formateada.
Por último, se actualiza el color de fondo del elemento "interactiveWidget" usando la propiedad style.backgroundColor.