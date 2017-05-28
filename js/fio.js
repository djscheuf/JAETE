// module pattern courtesy of : https://darrenderidder.github.io/talks/ModulePatterns/#/11
const fs = require('fs');

let fileExists = function(filePath)
{
	return fs.existsSync(filePath);
};

let readFile = function(filePath)
{
	if(!this.fileExists(filePath))
	{
		alert('File does not exist: ',filePath);
		return "";
	}
	try
	{
		var data = fs.readFileSync(filePath).toString();
		return data;
	} catch (e){
		alert('An error occured while reading your file: ', e.stack)
	}
};

let saveToFile = function(filePath,contents)
{
	if(this.fileExists(filePath))
	{
		console.log('File already exists: ', filePath, 'It will be overwritten.')
	}
	try
	{
		fs.writeFileSync(filePath,contents);
	} catch (e){
		alert('An error occured while writing your file: ', e.stack)
	}
};

// To add a file selected dialog see: https://github.com/nwjs/nw.js/wiki/File-dialogs#other-types-of-dialogs
module.exports =
{
	fileExists: fileExists,
	readFile: readFile,
	saveToFile: saveToFile
}
