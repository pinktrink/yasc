var sass = require('node-sass');

module.exports.compile = function(data, cb){
	sass.render(data, function(nothing, data){
		cb(data);
	}, {
		outputStyle : 'compressed'
	});
}
