var uglify = require('uglify-js');

module.exports.compile = function(data, cb){
	cb(uglify.minify(data, {
		fromString : true
	}).code);
}
