function func(a) {
	return function(b) {
		let sum = a + b;
		return sum;
		}
}

console.log(func(75)(25));