const fs = require('fs');

fs.readdir('.', (err, files) => {
	files.forEach(file => {
		let newPath = file.replace(/^\d{5,}/, '').replace(/^\s/, '');
		if(file === newPath) return;
		fs.rename(file, newPath, () => { // '304094 도쿄구울 re 6화' to '도쿄구울 re 6화'
			console.log(`Change filename ${file} to ${newPath}`);
		});
	});
});
