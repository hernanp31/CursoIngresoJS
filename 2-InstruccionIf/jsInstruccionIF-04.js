//Hernan Prieto
//ejercicio "if" 04

//Enunciado:
//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
function mostrar()
{
	//txtIdEdad
	let edadIngresada;
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada > 12)
	{
		if (edadIngresada <18)
		{
		alert("la persona es adolescente");
		}
	}

}//FIN DE LA FUNCIÓN