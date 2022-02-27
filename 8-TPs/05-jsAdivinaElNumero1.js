/*
Hernan Prieto
if TP 05
1. Adivina el número (v 1.0): Al comenzar el juego generamos un número secreto del 1 al 100, en la pantalla del juego 
dispondremos de un cuadro de texto para ingresar un número y un botón “Verificar”, si el número ingresado es el mismo que 
el número secreto se dará por terminado el juego con un mensaje similar a este:
“Usted es un ganador!!! y en solo X intentos”. de no ser igual se debe informar si “falta…” para llegar al número secreto o 
si “se pasó…” del número secreto.
*/
  //Al haber 2 funciones distintas (comenzar() y verificar()), agrego las variables afuera para que usarse en ambas funciones
  var numeroSecreto;
  var contadorIntentos;
  var miNumero;
  var iniciarJuego;

  //Defino afuera esta variable para poder solo usar la funcion comenzar() 
  //si el juego no inicio y clickeo la funcion verificar(), me pedira que inicie el juego primero
  iniciarJuego = false;

function comenzar()
{
  if (iniciarJuego == false)
  {
    //Al cambiar la variable a true, las funciones comenzar() y verificar() tendran distintas acciones
    iniciarJuego = true;
    //Genero el número RANDOM entre 1 y 100
  	numeroSecreto = Math.floor(Math.random() * 100) + 1; //ESTOY PROBANDO HASTA EL 10
    //Reinicia cantidad de intentos
    contadorIntentos = 0;
    //Mostrara el mensaje en pantalla de los intentos
    document.getElementById("txtIdIntentos").value = "Comenzó el juego";
  }
  else
  {
    //Al volver a presionar el boton "comenzar", nos avisara que ya estamos jugando
    alert("El juego ya comenzó")
  }
}

function verificar()
{
  if (iniciarJuego == true)
  {
    miNumero = document.getElementById("txtIdNumero").value;
    //el parseInt no es necesario usarlo ya que son numeros
    //miNumero = parseInt(miNumero);

    //Si adivino el numero secreto gano el juego
    if (numeroSecreto == miNumero)
    {
      alert("Usted es un ganador!!! y lo logró en " + contadorIntentos +" intentos");
    }
    else
    {
      //si no adivino el numero suma 1 intento
      contadorIntentos ++
      if (numeroSecreto > miNumero)
      {
        alert("Falta para llegar al numero secreto");
      }
      else
      {
        alert("Se pasó del numero secreto");
      }
      //Modificara el numero de intentos y lo mostrara en pantalla
      document.getElementById("txtIdIntentos").value = "Numero de intentos: " + contadorIntentos;
    }
  }
  else
  {
    //Si iniciar juego es falso, me pedira que inicie el juego primero
    alert("Primero debes iniciar el juego");
  }
}