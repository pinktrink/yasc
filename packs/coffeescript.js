var coffeescript = require('coffee-script');

module.exports.compile = function(data, cb){
	cb(coffeescript.compile(data));
}
