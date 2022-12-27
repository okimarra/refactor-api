Prueba técnica

1. Se le pide refactorizar el código provisto junto con esta prueba escrita:
archivo server.js que forma parte de un proyecto Mongo + Node + Express.
Asuma que existen y funcionan correctamente los archivos no provistos.
Corrija todo lo que considere incorrecto explicando brevemente por qué no es
correcto. De ser necesario puede modificar la estructura de directorios y
entregar más de un archivo.
2. Habiendo hecho estos cambios en el código de la parte anterior:
a. Explique brevemente qué tipos de tests realizaría para asegurar el
correcto comportamiento del sistema.
b. Opcional: implemente dichos tests.
3. Dado un arreglo de objetos, los cuales son de la forma { date: Date, items:
Array&lt;Object&gt; } retornar un objeto donde la key es el mes/año (ejemplo:
02/2020) y el valor es un arreglo con los elementos cuya fecha sea la de ese
mes/año ordenados de forma ascendente. 

El archivo original quedó en la carpeta node, la solución implementada es la de la carpeta api dentro de la carpeta node

1. Modificaciones hechas:
-Se modificó la estructura de archivos. Separando el server.js en app.js para el liveness y la creación de la instancia, un archivo de main-router para poner todas las posibles entradas de la api y un archivo posts.js dentro de la carpeta routes para todos los métodos ya creados y refactoreados. 
    A su vez se quitó el prefijo posts ya que no era necesario en este archivo.
-Se creó input validation para chequear los bodys de post y put.
-Se agregó estructura de manejo de errores try catch en todos los métodos de routes.
-Se modificó el orden de los métodos para que funcionen correctamente (getAll y getById), se utilizaron los métodos http correctos para put y delete y se agregó que el id se pase por parámetro. Se obvió el /create del post, no era necesario.
-Se utilizó el .sendStatus y .json cuando fue necesario en la respuesta. Se añadió el código de status correcto cuando faltaba.
-Se llamó siempre a una BL para realizar todo lo que fuera lógica de negocio y llamada a acceso a datos.

Modificaciones que sumaría pero no hice por tiempos: 
-Input validation para rutas http en las que se pasa parámetro y así validar que sea un pattern correcto.
-Lógica y manejo de errores robusta para Delete indicando cuando no existe el elemento, lo mismo para el Put y a su vez tanto en Put como en Post validar duplicados por title, utilizando los statusCodes correctos.
-Autenticación con token.

2. Tests a implementar:
-TDD para cada llamada http a realizar.
    -Que se devuelva el response code correcto.
    -Que se llame con los atributos correctos al método de la BL en los casos que corresponde (put, post).
    -Que se llame con el id correcto tomado desde los params al metodo de la BL en los casos que corresponde (getById, delete, put).
    -Si se agrega duplicados para put y post (409) o no encontrados para getById y delete (404) que se responda con los statusCode correctos.
    -Que se retorne un id cuando se crea un item en el caso del post.
    -Que se retorne un 400 en caso de no cumplir con alguno de los input validation por pattern, por tipo de dato o por no venir el dato en los casos que corresponda.
    -Que devuelva los items que debe devolver en los casos de getById y getAll y con statusCode correcto
    -Que devuelva listado de items vacio si no hay items creados en el getAll
    -Que devuelva 500 en caso de haber error al obtener los items de la base o en el caso de crear o modificar
-Tests de integración con Postman simulando la llamada a la Api. Podríamos levantar con Docker y crear una librería dentro de postamn para automatizar las pruebas desde allí.

3. Van los arrays de objetos de prueba y el archivo con método que procesa en archivo ejercicio-punto-3.js dentro de carpeta node. Se puede ejecutar ejecutando node ejercicio-punto-3.js parados en la carpeta node.
