var rimraf = require('rimraf');
 
rimraf('./**/node_mods', (err) => {
	if (err!=null) {
		console.log(err);
	}
	else {
   		console.log('completed');
	}
});
