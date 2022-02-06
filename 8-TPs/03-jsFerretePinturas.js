/*3.	Para el departamento de Pinturas:
Hernan Prieto  
e/s TP 03
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//txtIdTemperatura
    let fahrenheit;
    let conversor;

    fahrenheit = document.getElementById("txtIdTemperatura").value;
    fahrenheit = parseInt(fahrenheit);

    //convertir a Centígrados
    conversor = (fahrenheit - 32) / 1.8;

    alert(fahrenheit + " Fahrenheit son " + conversor.toFixed(1) + " centígrados");

}

function CentigradosFahrenheit () 
{
	//txtIdTemperatura
    let centigrados;
    let conversor;

    centigrados = document.getElementById("txtIdTemperatura").value;
    centigrados = parseInt(centigrados)

    //convertir a Fahrenheit
    conversor = (centigrados * 1.8) + 32;

    alert(centigrados + " centígrados son " + conversor.toFixed(1) + " Fahrenheit");

}
