/*
Hernan Prieto
switch TP 04
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

 //EL PROFE QUERIE QUE TODO ESTE ANIDADO JUNTO DESDE EL PUNTO "A" AL "D"
 //Y FALTARON LOS PUNTOS y COMAS DENTRO DE LOS IFs
function CalcularPrecio () 
{
 	//txtIdCantidad
     /*Marca
     ArgentinaLuz
     FelipeLamparas
     JeLuz
     HazIluminacion
     Osram
     */
    //txtIdprecioDescuento

    let cantidadCompra;
    let marcaProducto;
    let precioLampara;
    let mensaje;
    let descuento;
    let total;
    let impuesto;

    precioLampara = 35;
    descuento = 0;
    impuesto = 0;

    cantidadCompra = document.getElementById("txtIdCantidad").value;
    marcaProducto = document.getElementById("Marca").value;

    cantidadCompra = parseInt(cantidadCompra);

    switch(cantidadCompra)
    {
        //El caso es 5 Lamparas (B)
        case 5:
            switch(marcaProducto)
            {
                case "ArgentinaLuz":
                    //si la marca es "ArgentinaLuz", el descuento es de 40%
                    mensaje = "40% descuento con 5 lamparas ArgentinaLuz queda en ";
                    descuento = 40;
                break;
                default:
                    //si la marca NO es "ArgentinaLuz", el descuento es de 30%
                    mensaje = "30% descuento con 5 lamparas que no sean ArgentinaLuz queda en ";
                    descuento = 30;
                break;
            }
        break
        //El caso es 4 Lamparas (C)
        case 4:
            switch(marcaProducto)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    //si la marca es "ArgentinaLuz" o "FelipeLamparas", el descuento es de 25%
                    mensaje = "25% de descuento con 4 lamparas queda en ";
                    descuento = 25;
                break;
                default:
                    //si la marca NO es "ArgentinaLuz" o "FelipeLamparas", el descuento es de 20%
                    mensaje = "20% de descuento con 4 lamparas queda en ";
                    descuento = 20;
                break;
            }
        break
        //El caso es 3 Lamparas (D)
        case 3:
            switch(marcaProducto)
            {
                case "ArgentinaLuz":
                    //si la marca es "ArgentinaLuz", el descuento es de 15%
                    mensaje = "15% de descuento con 3 lamparas queda en ";
                    descuento = 15;
                break;
                case "FelipeLamparas":
                    //si la marca es "FelipeLamparas", el descuento es de 10%
                    mensaje = "10% de descuento con 3 lamparas queda en ";
                    descuento = 10;
                break;
                default:
                    //si la marca NO es "FelipeLamparas", el descuento es de 5%
                    mensaje = "5% de descuento con 3 lamparas queda en ";
                    descuento = 5;
                break;
            }
        break
        //No especifica en el ejercicio y no puedo usar el default porque ya se uso en el Punto A que esta debajo
        case 0:
        case 1:
        case 2:
            mensaje = "No especifica en el enunciado, el valor es ";
            //descuento = 10;
        break;
        //El caso NO es ninguna de las anteriores (A)
        default:
            switch(marcaProducto)
            {
                default:
                    //si la cantidad es mayor a 5 y es cualquier marca, el descuento es de 50%
                    descuento = 50;
                    mensaje = "50% descuento con la compra de 6 o más lamparas queda en ";
                break;
            }
        break
    }
    //aqui mostrara el valor que se determino por los descuentos segun su condicion
    total = (precioLampara * descuento / 100) * cantidadCompra + impuesto;
    /*
    Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el 
    siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
    */
    if (total > 120)
    {
        impuesto = (total * 10 / 100);
        alert("Usted pago " + impuesto + "$ de IIBB");
    }
    document.getElementById("txtIdprecioDescuento").value = mensaje + (total + impuesto) +"$";
}