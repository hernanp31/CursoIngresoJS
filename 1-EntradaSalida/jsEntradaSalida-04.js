/* 
Hernan Prieto
e/s 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombreIngresado;
	nombreIngresado = prompt("Please enter your name", "hernan");
	document.getElementById('txtIdNombre').value = nombreIngresado
}

