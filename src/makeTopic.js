var kafka = require('kafka-node');
var Consumer = kafka.Consumer;
var Offset = kafka.Offset;
var Client = kafka.KafkaClient;
var topic = 'newtopic_24';

var client = new Client({ kafkaHost: 'localhost:9092' });
var topics = [{ topic: topic, partitions: 1, replicationFactor: 1 }];
//var options = { autoCommit: false, fetchMaxWaitMs: 100000, fetchMaxBytes: 500 * 1024 * 1024, encoding: 'buffer'};

//var consumer = new Consumer(client, topics, options);
 

 
client.createTopics(topics, function(error, result) {
  // result is an array of any errors if a given topic could not be created
});