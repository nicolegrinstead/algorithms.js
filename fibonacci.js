function fibonacci(number){ 
	if (number < 2) {
	 return number; 
	}
	return fibonacci(number-2) + fibonacci(number-1) 
}

exports.fibonacci = fibonacci;
