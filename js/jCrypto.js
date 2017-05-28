const crypto = require('crypto')

const ConfirmCryptoEnabled = function()
{
	try
	{
		var crypto = require('crypto');
		return true;
	} catch (e){
		alert('Crypto support is disabled!');
		console.log('Crypto suppose disabled.', e.Stack)
		return false;
	}
}

let encrypt = function(password,contents)
{
	// Pseudo PGP Scheme
	console.log('Preparing: ',
							contents.substring(0,9),
							'...\n\twith ',
							password);
	// hash+salt password

	const secret = 'Is it Secret? Is it Safe?';
	let pCipher = crypto.createCipher('aes192',secret);
	let sPassword = pCipher.update(password,'ascii','base64');
			sPassword += pCipher.final('base64');
	console.log('\tAdd salt:',sPassword.substring(0,9),'...');

	// generate random key
	var rKey = crypto.randomBytes(256).toString('ascii');

	// encrypt contents with random key.
	let cCipher = crypto.createCipher('aes192',rKey);
	let eContent = cCipher.update(contents,'ascii','base64');
			eContent += cCipher.final('base64');
  console.log('\tstir in some chaos:',eContent.substring(0,9),'...');

	// encrypt random key with saltPassword.
	let kCipher = crypto.createCipher('aes192',sPassword);
	let eKey = kCipher.update(rKey,'ascii','base64');
			eKey += kCipher.final('base64');
  console.log('\tmake that two helpings of chaos:',eKey.substring[0,9],'...');

	// combine eKey and eContents;
	var output = eKey +'_JAETE_'+ eContent;
	console.log('To get a lovely: ',output.substring(0,9),'...');

	return output;
}

const decrypt = function(password,contents)
{
	console.log('Preparing: ',
							contents.substring(0,9),
							'...\n\twith ',
							password);

	// split eKey and eContents
	var arr = contents.split('_JAETE_');
	var eKey = arr[0];
	var eContents = arr[1];
	console.log('\tremove first helping of chaos:',eKey.substring(0,9),'...');
	console.log('\set aside second helping of chaos:',eContents.substring(0,9),'...');

	// hash+salt password
	const secret = 'Is it Secret? Is it Safe?';
	let pCipher = crypto.createCipher('aes192',secret);
	let sPassword = pCipher.update(password,'ascii','base64');
			sPassword += pCipher.final('base64');
  console.log('\tAdd salt:',sPassword.substring(0,9),'...');


	// decrypt eKey with saltPassword.
	let kCipher = crypto.createDecipher('aes192',sPassword);
	let rKey = kCipher.update(eKey,'base64','ascii');
			rKey += kCipher.final('ascii');
	console.log('\trelax first portion:',rKey.substring(0,9),'...');

	// decrypt eContents with dKey.
	let cCipher = crypto.createDecipher('aes192',rKey);
	let content = cCipher.update(eContents,'base64','ascii');
			content += cCipher.final('ascii');
	console.log('\tand then relax second portion:',content.substring(0,9),'...');

	return content;
}

module.exports =
{
		encrypt: encrypt,
		decrypt: decrypt
}
// should probably add this to start-up:
//let crypto;
//try {
 // crypto = require('crypto');
//} catch (err) {
//  console.log('crypto support is disabled!');
//}
