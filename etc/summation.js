//o(n)
function iterativeSum (n){ 
  var sum = 0;
  for (var i=0; i<=n; i++){ 
    sum += i;
  }
  return sum;
}

//o(1)
function gaussianSum (n){ 
  return (n+1)*(n/2);
}

//o(n)
function recursiveSum (n){ 
  return n <=1 ? 1 : n + recursiveSum(n-1);
}

function memoize(func){ 
  var cache = {}; 
  return function (){ 
    if(!cache[arguments]){
      cache[arguments] = func.apply(null, arguments);    
    }
    return cache[arguments];
  }
}

var memoizedIterativeSum = memoize(iterativeSum);
var memoizedRecursiveSum = memoize(recursiveSum);

exports.iterativeSum = iterativeSum;
exports.memoizedIterativeSum = memoizedIterativeSum;
exports.memoizedRecursiveSum = memoizedRecursiveSum;
exports.gaussianSum = gaussianSum;
exports.recursiveSum = recursiveSum;
