# Ejercicios javascript 
En este repositorio encontrara diferentes ejercicios hechos con JavaScript aplicando programación procedimental y programación orientada a objetos.

>**indice**
> 1. Conceptos.
>>- ¿Que es JavaScript?
>>- ¿Qué es el un paradigma de programación?
>>- ¿Qué es programación procedimental ?
>>- ¿Qué es programación orientada a objetos ?
>>- ¿Qué es un objeto?
>>- ¿Qué es una clase?
>>- ¿Qué es el formato JSON?

> 2. Archivos.
>>- tablas_multi.js
>>- tienda_versiones
>>>- tienda
>>>- tiendaV0.js
>>>- tiendaV1.js
>>- tablas_multi.js

## Conceptos.
### ¿Que es JavaScript?  
JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.

### ¿Qué es el un paradigma de programación?
 Un paradicma de programacion es una manera o estilo de programación de software.
 
### ¿Qué es programación procedimental ?
Este paradigma de programación consiste en basarse en un número muy bajo de expresiones repetidas, englobarlas todas en un procedimiento o función y llamarlo cada vez que tenga que ejecutarse. es un paradicma dee programacion que ejecuta instrucciones de manera lineal, es decir un paso despues del anterior.

### ¿Qué es programación orientada a objetos ?
Es un paradigma de programación que parte del concepto de "objetos" como base, los cuales contienen información en forma de campos (a veces también referidos como atributos o propiedades) y código en forma de métodos.  
Los objetos son capaces de interactuar y modificar los valores contenidos en sus campos o atributos (estado) a través de sus métodos (comportamiento).

### ¿Qué es un objeto?
un objeto es un ente que consta de un estado y de un comportamiento, que a su vez constan respectivamente de datos almacenados y de tareas realizables durante el tiempo de ejecución.  
![Imagen de ejemplo para entender mejor que es un objeto](https://i.ytimg.com/vi/y7eyMeEZswg/maxresdefault.jpg)

### ¿Qué es una clase?
Las clases son el molde para hacer un objeto conceptualmente. Las clases se utilizan para representar entidades o conceptos, como los sustantivos en el lenguaje.

### ¿Qué es el formato JSON? 
JSON es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto de la notación literal de objetos de JavaScript.

## Archivos 
### tienda_versiones  
Dentro de esta carpeta encontrara todas la versiones de una tienda, cada versión incorpora nuevo concepto como objetos, clases o serialización.  
#### tienda
Dentro de esta carpeta encontrara todas las versiones de una tienda, cada versión incorpora nuevo concepto como objetos, clases o serialización 

Allí encontrara los siguientes archivos :

>>- tiendaV1: En este archivo .js  encontrara una tienda de en la cual ya existen unos productos predefinidos, los cuales son objetos que se crearon con una clase en esta versión el cliente solo pude comprar un producto a la vez, no existe un inventario, un carrito de compras o métodos en las clases creadas, en este ejercicio se usa programación procedimental  combinada con clases y objetos
>>-  tiendaV2: en este archivo encontrara  una tienda mucho mas compleja, en este ejercicio ya se emplean clases con métodos, encapsulamiento de datos y se utiliza realmente la POO(programación orientada a objetos ) en este programa un administrador puede ingresar los productos que va a vender en la tienda y un cliente puede comprarlos después de que sean ingresados, este programa valida que lo que digite el usuario este en el inventario  así como validar que los datos digitados sean los deseados (numero, texto) en este programa pueden comprar vario usuarios y se actualiza el inventario.
>>- tienda: En esta capeta encontrara n conjunto de archivos que permitirán el funcionamiento de la aplicación.
Este programa permite lo mismo que la versión anterior con la diferencia que en esta se implementa un archivo JSON para cargar y mantener los datos de la tienda en el archivo JSON se guarda un arreglo de objetos en el cual se encuentran un inventario que es cargado al inicio de la ejecución del programa ya que es de serializado y cargado al arreglo de los productos que se venden.
ARCHIVOS: en esta carpeta encontrara:
>>>- index.html : este es el archivo que debe ejecutar en el navegador para que la version  3 funcione, en este archivo se encuentra la arquitectura basica de HTML5 y un script que nos permite la conexion con el modulo de javascript ***NOTA: el programade debe ser ejecutado en el servodor que local que no brinda visual estudio code con la extencion live server, en visual studio abra la carpeta tienda y ejecute el archivo index con live server***
>>>- datos.JSON : en este archivo se encuentran los datos del inventario serializados que son usados en el archivo .js
>>>-  tiendaV3 : el archivo javascript con todo da funcionalidad del programa.

### tablas_multi.js
En este archivo encontrara un programa que imprime la tabla de multiplicar que el usuario desee y en caso de no digitar nada imprime una tabla por defecto 

