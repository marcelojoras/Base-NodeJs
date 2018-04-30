var createSerialGenerator = function(){
	var max = 10000;

	var generate = function(){
		return Math.floor(Math.random() * max);
	};

	return {
		generate: generate
	};
};

module.exports = createSerialGenerator();

/*module.exports.generate = function(){
	return Math.floor(Math.random() * max);
};

exports.generateNew = function(){
	return Math.floor(Math.random() * max);
};

this.generateNewNew = function(){
	return Math.floor(Math.random() * max);
};*/