//Este programa imprime la tabla de multiplicar que el usuario digite y en caso de no digitar una tabla de multiplicar imprime una tabla por defecto 
//este do mantiene en blucle el secmento de codigo para que el programa imprima mas de una tabla he imprima una tabla por lo menos
do{  
    //mantiene el bucle si lo que es digitado por el usuario no es un numero 
    do{
        //variable donde se almacena la tabla de multiplicar que desea imprimir el ususario 
         let pre_tabla = prompt("¿Que tabla de multiplicar desea imprimir?(valor por defecto 5)");
        //valida si la variable pre_tabla esta vacia
      if(pre_tabla === ""){
          //en caso de estar vacia le da in valor por defecto 
        pre_tabla = 5
      }
        //le asigna el valor de pre_tabla a la variable tabla y el tipo de variable se vuelve numerico 
           tabla = Number(pre_tabla); 
        
        //se valida que lo digitado por el ususario sea un numero y ennvia un mensaje 
      if(Number.isNaN(tabla) === true){
        alert("este programa solo recibe valores numericos, digite de nuevo......");
      }
        //se mantiene el bucle mientras el valor se true 
     }while(Number.isNaN(tabla) === true);
    //se crea una valiable para almacenar toda la tabla de multiplicar en un string
  let multi = "";
    //bucle que imprime la tabla de multiplicar 
    for (let i = 1; i < 11; i++) {
        //se usa una variable que almacena la tabla de multiplicar, similar a un iterador 
     multi = multi + tabla + " * "+ i +" = " + tabla*i + '\n';
    }

  alert(multi);
    //pregunta si el usuario desea imprimir otra tabla ccon un confirm que devuelve un booleano 
  valid = confirm("¿quiere imprimir otra tabla de multiplicar?");
    //se mantiene el bucle mientras valid sea verdadero 
  }while(valid === true)