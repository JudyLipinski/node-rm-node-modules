#!/usr/bin/env node

var rimraf = require('rimraf');
 
rimraf('./**/node_modules', (err) => {
	if (err!=null) {
		console.log(err);
	}
	else {
   		console.log('completed');
	}
});
