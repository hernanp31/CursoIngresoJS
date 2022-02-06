/*
Hernan Prieto
e/s 09 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
//txtIdSueldo
//txtIdResultado

	let sueldo;
	let resultado;
	let aumento

	sueldo = document.getElementById('txtIdSueldo').value
	sueldo = parseInt(sueldo);

	aumento = prompt("Please enter your percentage", "0");
	resultado = sueldo + (sueldo * aumento / 100);

	document.getElementById('txtIdResultado').value = "Tu sueldo junto el aumento del " + aumento + "% es de " + resultado;
}