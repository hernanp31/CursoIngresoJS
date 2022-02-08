//Hernan Prieto
//ejercicio "if" 02

//Enunciado:
//Al ingresar una edad debemos informar solo si la persona es mayor de edad
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

}//FIN DE LA FUNCIÓN