//Hernan Prieto
//ejercicio "if" 03

//Enunciado:
//Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
function mostrar()
{
	//txtIdEdad
	let edadIngresada;
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada > 17)
	{
		alert("la persona es mayor de edad");
	}
	if (edadIngresada < 18)
	{
		alert("la persona es menor de edad");
	}

}//FIN DE LA FUNCIÓN