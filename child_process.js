var child = require('child_process').exec;
child('mkdir heyyour',function(error,stdout,stderr){
	console.log('stdout'+stdout);
	if(error)
	{
		console.log('error    '+error);
	}
	console.log('stderr      '+stderr);
});