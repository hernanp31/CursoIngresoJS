/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, edad("f" o "a")
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{
let pregunta;
let cantidadPregunta;
let nombrePasajero;
let edadPasajero;
let estadoCivilPasajero;
let temperaturaPasajero;
let banderaPasajeroMasTemperatura;
let pasajeroNombreMasTemperatura;
let pasajeroMasTemperatura;
let cantidadSoltero;
let cantidadCasado;
let cantidadViudo;
let cantidadMayoresViudos;
let temperaturaMayoresTerceraEdad;
let totalEdadPasajeros;
let promedio;

pregunta = true
cantidadPregunta = 0;
banderaPasajeroMasTemperatura = "ninguno";
pasajeroMasTemperatura = 0;
pasajeroNombreMasTemperatura = "";
cantidadCasado = 0;
cantidadSoltero = 0;
cantidadViudo = 0;
cantidadMayoresViudos = 0;
temperaturaMayoresTerceraEdad = 0;
totalEdadPasajeros = 0;
promedio = 0;

while(pregunta == true)
{
	nombrePasajero = prompt("Ingresar un nombre","Pulpito");
	nombrePasajero = nombrePasajero.toLowerCase();
	
	edadPasajero = prompt("Ingresar una edad mayor a 0","0");
	edadPasajero = parseInt(edadPasajero);
	while(isNaN(edadPasajero) || edadPasajero < 1)
	{
		edadPasajero = prompt("Error, ingresar una edad mayor a 0","0");
		edadPasajero = parseInt(edadPasajero);
	}

	estadoCivilPasajero = prompt("Ingresar estado civil 'soltero', 'casado' o 'viudo'","soltero");
	estadoCivilPasajero = estadoCivilPasajero.toLowerCase();
	while(estadoCivilPasajero !="soltero" && estadoCivilPasajero !="casado" && estadoCivilPasajero !="viudo")
	{
		estadoCivilPasajero = prompt("Error, ingresar estado civil 'soltero', 'casado' o 'viudo'","soltero");
		estadoCivilPasajero = estadoCivilPasajero.toLowerCase();
	}

	temperaturaPasajero = prompt("Ingresar temperatura corporal","37");
	temperaturaPasajero = parseInt(temperaturaPasajero);
	while(temperaturaPasajero < 34 || temperaturaPasajero > 42)
	{
		temperaturaPasajero = prompt("No puede ingresar con esa temperatura","37");
		temperaturaPasajero = parseInt(temperaturaPasajero);
	}

	if (banderaPasajeroMasTemperatura == "ninguno")
	{
		pasajeroMasTemperatura = temperaturaPasajero;
		pasajeroNombreMasTemperatura = nombrePasajero;
		banderaPasajeroMasTemperatura = "si";
	}
	else
	{
		if (temperaturaPasajero > pasajeroMasTemperatura)
		{
			pasajeroMasTemperatura = temperaturaPasajero;
			pasajeroNombreMasTemperatura = nombrePasajero;
		}
	}

	switch(estadoCivilPasajero)
	{
		case "casado":
			cantidadCasado ++;
		break;
		case "soltero":
			cantidadSoltero ++;
		break;
		case "viudo":
			cantidadViudo ++;
			if (edadPasajero > 59)
			{
				if (temperaturaPasajero > 37)
				{
					temperaturaMayoresTerceraEdad ++;
				}
			}
			else
			{
				if (edadPasajero > 18)
				{
					cantidadMayoresViudos ++;
				}
			}
		break;
	}

	totalEdadPasajeros += edadPasajero;
	cantidadPregunta ++;

	pregunta = confirm("Desea seguir?")
}//FINAL DEL while

promedio = (totalEdadPasajeros / cantidadPregunta);
/*
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

document.write("El nombre de la persona con mas temperatura es " + pasajeroNombreMasTemperatura + "<br>");
document.write("La cantidad de mayores de edad que estan viudos es " + cantidadMayoresViudos + "<br>");
document.write("La cantidad de hombres que hay solteros es " + cantidadSoltero + "<br>");
document.write("La cantidad de hombres que hay viudos es " + cantidadViudo + "<br>");
document.write("Las personas de la tercera edad (mayor a 60) con temp mayor a 38 es " + temperaturaMayoresTerceraEdad + "<br>");
document.write("El promedio de edad entre los hombres solteros es " + promedio);
}
