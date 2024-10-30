function divisors(nums) {
	let commonDivisors = [];

	for (let i = 2; i <= Math.max(...nums); i++) {
		let isDivisor = true;
		for (let j = 0; j < nums.length; j++) {
			if (nums[j] % i !== 0) {
				isDivisor = false;
				break;
			}
		}
		if (isDivisor) {
			commonDivisors.push(i);
		}
	}
}