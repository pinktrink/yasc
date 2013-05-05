process.on('message', function(data){
	require('./packs/' + data.pack).compile(data.data, function(ret){
		process.send(ret);
	});
});
