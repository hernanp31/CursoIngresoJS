/*2.	Para el departamento de Construcción:
Hernan Prieto
e/s TP 02
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	//txtIdLargo
	//txtIdAncho
	//txtIdRadio
	let largo;
	let ancho;
	let alambre;
	let tamañoTotal;
	let resultado;

	largo = document.getElementById('txtIdLargo').value;
	ancho = document.getElementById('txtIdAncho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	tamañoTotal = (largo + ancho) * 2
	alambre = 3;

	resultado = tamañoTotal * alambre

	alert("La cantidad de alambre a comprar es " + resultado)
}
function Circulo () 
{
	let radio;
	let alambre;
	let tamañoTotal;
	let pi;
	let resultado;

	radio = document.getElementById('txtIdRadio').value;
	radio = parseInt(radio);

	pi = 3.14;
	tamañoTotal = 2 * pi * radio;
	alambre = 3;

	resultado = tamañoTotal * alambre;

	alert("La cantidad de alambre a comprar es de " + resultado);
}
function Materiales () 
{
	let largo;
	let ancho;
	let medidas;
	let cemento;
	let cal;
	let proporcionCemento;
	let proporcionCal;

	largo = document.getElementById('txtIdLargo').value;
	ancho = document.getElementById('txtIdAncho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	cemento = 2;
	cal = 3;

	medidas = largo * ancho

	proporcionCemento = medidas * cemento
	proporcionCal = medidas * cal

	alert("Para hacer un contrapiso para las medidas de " + medidas + "m2 se necesitan " + proporcionCemento + " bolsas de cemento y " + proporcionCal + " bolsas de cal")
}