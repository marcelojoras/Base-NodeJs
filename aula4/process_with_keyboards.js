var help = require('./help');
var keyboard = require('./keyboard');

keyboard.onReadable(function(option){
	switch(option){
		case 'a':
			console.log('pid: ' + process.pid);
		break;
		case 'b':
			console.log('title: ' + process.title);
		break;
		case 'c':
			console.log('arch: ' + process.arch);
		break;
		case 'd':
			console.log('platform: ' + process.platform);
		break;
		default:
			help.showOptions();
		break;
	}
});