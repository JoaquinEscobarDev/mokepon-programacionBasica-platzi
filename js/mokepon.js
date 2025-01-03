let ataqueJugador;
let ataqueEnemigo;
function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  let botonAgua = document.getElementById("boton-agua");
  let botonTierra = document.getElementById("boton-tierra");

  botonFuego.addEventListener("click", ataqueFuego);
  botonAgua.addEventListener("click", ataqueAgua);
  botonTierra.addEventListener("click", ataqueTierra);
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  aleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  aleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  aleatorioEnemigo();
}

function aleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else if (ataqueAleatorio == 3) {
    ataqueEnemigo = "TIERRA";
  }
  combate();
}

function combate() {    
        

    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("Empate!");
    }else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("Ganaste! ��");        
    }else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("Ganaste! ��");
    }else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("Ganaste! ��");
    }else{
        crearMensaje("Perdiste! ��");
        
    }
}

function crearMensaje(result) {
    let sectionMensaje = document.getElementById("mensajes");

  let p = document.createElement("p");
  p.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", las mascota del enemigo atacó con " + ataqueEnemigo +" - "+ result + "!";
  sectionMensaje.appendChild(p);

}

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("Selecciona una mascota");
  }

  if (
    inputHipodoge.checked ||
    inputCapipepo.checked ||
    inputRatigueya.checked
  ) {
    seleccionarMascotaEnemigo();
  } else {
    alert("Debes seleccionar una mascota");
  }
}

function seleccionarMascotaEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

  if (ataqueAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (ataqueAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else if (ataqueAleatorio == 3) {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
