var interval = function(callback, timeout){
	setTimeout(function(){
		callback();
		interval(callback, timeout);
	}, timeout);
};

interval(function(){
	console.log('R ' + new Date());
}, 1000);