function declension(num) {
	let last = num.toString().slice(-1);

	let nominative = num + ' компьютер';
	let genitive = num + ' компьютера';
	let pluralGenetive = num + ' компьютеров';

	if (last == 1) {
		return nominative;
	} else if (last >= 2 && last <= 4) {
		return genitive;
	} else {
		return pluralGenetive;
	}
}