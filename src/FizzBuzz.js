const fizzBuzz = (num) => {
  if (num % 15 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';

  return num;
};

export default fizzBuzz;

/*
function fizzbuzz(num) {
  for (var i = 1; i <= num; i++) {
    if (num % 15 === 0) return 'FizzBuzz';
    else if (num % 3 === 0) return 'Fizz';
    else if (num % 5 === 0) return 'Buzz';
    else return num;
  }
}
*/
