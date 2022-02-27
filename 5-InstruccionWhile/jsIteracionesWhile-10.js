/*
Hernan Prieto
while 10
Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let cantidadPositivos;
	let cantidadNegativos;
	let cantidadCeros;
	let numeroPares;
	let promedioPositivo;
	let promedioNegativo;
	let diferenciaPosNeg;

	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	numeroPares = 0;

	respuesta = true;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese algun valor","0");
		numeroIngresado = parseInt(numeroIngresado);
		
		if (numeroIngresado < 0)
		{
			sumaNegativos = (sumaNegativos + numeroIngresado);
			cantidadNegativos++;
		}
		else
		{
			if (numeroIngresado > 0)
			{
				sumaPositivos = (sumaPositivos + numeroIngresado);
				cantidadPositivos++;
			}
			else
			{
				cantidadCeros++;
			}
		}
		if (numeroIngresado %2 == 0)
		{
			numeroPares++;
		}

		respuesta = confirm("¿desea continuar?");
	}//fin del while

	promedioPositivo = (sumaPositivos / cantidadPositivos);
	promedioNegativo = (sumaNegativos / cantidadNegativos);
	diferenciaPosNeg = (cantidadPositivos - cantidadNegativos);

	document.write("la suma de negativos es: " + sumaNegativos + "<br>" + " la suma de positivos es: " + sumaPositivos + "<br>" +
	" la cantidad de positivos es: " + cantidadPositivos + "<br>" + " la cantidad de negativos es: " + cantidadNegativos + "<br>" +
	" la cantidad de ceros es: " + cantidadCeros + "<br>" + " la cantidad de numeros pares es: " + numeroPares + "<br>" + 
	" el promedio positivo es: " + promedioPositivo + "<br>" + " el promedio negativo es: " + promedioNegativo + "<br>" + 
	" la diferencia de positivos y negativos es: " + diferenciaPosNeg);

}//FIN DE LA FUNCIÓN