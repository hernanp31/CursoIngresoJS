/*1.	Para el departamento de facturación:
Hernan Prieto
e/s TP 01
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres
*/
function Sumar () 
{
	let valor1;
	let valor2;
	let valor3;
	let suma;

	valor1 = document.getElementById('txtIdPrecioUno').value;
	valor2 = document.getElementById('txtIdPrecioDos').value;
	valor3 = document.getElementById('txtIdPrecioTres').value;

	valor1 = parseInt(valor1);
	valor2 = parseInt(valor2);
	valor3 = parseInt(valor3);

	suma = (valor1 + valor2 + valor3);

	alert("La suma de todos los productos es " + suma);
}
function Promedio () 
{
	let valor1;
	let valor2;
	let valor3;
	let suma;
	let promedio;

	valor1 = document.getElementById('txtIdPrecioUno').value;
	valor2 = document.getElementById('txtIdPrecioDos').value;
	valor3 = document.getElementById('txtIdPrecioTres').value;

	valor1 = parseInt(valor1);
	valor2 = parseInt(valor2);
	valor3 = parseInt(valor3);

	suma = (valor1 + valor2 + valor3);
	promedio = (suma / 3);

	alert("El promedio de venta es " + promedio);
}
function PrecioFinal () 
{
	let valor1;
	let valor2;
	let valor3;
	let suma;
	let iva;
	let final;

	valor1 = document.getElementById('txtIdPrecioUno').value;
	valor2 = document.getElementById('txtIdPrecioDos').value;
	valor3 = document.getElementById('txtIdPrecioTres').value;

	valor1 = parseInt(valor1);
	valor2 = parseInt(valor2);
	valor3 = parseInt(valor3);

	suma = (valor1 + valor2 + valor3);
	iva = 21;
	final = suma + (suma * iva / 100);

	alert("El precio final es " + final);
}