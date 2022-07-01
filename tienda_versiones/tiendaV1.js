//definicion de clases 
class Usuario {
  //propiedades :: atributos 
  name_cl;
  constructor (name) {
    this.name = name;
    
  }
}

class Producto {
  cod_prd;
  name_prd;
  precio_prd = 0;
  
  constructor (cod,name,precio) {
    this.cod_prd = cod;
    this.name_prd = name;
    this.precio_prd = precio;
  }

  
  
}
// creacion de objetos 
const pantalon = new Producto('P','Pantalon',2000);

const camisa = new Producto('C','Camisa',1500);

const medias = new Producto('M','Medias',500);


//presentacion
alert("bienvenido a nuestro supermercado");
//creacion de un nuevo usuario
user = prompt("Digite su nombre : ");
user = new Usuario(user);

do{
  do{
    alert(`${user.name} Estos son nuestros productos :` + '\n' +
    "_________________________" + '\n'+
    "Codigo| producto | precio " + '\n'+
    "_________________________" + '\n'+
    `${pantalon.cod_prd}    | ${pantalon.name_prd}  |  ${pantalon.precio_prd}` + '\n'+
    `${camisa.cod_prd}    |  ${camisa.name_prd}   |  ${camisa.precio_prd}` + '\n'+
    `${medias.cod_prd}    |  ${medias.name_prd}   |  ${medias.precio_prd}` + '\n'
    );
    //seleccion de la prenda deseada
   select_P = prompt("Digite el codigo del producto que desea comprar (En Mayuscula)");
   select_P = select_P.toUpperCase()
 

//comparacion , dentro del cada caso se realiza la eleccion de cantidad y se genera el valor total de la compra
switch (select_P){
  case "P" :
     prenda = pantalon.name_prd;
    select_cant = Number(prompt(`cuantos ${prenda}es desea comprar`));
    total_pay = select_cant * pantalon.precio_prd;
    
    break;

  case "C" :
     prenda = camisa.name_prd;
    select_cant = Number(prompt(`cuantas ${prenda}s desea comprar`));
    total_pay = select_cant * camisa.precio_prd;
    
    break;

  case "M" :
    prenda = medias.name_prd;
    select_cant = Number(prompt(`cuantos  pares de  ${prenda} desea comprar`));
    total_pay = select_cant * medias.precio_prd;
    
    break;

  default:
    alert("codigo desconocido digite de nuevo...");
    select_cant = false;
}
}while(select_cant === false)

  
alert(`${user.name} useted ha comprado ${select_cant}  ${prenda}(s) por ${total_pay}`);
//¿se quiere hacer una nueva compra ?
new_v= confirm("¿desea comprar otro articulo?");
}while(new_v === true)