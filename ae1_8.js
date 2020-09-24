function func1 () {
	let n = prompt("Dame un numero comprendido entre el 1 y el 12");
	
	while ((n > 12) || (n < 1)) {
		alert("El numero introducido no es correcto.");
		let n = prompt("Dame un numero comprendido entre el 1 y el 12");
	}
	return n;
}
function dado(n) {
	let apuesta = prompt("¿Que número del dado va a salir?");

	let solucion = Math.floor(Math.random() * 12) + 1;

	if (apuesta == solucion) {
		alert("El numero introducido es correcto. ENHORABUENA!");
	} else {
		alert("El numero introducido NO es correcto. VUELVE A INTENTARLO.");
	}
}
dado(func1 ());