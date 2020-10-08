var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    client = new kafka.KafkaClient(),
    producer = new Producer(client),
    km = new KeyedMessage('key', 'message');

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

var fs = require('fs');
var url= '/Users/pc/workspace/test/';
var fileName='test.pdf';
var encoding = null;

//var str = '';

fs.readFile(url+fileName,encoding,function(err,data) {

    //var buffer1 = data.slice(0,1);
    //var buffer2 = data.slice(1,9);

    var dataLen = Buffer.byteLength(data);
    console.log('Data Length: ' + dataLen);

    var buffer1 = data.slice(0,dataLen-1);
    var buffer2 = data.slice(dataLen-1,dataLen);

    buffer1 = encrypt(buffer1);
  //  console.log('Decrypt buffer1: ' + buffer1.toString());
    buffer2 = encrypt(buffer2);
  //  console.log('Decrypt buffer2: ' + buffer2.toString());

    var decData = Buffer.concat([decrypt(buffer1), decrypt(buffer2)], 11);

 //   console.log('Decrypt Data: ' + decData.toString());

    payloads = [
       // { topic: 'newtopic_12', messages: Buffer.from(encrypt(data).buffer), partitions: 1 }/*,
       { topic: 'newtopic_24', messages: Buffer.from(buffer1), partitions: 1 },
       { topic: 'newtopic_24', messages: Buffer.from(buffer2), partitions: 1 } 
       // { topic: 'topic2', messages: ['hello2', 'world2', km] }*/
    ];

    producer.send(payloads, function (err, data) {
        console.log(data);
        producer.close();
    });

   // str = data.toString('utf8');
   // console.log(str);

});




/*producer.on('ready', function () {
producer.send(payloads, function (err, data) {
console.log(data);
});
});*/