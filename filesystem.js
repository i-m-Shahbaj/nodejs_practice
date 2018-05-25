file = require('fs');
file.readFile('first.txt',function(err,data){
	if(err)
	{
		throw err;
	}
	console.log(data.toString());
});