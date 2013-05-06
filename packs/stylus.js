var stylus = require('stylus'),
	sass = require('node-sass');

module.exports.compile = function(data, cb){
	stylus.render(data, function(nothing, data){
		sass.render(data, function(nothing, data){
			cb(data);
		}, {
			outputStyle : 'compressed'
		});
	});
}
