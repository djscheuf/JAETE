// mdoule pattern courtesy of : https://darrenderidder.github.io/talks/ModulePatterns/#/11

var fio = function(){};

var fs = require('fs');

fio.prototype.FileExists(filePath){
	return fs.existsSync(filePath);
};

fio.prototype.ReadFile(filePath){
	if(!FileExists(filePath))
	{
		alert('File does not exist: ',filePath);
		return "";
	}
	try{
		var data = fs.readFileSync(filePath);
		return data;
	} catch (e){
		alert('An error occured while reading your file: ', e.stack)
	}
};

fio.prototype.SaveToFile(filePath,contents){
	if(FleExists(filePath))){
		console.log('File already exists: ', filePath, 'It will be overwritten.')
	}
	try{
		fs.writeFileSync(filePath,contents);
	} catch (e){
		alert('An error occured while writing your file: ', e.stack)
	}
};

// To add a file selected dialog see: https://github.com/nwjs/nw.js/wiki/File-dialogs#other-types-of-dialogs
exports.Fio = fio;