#!/usr/bin/env node

yasc = require('./index');

yasc.parseConfig();
yasc.watch();

setInterval(function(){}, 1000000);  //Keep app alive.
