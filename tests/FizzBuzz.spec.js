import { expect } from 'chai';
import fizzBuzz from '../src/FizzBuzz';

describe('FizzBuzz', () => {

  it('should have a fizzBuzz() function', () => {
    expect(fizzBuzz).to.be.a("function");
  });

  it('should return `Fizz` when multiple of 3', () => {
    expect(fizzBuzz(3)).to.equal('Fizz');
    expect(fizzBuzz(6)).to.equal('Fizz');
  });

  it('should return `Buzz` when mulpiple of 5', () => {
    expect(fizzBuzz(5)).to.equal('Buzz');
    expect(fizzBuzz(10)).to.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(fizzBuzz(30)).to.be.equal('FizzBuzz');
  });

  it('should return the number itself when not a Fizzbuzz', () => {
    expect(fizzBuzz(7)).to.be.equal(7);
  });
});
