function getPrimesInRange(min, max) {
	const primes = [];
	for (let i = min; i <= max; i++) {
		if (isPrime(i)) {
			primes.push(i);
		}
	}
	console.log(primes)
	return primes;
}

function isPrime(num) {
	if (num <= 1) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}