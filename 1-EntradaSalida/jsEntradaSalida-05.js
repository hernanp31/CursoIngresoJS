/*
Hernan Prieto
e/s 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado;
	nombreIngresado = document.getElementById('txtIdNombre').value;
	let edadIngresado;
	edadIngresado = document.getElementById('txtIdEdad').value;
	alert("Usted se llama " + nombreIngresado + " y tiene " +  edadIngresado + " años");
}