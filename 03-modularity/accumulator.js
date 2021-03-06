function accumulatorFactory(initialValue){
	var result = initialValue || 0;

	var accumulator = {
		add : function(x){
			result += x;
		},
		subtract : function(x){
			result -= x;
		},
		multiply : function(x){
			result *= x;
		},
		divide : function(x){
			result /= x;
		},
		getResult : function(){
			return result;
		}
	};

	return accumulator;
}

module.exports = accumulatorFactory;

/*
var accFactory = require('./accumulator');

var acc = accFactory();

acc.

*/