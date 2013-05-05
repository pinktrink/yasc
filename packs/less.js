var less = require('less'),
	sass = require('node-sass');

module.exports.compile = function(data, cb){
	(new less.Parser).parse(data, function(nothing, data){
		sass.render(data.toCSS(), function(nothing, data){
			cb(data);
		}, {
			outputStyle : 'compressed'
		});
	});
}
