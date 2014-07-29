#!/usr/bin/env node
var sys = require('sys');
var net = require('net');
var mqtt = require('mqtt');
var child_process = require('child_process');

var port = 1883;
var host = 'atlas.hasi';

var client = mqtt.createClient(port, host);
var exec = child_process.exec;

client.subscribe('hasi/code_sounds/play');

client.on('message', function(topic, message) {
	console.log('Playing file ' + message);
	exec('aplay sounds/nanooq_' + message + '.wav');
});
