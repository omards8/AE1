function factorial (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
    console.log(total); 
}
n = 15;
factorial (n);
