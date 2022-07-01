
//Define clase Producto esta clase da froma al cada producto de la tienda
class Producto {
  //propiedades
  #cod_prd;
  #name_prd;
  #cantidad_prd;
  #precio_prd;

  //constructor
  constructor() {
    this.#cod_prd = 0;
    this.#name_prd = "";
    this.#cantidad_prd = 0;
    this.#precio_prd = 0.0;
  }
  // getter y setter de codigo
  set setCod_prd(value) {
    this.#cod_prd = value;;
  }

  get getCod_prd() {
    return this.#cod_prd
  }
  // getter y setter de name 
  set setName_prd(value) {
    this.#name_prd = value;;
  }

  get getName_prd() {
    return this.#name_prd
  }

  // getter y setter de name 
  set setPrecio_prd(value) {
    this.#precio_prd = value;
  }

  get getPrecio_prd() {
    return this.#precio_prd
  }
  // getter y setter de cantidad 
  set setCantidad_prd(value) {
    this.#cantidad_prd = value;
  }

  get getCantidad_prd() {
    return this.#cantidad_prd
  }
  // metodo para recolectar los datos y validar el tipo de dato pidiendo el mensaje para el prompt y el dato que captura 
  capturaDato(mensaje, tipo) {
    //do while para mantener en bucle si no se digita un dato correcto 
    do {
      // se crea la variable local que almacenara los datos que digite el usuario
      let valor = prompt(mensaje);
      valor = valor.toUpperCase();
      // en la siguuiente linea  se hace la validacion de datos para un numero 
      if (tipo === "numero" && (valor !== "" && !(!/^[0-9]*$/g.test(valor))))
        return valor;
      // en la siguiente linea  se hace la validacion de datos para un string 
      else if (tipo === "texto" && (valor !== "" && !(!/^[a-zA-Z]*$/g.test(valor))))
        return valor;
    } while (true)

  }

}
// clase compra tienda esta clase es usada para saber que y cuantos productos de un mismo tipo compra un cliente 
class CompraTienda {
  //propiedades 
  #nombre_Cl;
  #producto_com;
  #cantidad_com;
  #precio_com;


  //metodo constructor
  constructor() {
    this.#nombre_Cl = "";
    this.#producto_com = "";
    this.#cantidad_com = 0;
    this.#precio_com = 0.0;
  }

  //metodos getter y setter para nombre del cliente 
  set setNombreCl(value) {
    this.#nombre_Cl = value;;
  }

  get getNombreCl() {
    return this.#nombre_Cl
  }
  //metodos getter y setter para nombre el producto que va comprar un cliente 
  set setProducto_com(value) {
    this.#producto_com = value;;
  }

  get getProducto_com() {
    return this.#producto_com
  }
  //metodos getter y setter para la cantidad de producto que va comprar un cliente 
  set setCantidad_com(value) {
    this.#cantidad_com = value;;
  }

  get getCantidad_com() {
    return this.#cantidad_com
  }
  //metodos getter y setter para la precio de producto que va comprar un cliente 
  set setPrecio_com(value) {
    this.#precio_com = value;;
  }

  get getPrecio_com() {
    return this.#precio_com
  }

  //metodos getter y setter para la cantidad de producto que va comprar un cliente 
  set setPrecio_com(value) {
    this.#precio_com = value;;
  }

  get getPrecio_com() {
    return this.#precio_com
  }
  // Funcion para recolectar los datos y validar el tipo de dato pidiendo el mensaje para el prompt y el dato que captura 
  capturaDato(mensaje, tipo) {
    //do while para mantener en bucle si no se digita un dato correcto 
    do {
      // se crea la variable local que almacenara los datos que digite el usuario
      let valor = prompt(mensaje);
      valor = valor.toUpperCase();
      // en la siguuiente linea  se hace la validacion de datos para un numero 
      if (tipo === "numero" && (valor !== "" && !(!/^[0-9]*$/g.test(valor))))
        return valor;
      // en la siguiente linea  se hace la validacion de datos para un string 
      else if (tipo === "texto" && (valor !== "" && !(!/^[a-zA-Z]*$/g.test(valor))))
        return valor;
    } while (true)
  }
//metodo que permite la verificacion del codigo de un producto cuando es elegido por un cliente
// datosProducto hace alucion al inventario de la tienda(un arreglo de objetos donde estan los productos )
//este metodo captura el codigo del producto y devuelve el nombre del producto al cual le pertenece el codigo digitado 
  datoCodigoProducto(datosProductos) {
   // se declaran las variables que van a ser usadas en el metodo 
    let sw = true;
    let BreakException = {};
    let valor = "";
    //aqui inicia el ciclo que mantiene la pregunta de la linea 150 mientras el codigo sea incorrecto 
    do {
      valor = this.capturaDato('Digite el codigo del producto=> ', "numero");
      //try catch usado para simular un error que corte con el foreach si encuetra una coincidencia antes de que termine de revisar el arreglo completo
      try {
        datosProductos.forEach((objeto, index) => {
          //si el codigo coincide le asigna valores las propiedades cantida_prd y precio_prd(correspondientes al producto que digite el cliente)
          if (objeto.getCod_prd === valor) {
            //se le asigna la misma cantidad,de existencias que hay disponibles de un producto 
            this.setCantidad_com = objeto.getCantidad_prd;
            // se le asigna el precio qeu corresponde al producto seleccionado 
            this.setPrecio_com = objeto.getPrecio_prd;
            //se reescribe valor y en lugar del codigo ahora almacena el nombre del producto 
            valor = objeto.getName_prd;
            sw = false;
            throw BreakException;
          };
        });
      } catch (e) {
        if (e !== BreakException) throw e;
      };
      if (sw) {
        console.log("Codigo no existe. ¡Verifique!");
      }
    } while (sw)
    return valor;
  }
// metodo utilizado para validar la existencia en el inventario de un producto 
//este metodo captura la cantidad deseada, valida si hay suficientes y devuelve un numero de unidades valida para ser compradas
//resta las unidades compradas al inventario de la tienda 
  datoCantidadProducto(datosProductos) {
// decalracion de las variables usadas en el metodo 
    let sw = true;
    let BreakException = {};
    let valor = "";
    //aqui inicia el ciclo que mantiene la pregunta de la linea 184
    //si las unidades digitadas superan la cantidad existente en el inventario
    do {
      valor = Number(this.capturaDato('Digite el numero de unidades=>', "numero"));
      //se compara lo digitado por el cliente con la cantidad que se tiene del producto 
      if (valor <= this.getCantidad_com) {
        //se actualiza el valor de la propiedad Cantidad_com por la cantidad digitada por el usuario
        this.setCantidad_com = valor;
        //try catch usado para simular un error que corte con el foreach si encuetra una coincidencia antes de que termine de revisar el arreglo completo
        try {
          datosProductos.forEach((objeto, index) => {
            //se busca un producto con el mismo nombre al que se encuetra en el objeto de la clase Comprartienda 
            if (objeto.getName_prd === this.getProducto_com) {
              //al encontrar coincidencia resta el numero de articulos comprados al inventario(dentro del arreglo que se ponga como parametro)
              objeto.setCantidad_prd = objeto.getCantidad_prd - this.getCantidad_com;
              throw BreakException;
            };
          });
        } catch (e) {
          if (e !== BreakException) throw e;
        };

        sw = false;
      } else {
        console.log("Cantidad digitada excede las existencias. ¡Verifique!");
      };
    } while (sw);

    return valor;
  }


// metodo para calcular cuanto valen n catidad de productos del mismo tipo 
  calculaValorCompra() {
    return this.#cantidad_com * this.#precio_com;
  }



}
// clase tienda dentro de esta clase se almacenan los productos y se encuentra el carrito de compras 
class Tienda {
  //atributos 
  #name_ad;
  #productos_tind = [];
  #carrito_tiend = [];
  //metodo constructor 
  constructor() {
    this.#name_ad = "";
    //en este arreglo se almacenan los objetos de la clase CompraTienda(lo que compra el usuario)
    this.#carrito_tiend = [];
    //en este arreglo se almacenan los objetos de la clase Producto(los productos que vende la tienda)
    this.#productos_tind = [];
  }

  //metodo getter y setter del name_ad (administrador )
  set setName_ad(value) {
    this.#name_ad = value;;
  }

  get getName_ad() {
    return this.#name_ad
  }

  //metodo getter y setter de pass_ad (administrador )
  set setCarrito_tind(value) {
    this.#carrito_tiend = value;;
  }

  get getCarrito_tind() {
    return this.#carrito_tiend
  }
  //metodos getter y seter para la lista de productos 
  set setProductos_tind(value) {
    this.#productos_tind = value;;
  }

  get inventario() {
    return this.#productos_tind
  }
  //metodo nuevo producto usado para agregar un nuevo producto al inventario 
  nuevoProducto() {
    //decalracion de las variables que seran utilizadas en el metodo 
    let dato = "";
    let producto = new Producto();
    console.log("INGRESE EL PRODUCTO");
    //matiene la pregunta contenida dentro del ciclo mietras el tipo de dato no sea el deseado 
    do {
      dato = producto.capturaDato('Digite el codigo que le quiere asignar al producto ==>', "numero");
    } while (this.validaExistencia(dato, "codigo"))
    //se actualiza la propiedad cod_prd con el dato digitado por el usuario en mayuscula usando el metodo toUpperCase
    producto.setCod_prd = dato.toUpperCase();
    do {
      dato = producto.capturaDato('Digite el nombre del producto ==> ', "texto");
    } while (this.validaExistencia(dato.toUpperCase(), "nombre"))
    //se actualiza la propiedad name_prd con el dato digitado por el usuario en mayuscula usando el metodo toUpperCase
    producto.setName_prd = dato.toUpperCase();
    //se actualiza la propiedad cantidad_prd con el dato digitado por el usuario cambiando el tipo de dato de string a number 
    producto.setCantidad_prd = Number(producto.capturaDato('digite la cantidad de unidades que tiene en el iventaio', "numero"));
    //se actualiza la propiedad precio_prd con el dato digitado por el usuario cambiando el tipo de dato de string a number 
    producto.setPrecio_prd = Number(producto.capturaDato('Digite el precio por unidad ==> ', "numero"));
    this.#productos_tind.push(producto);
    return producto


  }
 

  //metodo utilizado para validar que el nombre o el codigo de un producto que se  desea ingresar ya existe 
  //El metodo recibe dos parametros el del dato a evaluar y la consulta que es la propiedad que se desea validar existencia 
  validaExistencia(dato, consulta) {
    //declaracion de variables usadas en el metodo 
    let sw = false;
    let BreakException = {};
    //dentro del if se valida que el arreglo de los productos tenga algo y se ejecutan diferentes bloques de codigo dependiendo de la consulta que se realiza 
    //se buscancoincidencias con el codigo del producto 
    if ((this.#productos_tind.length > 0) && (consulta === "codigo")) {
      try {
        this.inventario.forEach(obj => {
          if (obj.getCod_prd === dato) {
            sw = true;
            throw BreakException;
          };
        });
      } catch (e) {
        if (e !== BreakException) throw e;
      }
      // se buscan coincidencias con el nombre del producto 
    } else if ((this.#productos_tind.length > 0) && (consulta === "nombre")) {
      try {
        this.inventario.forEach(obj => {
          if (obj.getName_prd === dato) {
            sw = true;
            throw BreakException;
          };
        });
      } catch (e) {
        if (e !== BreakException) throw e;
      }
    } else {
      sw = false
    }

    return sw;
  }
  //metodo que captura el nombre del cliente 
capturaNombreCliente(){
  let nombre;
  do{
    nombre = prompt('Nombre del Cliente');
  }while( nombre === "" || (isNaN(nombre) === false))
  return nombre;
}
  //nuevo metodo para agregar al carrito de compras pide un parametro "nombre", se usa para no pedir el nombre del clientte cada vez que se desea un nuevo producto 
  nuevaCompra(nombre) {
    //se crea un nuevo objeto de la clase CompraTienda 
    let venta = new CompraTienda();
    //se actualiza el nombre del cliente con el parametro que pide la funcion 
    venta.setNombreCl = nombre;
    //se elige el producto que se desea comprar haciendo uso de la funcion datoCodigoProducto 
    venta.setProducto_com = venta.datoCodigoProducto(this.#productos_tind);
    //se elige la cantidad del  producto que se desea comprar haciendo uso de la funcion datoCantidadProducto 
    venta.setCantidad_com =  venta.datoCantidadProducto(this.#productos_tind);
    //push metodo utilizado para agregar al arreglo  el objeto que ha sido creado 
    this.#carrito_tiend.push(venta);
    return venta



  }
  // metodo que musetra los productos almacenados en la tienda 
  mostrarProductos(datosProductos) {
    let i = 0;
    console.log("                                   PRODUCTOS DISPONIBLES - TIENDA ONLINE");
    console.log("| CODIGO | PRODUCTO | INVENTARIO | P.V.P. |");
    //en la linea 354 se le da formato al precio de los productos 
    datosProductos.forEach(producto => {
      console.log("|   " + producto.getCod_prd + "   | " + producto.getName_prd + " |      " +
        producto.getCantidad_prd + "     | " + (producto.getPrecio_prd).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " | ");
    });
    console.log(" ");
  }
  //este metodo muestra los la factura de la compra 
  //a todos los rpecios se les da formato
   mostrarCompra(){

          let i=0;
          let valor_comp = 0;

          console.log ("                                   FACTURA DE VENTA - TIENDA ONLINE");
          console.log ("|       PRODUCTO     |   CANTIDAD  |   P.V.P.   |   SUBTOTAL   |");
        //froeach que recorre el carrito de compras para imprimirlo y dar el subtotal de cada producto 
          this.#carrito_tiend.forEach(objeto => {
            // se usa el metodo calcularValorCompra para saber el subtotal de cada producto 
            //en la variable valor_comp se almecena la sumatoria del cada subtotal para tener el valor total a pagar 
               valor_comp += objeto.calculaValorCompra();
               console.log("|      " + objeto.getProducto_com + "      |       " + objeto.getCantidad_com + "     | " +
               objeto.getPrecio_com.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "  |  " + (objeto.calculaValorCompra()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "   | ");
          });
          console.log("");  
          console.log("Valor Total de la Factura ==> ", (valor_comp).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));     
          console.log("¡Gracias por su compra!");
     }
}

// se crea un objeto administrador 
const tienda = new Tienda();
tienda.setName_ad = "el centavo menos";
//inicia el programa para los ususarios (administrador) 
alert("Bienvenido a la tienda administrador!!");
//se mantiene el ciclo mientras se quiera  ingresar al inventario un nuevo producto
//bucle para ingresar productos al inventario manualmente 
do{
    //se hace uso del metodo nuevoProducto para ingresar un nuevo producto a la tienda 
    tienda.nuevoProducto();
}while (confirm("¿Desea ingresar un nuevo producto al inventario?"))
do{
//inicia el progrrama para los ususarios (clientes) 
alert("Bienvenido a la tienda!!");
//se decalra y usa la fucion  capturaNombreCliente
let cliente = tienda.capturaNombreCliente();
//mantiene el ciclo mietras el cliente quiera un nuevo porducto 
do {
  //se muetran los productos existentes en la tienda con el metodo mostrarProductos
  tienda.mostrarProductos(tienda.inventario);
  //el cliente elige el prodructo que quiere agregar al carrito de compras 
  tienda.nuevaCompra(cliente);
} while (confirm("¿Desea comprar un nuevo producto ?"));
//se finaliza la compra  mostrando la factura 
console.log('Nombre del Cliente ==> ' + tienda.getCarrito_tind[0].getNombreCl);
tienda.mostrarCompra();
}while(confirm('existe un nuevo cliente'))






