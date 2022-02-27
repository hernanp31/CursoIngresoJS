/*
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
//VARIABLES
let pregunta;
let tipoProducto;
let cantidadBolsas;
let precioBolsa;
let descuento;
let cantidadBolsasTotales;
let importeTotal;
let importeTotalBruto;
let bolsasArena;
let bolsasCal;
let bolsasCemento;
let masBolsas;
let banderaProductoCaro;
let productoCaro;
let valorProductoCaro;

pregunta = true;
cantidadBolsasTotales = 0;
descuento = 0;
importeTotal = 0;
importeTotalBruto = 0;
bolsasArena = 0;
bolsasCal = 0;
bolsasCemento = 0;
masBolsas = "";
banderaProductoCaro = "ninguno";
productoCaro = 0;
valorProductoCaro = 0;

while(pregunta == true)
{
  tipoProducto = prompt("Ingresar producto 'arena', 'cal' o 'cemento'","arena");
  tipoProducto = tipoProducto.toLowerCase();
  while(tipoProducto !="arena" && tipoProducto !="cal" && tipoProducto !="cemento")
  {
    tipoProducto = prompt("Error, ingresar producto 'arena', 'cal' o 'cemento'","arena");
    tipoProducto = tipoProducto.toLowerCase();
  }

  cantidadBolsas = prompt("Ingresar cantidad bolsas mayor a 0","1");
  cantidadBolsas = parseInt(cantidadBolsas);
  while(cantidadBolsas < 0)
  {
    cantidadBolsas = prompt("Error, ingresar cantidad bolsas mayor a 0","1");
    cantidadBolsas = parseInt(cantidadBolsas);
  }

  precioBolsa = prompt("Ingresar precio mayor a 0","1");
  precioBolsa = parseInt(precioBolsa);
  while(precioBolsa < 0)
  {
    precioBolsa = prompt("Error, precio mayor a 0","1");
    precioBolsa = parseInt(precioBolsa);
  }

  switch(tipoProducto)
  {
    case "arena":
      bolsasArena ++;
    break;
    case "cal":
      bolsasCal ++;
    break;
    case "cemento":
      bolsasCemento ++;
    break;
  }

  if (banderaProductoCaro == "ninguno")
  {
    productoCaro = tipoProducto;
    valorProductoCaro = precioBolsa;
    banderaProductoCaro = "si";
  }
  else
  {
    if (precioBolsa > productoCaro)
    {
      productoCaro = tipoProducto;
      valorProductoCaro = precioBolsa;
    }
  }

  cantidadBolsasTotales += cantidadBolsas;
  importeTotalBruto += precioBolsa;

  pregunta = confirm("Desea seguir ingresando datos?");
}//FINAL DEL while

if (cantidadBolsasTotales > 30)
{
  descuento = 25;
}
else
{
  if (cantidadBolsasTotales > 10)
  {
    descuento = 15;
  }
  else
  {
    descuento = 0;
  }
}

if (bolsasArena > bolsasCemento && bolsasArena > bolsasCal)
{
  masBolsas = "arena";
}
else
{
  if (bolsasCemento > bolsasCal)
  {
    masBolsas = "cemento";
  }
  else
  {
    masBolsas = "cal";
  }
}

importeTotal = (importeTotalBruto * descuento / 100) + importeTotalBruto;

/*
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.  x
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.  x
a) El importe total a pagar , bruto sin descuento y...  
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas. x
f) El tipo mas caro x
*/

document.write("Importe total a pagar en bruto es " + importeTotalBruto + "<br>");
document.write("Importe total a pagar con descuento es " + importeTotal + "<br>");
document.write("El tipo con mas cantidad de bolsas es " + masBolsas + "<br>");
document.write("El tipo mas caro es " + productoCaro + " que vale " + valorProductoCaro);

}

