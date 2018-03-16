import { expect } from 'chai';
import sieveOfEratosthenes from '../src/sieveOfEratosthenes.js';

describe('Sieve Of Eratosthenes', () => {
  it('should have a function', () => {
    expect(sieveOfEratosthenes).to.be.a("function");
  });

  it('should return [2,3,5,7] when given 10', () => {
    expect(sieveOfEratosthenes(10)).to.eql([2,3,5,7]);
  });

  it('should return [ 2, 3, 5, 7, 11, 13, 17, 19 ] when given 20', () => {
    expect(sieveOfEratosthenes(20)).to.eql([ 2, 3, 5, 7, 11, 13, 17, 19 ]);
  });

});
