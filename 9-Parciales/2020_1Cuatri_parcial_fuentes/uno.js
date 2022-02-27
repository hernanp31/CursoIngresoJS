/*
Hernan Prieto
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

*/
function mostrar()
{
//VARIABLES
let contador;
let tipoProducto;
let precio;
let unidadesProducto;
let cantidadBarbijo;
let cantidadJabon;
let cantidadAlcohol;
let marca;
let fabricante;
let banderaAlcoholBarato;
let precioAlcoholBarato;
let cantidadAlcoholBarato;
let fabricanteAlcoholBarato;
let promedioCompra;
let productoMasUnidades;
let precioTotalBarbijo;
let precioTotalJabon;
let precioTotalAlcohol;

contador = 0;

cantidadAlcohol = 0;
cantidadBarbijo = 0;
cantidadJabon = 0;

banderaAlcoholBarato = "no";
precioAlcoholBarato = 0;
cantidadAlcoholBarato = 0;
fabricanteAlcoholBarato = 0;
promedioCompra = 0;
productoMasUnidades = "";
precioTotalAlcohol = 0;
precioTotalBarbijo = 0;
precioTotalJabon = 0;

while(contador < 5)
{
	tipoProducto = prompt("Ingrese un producto 'barbijo', 'jabon' o 'alcohol'","barbijo");
	tipoProducto = tipoProducto.toLowerCase();
	while(tipoProducto !="barbijo" && tipoProducto !="jabon" && tipoProducto !="alcohol")
	{
		tipoProducto = prompt("Error, ingrese un producto 'barbijo', 'jabon' o 'alcohol'","barbijo");
		tipoProducto = tipoProducto.toLowerCase();
	}

	precio = prompt("Ingrese un precio entre 100 a 300","100");
	precio = parseInt(precio);
	while(precio < 100 || precio > 300)
	{
		precio = prompt("Error, ingrese un precio entre 100 a 300","100");
		precio = parseInt(precio);
	}

	unidadesProducto = prompt("Ingrese una cantidad mayor a 0 y menor a 1000","1");
	unidadesProducto = parseInt(unidadesProducto);
	while(unidadesProducto < 0 || unidadesProducto > 1000)
	{
		unidadesProducto = prompt("Error, ingrese una cantidad mayor a 0 y menor a 1000","1");
		unidadesProducto = parseInt(unidadesProducto);
	}

	marca = prompt("Ingrese una marca","Papita");
	fabricante = prompt("Ingrese un fabricante","Pelada");

	switch(tipoProducto)
	{
		case "barbijo":
			cantidadBarbijo ++;
			precioTotalBarbijo += precio;
		break;
		case "alcohol":
			cantidadAlcohol ++;
			precioTotalAlcohol += precio;
			if (banderaAlcoholBarato == "no")
			{
				precioAlcoholBarato = precio;
				cantidadAlcoholBarato = unidadesProducto;
				fabricanteAlcoholBarato = fabricante;
				banderaAlcoholBarato = "si";
			}
			else
			{
				if (precio < precioAlcoholBarato)
				{
					precioAlcoholBarato = precio;
					cantidadAlcoholBarato = unidadesProducto;
					fabricanteAlcoholBarato = fabricante;
				}
			}
		break;
		case "jabon":
			cantidadJabon ++;
			precioTotalJabon += precio;
		break;
	}

	contador ++;
}//FINAL DEL while

/*
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

if (cantidadAlcohol > cantidadBarbijo && cantidadAlcohol > cantidadJabon)
{
	productoMasUnidades = "alcohol";
	promedioCompra = (precioTotalAlcohol / 5);
}
else
{
	if (cantidadBarbijo > cantidadJabon)
	{
		productoMasUnidades = "barbijo";
		promedioCompra = (precioTotalBarbijo / 5);
	}
	else
	{
		productoMasUnidades = "jabon";
		promedioCompra = (precioTotalJabon / 5);
	}
}

document.write("El alcohol más barato es " + fabricanteAlcoholBarato + " y cantidad de " + cantidadAlcoholBarato + " vale " + precioAlcoholBarato + "<br>");
document.write("El producto con mas unidadaes es " + productoMasUnidades + " y su promedio " + promedioCompra + "<br>");
document.write("La cantidad totales de jabones es " + cantidadJabon);

}
