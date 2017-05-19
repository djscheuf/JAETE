var jCrypto = function(){};

const crypto = require('crypto')

jCrypto.prototype.ConfirmCryptoEnabled()
{
	try{
		var crypto = require('crypto');
		return true;
	} catch (e){
		alert('Crypto support is disabled!');
		console.log('Crypto suppose disabled.', e.Stack)
		return false;
	}
}

jCrypto.prototype.encrypt(contents, password)
{
	// Pseudo PGP Scheme
	
	// hash+salt password
	var passwordCipher = crypto.createCipher('sha256','Is it Secret? Is it Safe?');
	var sPassword = contentCipher.update(password,'utf16','base64');
	sPassword += contentCipher.final('base64');
	
	// generate random key
	var rKey = crypto.randomBytes(256).toString('base64');
	
	// encrypt contents with random key.
	var contentCipher = crypto.createCipher('sha256',rKey);
	var eContents = contentCipher.update(contents,'utf16','base64');
	eContents += contentCipher.final('base64');
	
	// encrypt random key with saltPassword.
	var keyCipher = crypto.createCipher('sha256',sPassword);
	var eKey = keyCipher.update(rKey,'utf16','base64');
	eKey += keyCipher.final('base64');
	
	// combine eKey and eContents;
	var output = eKey + '_JAETE_'+eContents;
	
	return output;
}

jCrypto.prototype.decrypt(contents, password)
{
	// Pseudo PGP Scheme
	
	// hash+salt password
	var passwordCipher = crypto.createCipher('sha256','Is it Secret? Is it Safe?');
	var sPassword = contentCipher.update(password,'utf16','base64');
	sPassword += contentCipher.final('base64');
	
	// split eKey and eContents
	var arr = contents.split('_JAETE_');
	var eKey = arr[0];
	var eContents = arr[1];
	
	// decrypt eKey with saltPassword.
	var keyDecipher = crypto.createDecipher('sha256',sPassword);
	var rKey = keyDecipher.update(eKey,'base64','utf16');
	rKey += keyDecipher.final('utf16');
	
	// decrypt eContents with dKey.
	var contentDecipher = crypto.createDecipher('sha256',rKey);
	var contents = contentDecipher.update(eContents,'base64','utf16');
	contents += contentDecipher.final('utf16');
		
	return contents;
}

exports.jCrypto = jCrypto;
// should probably add this to start-up:
//let crypto;
//try {
 // crypto = require('crypto');
//} catch (err) {
//  console.log('crypto support is disabled!');
//}