/*
Hernan Prieto
e/s 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//txtIdNumeroUno
	//txtIdNumeroDos
	let numero1;
	let numero2;
	let resultado;
	numero1 = document.getElementById('txtIdNumeroUno').value
	numero2 = document.getElementById('txtIdNumeroDos').value

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resultado = (numero1 + numero2);
	alert("la suma es " + resultado);

//	alert(parseInt(document.getElementById('txtIdNumeroUno').value)+parseInt(document.getElementById('txtIdNumeroDos').value))
}