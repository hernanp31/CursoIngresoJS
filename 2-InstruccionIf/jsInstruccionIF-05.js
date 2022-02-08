//Hernan Prieto
//ejercicio "if" 05

//Enunciado:
//Al ingresar una edad solo debemos informar si la persona NO es adolescente.
function mostrar()
{
	//txtIdEdad
	let edadIngresada;
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada > 17)
	{
		alert("la persona NO es adolescente");
	}
	if (edadIngresada < 13)
	{
		alert("la persona NO es adolescente");
	}
/*
	como dice el enunciado si NO es adolescente se mostrara el alert, lo que significa que
	si ingreso la edad del 0 al 12 debe mostrar el alert
	al igual que la edad de 18 en adelante tambien mostrara el alert

	lo podria usar solo un if haciendolo de la sig manera:

	if (edadIngresada > 17 || edadIngresada < 13)
	{
		alert("la persona NO es adolescente");
	}

	pero como no lo explico o no dijo que lo usemos los "||", lo hice de la forma de arriba
*/
}//FIN DE LA FUNCIÓN