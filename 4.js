function showNumb(a, b) {
	let numb = a;
	let timer = setInterval(function() {
		console.log(numb);
		if (numb >= b) {
			clearInterval(timer);
		} else {
			numb++;
		}   
	}, 1000);
}

showNumb(5, 15);
