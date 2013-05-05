var coco = require('coco');

module.exports.compile = function(data, cb){
	cb(coco.compile(data));
}
