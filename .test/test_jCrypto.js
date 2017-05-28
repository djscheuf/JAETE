const jCrypto = require('../js/jCrypto.js').jCrypto;

exports.test_verifyCrypto=function(test){
  test.expect(1);

  var cry = new jCrypto();
  test.ok(cry.ConfirmCryptoEnabled()),
    "This should never return false. Crypto was disabled...";

  test.done();
}

exports.test_basicCrypto=function(test){
  test.expect(1);

  var content = "The Once and Future King";
  var password = "Password"
  var cry = new jCrypto();
  var eContent = cry.encrypt(content,password);

  test.notEqual(content,eContent);

  test.done();
}

exports.test_fullCrypto=function(test){
  test.expect(2);

  var content = "The Once and Future King";
  var password = "Password"
  var cry = new jCrypto();
  var eContent = cry.encrypt(content,password);

  test.notEqual(content,eContent);

  var dContent = cry.decrypt(eContent,password);

  test.equal(content,dContent,"Failed to decrypt properly. Scheme not symetric.")
  test.done();
}
