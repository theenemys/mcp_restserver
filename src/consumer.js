var kafka = require('kafka-node');
var Consumer = kafka.Consumer;
var Offset = kafka.Offset;
var Client = kafka.KafkaClient;
var topic = 'newtopic_24';

var client = new Client({ kafkaHost: 'localhost:9092' });
var topics = [{ topic: topic, partitions: 1 }];
var options = { autoCommit: false, fetchMaxWaitMs: 100000, fetchMaxBytes: 500 * 1024 * 1024, encoding: 'buffer'};

var consumer = new Consumer(client, topics, options);
var offset = new Offset(client);

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
var fileName='test_2.pdf';
var encoding = '';

//var buffer1 = new Buffer(1);
//var buffer2 = new Buffer(8);

var buffer1;// = new Buffer(8);
var buffer2;// = new Buffer(1);

/*var buffer1 = new Buffer(splitPoint);
var buffer2 = new Buffer(dataLen-splitPoint); 

data.copy(buffer1, 0, 0, 1);
console.log('buffer1 length: ' + buffer1.length);

data.copy(buffer2, 0, 1, dataLen);
console.log('buffer2 length: ' + buffer2.length);*/

var step = 1;

consumer.on('message', function (message) {

    if(step == 1) {

        var dataLen1 = Buffer.byteLength(message.value);
        console.log('dataLen1 Length: ' + dataLen1);

        buffer1 = new Buffer(dataLen1-1);

        buffer1 = message.value;

        //console.log('Decrypt message 1: ' + decrypt(message.value));
            
        //decrypt(message.value).copy(bufferAll, 0, 0, 1);

        step++;

    } else {

        buffer2 = new Buffer(1);

        buffer2 = message.value;

       // console.log('Decrypt message 2: ' + decrypt(message.value));

        var bufferAll = Buffer.concat([decrypt(buffer1), decrypt(buffer2)]);

      //  console.log('Decrypt message All: ' + bufferAll.toString());
  
        //console.log('Data length: ' + decrypt(message.value).length);

        //decrypt(message.value).copy(bufferAll, 1, 0, 10);

        //fs.writeFile(url+fileName,decrypt(message.value),encoding,function(err) {
        fs.writeFile(url+fileName,bufferAll,encoding,function(err) {

        if(err) console.log('Error'+err);

        else console.log("쓰기완료");

        //fs.close();

        //consumer.close();

    });

}

});



/*consumer.on('message', function (message) {
    console.log(message);
});*/

/*consumer.on('error', function (err) {
  console.log('error', err);
});*/