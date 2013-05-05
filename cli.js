#!/usr/bin/env node

var yasc = require('./index'),
	configLoc = false;

for(var arg in process.argv){
	if(~process.argv[arg].indexOf('--config=')){
		configLoc = process.argv[arg].substr(9);
	}
}

yasc.parseConfig(configLoc, yasc.watch);
