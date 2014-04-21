function fibonacci(number){ 
	if (number < 2) {
	 return number; 
	}
	return fibonacci(number-2) + fibonacci(number-1) 
}

function memoize(func){
	var cache = {};
	return function (){ 
		if (!cache[arguments]){ 
			cache[arguments] = func.apply(null, arguments);
		}
		return cache[arguments];
	}
}

var memoizedFib = memoize(fibonacci);

exports.fibonacci = fibonacci;
exports.memoizedFib = memoizedFib;
