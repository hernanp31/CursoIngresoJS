/*
Hernan Prieto
e/s 10 bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
10 bis
en el ejercicio 10 e/s
lo anterior mas
se debe pedir el % por prompt
*/
function mostrarAumento()
{
	//txtIdImporte
	//txtIdResultado
	
	let importe;
	let resultado;
	let descuento

	importe = document.getElementById('txtIdImporte').value
	importe = parseInt(importe);

	descuento = prompt("Please enter your off", "0");
	resultado = (importe * descuento / 100);

	document.getElementById('txtIdResultado').value = "El " + descuento + "% de descuento es " + resultado;
}