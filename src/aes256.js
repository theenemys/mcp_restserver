const crypto = require('crypto');

// TODO: aes256 key 만들기 16byte
const makeAes256Key = crypto.randomBytes(16).toString('hex');

// TODO: aes256 iv 만들기 8byte
const makeIv = crypto.randomBytes(8).toString('hex');

/**
 * TODO: AES 256 암호화
 * @description 양방향
 * @param {*} aesKey aes256 key
 * @param {*} aesIv aes256 IV
 * @param {*} text 암호화할 평문
 */
const aes256Encrypt = (aesKey, aesIv, text) => {
  try {
    const cipher = crypto.createCipheriv('aes-256-cbc', aesKey, aesIv);
    let result = cipher.update(text, 'utf8', 'base64');
    result += cipher.final('base64');
    return result;
  } catch (error) {
    return error;
  }
};

/**
 * TODO: AES 256 복호화
 * @description 양방향
 * @param {*} aesKey aes256 key
 * @param {*} aesIv aes256 IV
 * @param {*} cryptogram 암호문
 */
const aes256Decrypt = (aesKey, aesIv, cryptogram) => {
  try {
    const decipher = crypto.createDecipheriv('aes-256-cbc', aesKey, aesIv);
    let result = decipher.update(cryptogram, 'base64', 'utf8');
    result += decipher.final('utf8');
    return result;
  } catch (error) {
    return error;
  }
};

ciphertext = aes256Encrypt(makeAes256Key, makeIv, 'aes256 Test');

console.log('ciphertext result');

console.log(ciphertext);

plaintext = aes256Decrypt(makeAes256Key, makeIv, ciphertext);

console.log('plaintext result');

console.log(plaintext);
