//variables
let opcion = 0;
let total = 0;
let cantidad1 = 0;
let cantidad2 = 0;
let cantidad3 = 0;
let cantidad4 = 0;
let cantidad = 0;
let pedido1 = 0;
let pedido2 = 0;
let pedido3 = 0;
let pedido4 = 0;
let pedidos = 0;
let pregunta = 1;
//estado boolean para conocer si se realizan pedidos al por mayor
let estado = false;
//precios unitarios con sus nombres y al por mayor como pedido+ inicial del producto
const pure = 15;
const chips = 10;
const zanahoria = 12;
const legumbres = 8;
const pedidop = 45;
const pedidoc = 30;
const pedidoz = 36;
const pedidol = 24;
//cantidades máximas de unidades como max+producto y de pedidos como max + c + inicial del producto
const maxpure = 10;
const maxcp = 100;
const maxchip = 10;
const maxcc = 50;
const maxzana = 15;
const maxcz = 125;
const maxleg = 20;
const maxcl = 75;
const impuestos = 0.1;
//funciones
const sumar = (valor1, valor2) => valor1 + valor2;
const restar = (valor1, valor2) => valor1 - valor2;
const multiplicar = (valor1, valor2) => valor1 * valor2;
//simulador compras
while (opcion != 7) {
    opcion = parseInt(prompt("ingrese numero de 0 a 7 para realizar acción: 0-bienvenida , 1-comprar pure de verdura, 2-comprar chips de manzana, 3-comprar zanahoria, 4-comprar legumbres, 5-calcular impuesto, 6-pagar, 7-salir menu"));
    switch (opcion) {
        case 0:
            console.log("Hola bienvenido/a a FreshDia");
            break;
        case 1:
            pregunta = parseInt(prompt("Ingrese: 1-para comprar por unidad. 2-para comprar al por mayor."))
            if (pregunta == 1) {
                cantidad1 = parseInt(prompt("Ingrese cantidad de unidades"));
                if (cantidad1 <= maxpure && cantidad1 >= 0) {
                    total = sumar(total, multiplicar(cantidad1, pure));
                    cantidad = sumar(cantidad, cantidad1);
                    alert("Se agregaron "+cantidad1+" unidades con valor de "+ multiplicar(cantidad1,pure)+"$");
                } else if (cantidad1 > maxpure) {
                    alert("supera la disponibilidad del producto");
                }
                else {
                    alert("Ingrese una cantidad válida");
                }
            } else if (pregunta == 2) {
                pedido1 = parseInt(prompt("Ingrese cantidad de pedido (kg)"));
                estado = true;
                if (pedido1 <= maxcp && pedido1 >= 0) {
                    total = sumar(total, multiplicar(pedido1, pedidop));
                    pedidos = sumar(pedidos, pedido1);
                    alert("Se añadió un pedido de "+pedido1+" kg por valor de "+multiplicar(pedido1,pedidop)+"$");
                } else if (pedido1 > maxcp) {
                    alert("Supera la disponibilidad del producto");
                } else {
                    alert("Ingrese una cantidad válida");
                }
            } else {
                alert("Ingrese una opción válida")
            }
            break;
        case 2:
            pregunta = parseInt(prompt("Ingrese: 1-para comprar por unidad. 2-para comprar al por mayor."))
            if (pregunta == 1) {
                cantidad2 = parseInt(prompt("Ingrese cantidad de unidades"));
                if (cantidad2 <= maxchip && cantidad2 >= 0) {
                    total = sumar(total, multiplicar(cantidad2, chips));
                    cantidad = sumar(cantidad, cantidad2);
                    alert("Se agregaron "+cantidad2+" unidades con valor de "+ multiplicar(cantidad2,chips) + "$");
                } else if (cantidad2 > maxchip) {
                    alert("supera la disponibilidad del producto");
                }
                else {
                    alert("Ingrese una cantidad válida");
                }
            } else if (pregunta == 2) {
                pedido2 = parseInt(prompt("Ingrese cantidad de pedido (kg)"));
                estado = true;
                if (pedido2 <= maxcc && pedido2 >= 0) {
                    total = sumar(total, multiplicar(pedido2, pedidoc));
                    pedidos = sumar(pedidos, pedido2);
                    alert("Se añadió un pedido de "+pedido2+" kg por valor de "+multiplicar(pedido2,pedidoc) +"$");
                } else if (pedido2 > maxcp) {
                    alert("Supera la disponibilidad del producto");
                } else {
                    alert("Ingrese una cantidad válida");
                }
            } else {
                alert("Ingrese una opción válida")
            }
            break;
        case 3:
            pregunta = parseInt(prompt("Ingrese: 1-para comprar por unidad. 2-para comprar al por mayor."))
            if (pregunta == 1) {
                cantidad3 = parseInt(prompt("Ingrese cantidad de unidades"));
                if (cantidad3 <= maxzana && cantidad3 >= 0) {
                    total = sumar(total, multiplicar(cantidad3, zanahoria));
                    cantidad = sumar(cantidad, cantidad3);
                    alert("Se agregaron "+cantidad3+" unidades con valor de "+ multiplicar(cantidad3,zanahoria)+ "$");
                } else if (cantidad3 > maxzana) {
                    alert("supera la disponibilidad del producto");
                }
                else {
                    alert("Ingrese una cantidad válida");
                }
            } else if (pregunta == 2) {
                pedido3 = parseInt(prompt("Ingrese cantidad de pedido (kg)"));
                estado = true;
                if (pedido3 <= maxcz && pedido3 >= 0) {
                    total = sumar(total, multiplicar(pedido3, pedidoz));
                    pedidos = sumar(pedidos, pedido3);
                    alert("Se añadió un pedido de "+pedido3+" kg por valor de "+multiplicar(pedido3,pedidoz)+"$");
                } else if (pedido3 > maxcp) {
                    alert("Supera la disponibilidad del producto");
                } else {
                    alert("Ingrese una cantidad válida");
                }
            } else {
                alert("Ingrese una opción válida")
            }
            break;
        case 4:
            pregunta = parseInt(prompt("Ingrese: 1-para comprar por unidad. 2-para comprar al por mayor."))
            if (pregunta == 1) {
                cantidad4 = parseInt(prompt("Ingrese cantidad de unidades"));
                if (cantidad4 <= maxleg && cantidad4 >= 0) {
                    total = sumar(total, multiplicar(cantidad4, legumbres));
                    cantidad = sumar(cantidad, cantidad4);
                    alert("Se agregaron "+cantidad4+" unidades con valor de "+ multiplicar(cantidad4,legumbres) +"$");
                } else if (cantidad4 > maxleg) {
                    alert("supera la disponibilidad del producto");
                }
                else {
                    alert("Ingrese una cantidad válida");
                }
            } else if (pregunta == 2) {
                pedido4 = parseInt(prompt("Ingrese cantidad de pedido (kg)"));
                estado = true;
                if (pedido4 <= maxcl && pedido4 >= 0) {
                    total = sumar(total, multiplicar(pedido4, pedidol));
                    pedidos = sumar(pedidos, pedido4);
                    alert("Se añadió un pedido de "+pedido4+" kg por valor de "+multiplicar(pedido4,pedidol)+"$");
                } else if (pedido4 > maxcl) {
                    alert("Supera la disponibilidad del producto");
                } else {
                    alert("Ingrese una cantidad válida");
                }
            } else {
                alert("Ingrese una opción válida")
            }
            break;
        case 5:
            
            alert("Su impuesto es de "+multiplicar(total,impuestos)+"$");
            total=total+multiplicar(total,impuestos);
            break;
        case 6:
            if (estado == false)
                alert("Su compra tiene un valor total de: " + total + "$USD con una cantidad de: " + cantidad + " unidades");
            else if (cantidad == 0) {
                alert("Su compra tiene un valor total de: " + total + "$USD con un pedido al por mayor en kilogramos de: " + pedidos);
            }
            else {
                alert("Su compra tiene un valor total de: " + total + "$USD con una cantidad de: " + cantidad + " unidades y un pedido al por mayor en kilogramos de: " + pedidos);

            }
            break;
        case 7:
            alert("Gracias por su compra en FreshDia, vuelva pronto");
            break;

    }
}






