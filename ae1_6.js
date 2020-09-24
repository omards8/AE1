function func1 (n) {
	return n;
}
function func2 (n) {
	if (n % 2 == 0) {
		console.log("El numero es par");
	} else {
		console.log("El numero es impar");
	}
	
}
let n = prompt("Dame un numero");
func2 (func1 (n));
