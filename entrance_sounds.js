#!/usr/bin/env node
var sys = require('sys');
var fs  = require('fs');
var net = require('net');
var mqtt = require('mqtt');var child_process = require('child_process');
var child_process = require('child_process');

var exec = child_process.exec;

var port = 1883;
var host = 'atlas.hasi';
var topic = 'hasi/sounds/entrance/play'

var client = mqtt.createClient(port, host);

client.subscribe(topic);

client.on('message', function(topic, message) {
  var filename = 'sounds/' + message + '.wav';
  if (fs.existsSync(filename)) {
    	console.log('Playing file ' + message);
    	exec('aplay ' + filename);
  }
});

heapdump.writeSnapshot()
