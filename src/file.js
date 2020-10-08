var fs = require('fs');

var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

function encrypt(buffer){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = Buffer.concat([cipher.update(buffer),cipher.final()]);
  return crypted;
}
 
function decrypt(buffer){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = Buffer.concat([decipher.update(buffer) , decipher.final()]);
  return dec;
}

var url= '/Users/pc/workspace/test/';
var fileName='img300.jpg';
var encoding = null;

 
fs.readFile(url+fileName,encoding,function(err,data) {

    ciphertext = encrypt(data);

    plaintext = decrypt(ciphertext);

    data = plaintext;
    //data = ciphertext;

    fileName='img300_2.jpg';

    fs.writeFile(url+fileName,data,encoding,function(err) {

        if(err) console.log('Error'+err);

        else console.log("쓰기완료");

    });
    
});

/*ciphertext = aes256Encrypt(makeAes256Key, makeIv, 'aes256 Test');

console.log('ciphertext result');

console.log(ciphertext);

plaintext = aes256Decrypt(makeAes256Key, makeIv, ciphertext);

console.log('plaintext result');

console.log(plaintext);*/
