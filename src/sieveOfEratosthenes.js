export default function sieveOfEratosthenes(n) {
  const primes = [];

  for (let i = 0; i <= n; i += 1) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    for (let j = 2; i * j <= n; j += 1) {
      primes[i * j] = false;
    }
  }

  const result = [];
  for (let i = 0; i < primes.length; i += 1) {
    if (primes[i]) result.push(i);
  }

  return result;
}
