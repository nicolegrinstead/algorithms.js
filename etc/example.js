function spacify(inputStr){
	var output = '';
	var words = inputStr.split(' ');
	for (var i in words){
		for (var j=0; j<words[i].length; j++){
			output += words[i][j] + ' ';
		}
		output += ' ';
	}
	return output;
}

function spacify2(inputStr){
	return str.split('').join(' ');
}

console.log(spacify('hello world'));

var User = {
  count: 1,

  getCount: function() {
    return this.count;
  }
};

function UserTwo(){
	this.count = 2;
}
UserTwo.prototype.getCount = function(){
	return this.count;
}

console.log(User.getCount());

var func = User.getCount;
console.log(func());

var userTwo = new UserTwo();
console.log(userTwo.getCount());