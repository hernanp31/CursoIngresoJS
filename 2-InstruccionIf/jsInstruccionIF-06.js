//Hernan Prieto
//ejercicio "if" 06

//Enunciado:
//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) 
//o niño (menor a 13 años).
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
	else
	{
		if (edadIngresada < 13)
		{
			alert("la persona es niño");
		}
		else
		{
			alert("la persona es adolescente");
		}
	}

	/*
	esto era el ejemplo de hacerlo antes de que explicara el "else"

	if (edadIngresada > 17)
	{
		alert("la persona es mayor de edad");
	}
	if (edadIngresada > 12)
	{
		if (edadIngresada <18)
		{
		alert("la persona es adolescente");
		}
	}
	if (edadIngresada < 13)
	{
		alert("la persona es niño");
	}
	*/
}//FIN DE LA FUNCIÓN