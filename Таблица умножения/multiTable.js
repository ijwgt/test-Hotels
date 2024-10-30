function multiTable(max) {
	for (let i = 1; i <= max; i++) {
		let row = '';
		for (let k = 1; k <= max; k++) {
			row += `${i * k} `;
		}
		console.log(row);
	}
}

multiTable(5);