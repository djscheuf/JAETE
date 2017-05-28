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

const decrypt = function(contents, password)
{
	// Pseudo PGP Scheme

	// hash+salt password
	var passwordCipher = crypto.createCipher('sha256','Is it Secret? Is it Safe?');
	var sPassword = contentCipher.update(password,'utf8','base64');
	sPassword += contentCipher.final('base64');

	// split eKey and eContents
	var arr = contents.split('_JAETE_');
	var eKey = arr[0];
	var eContents = arr[1];

	// decrypt eKey with saltPassword.
	var keyDecipher = crypto.createDecipher('sha256',sPassword);
	var rKey = keyDecipher.update(eKey,'base64','utf8');
	rKey += keyDecipher.final('utf8');

	// decrypt eContents with dKey.
	var contentDecipher = crypto.createDecipher('sha256',rKey);
	var contents = contentDecipher.update(eContents,'base64','utf8');
	contents += contentDecipher.final('utf8');

	return contents;
}

module.exports =
{
		encrypt: encrypt,
		//decrypt: decrypt // not ready to use yet.
}
// should probably add this to start-up:
//let crypto;
//try {
 // crypto = require('crypto');
//} catch (err) {
//  console.log('crypto support is disabled!');
//}
