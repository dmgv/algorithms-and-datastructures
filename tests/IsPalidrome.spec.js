import { expect } from 'chai';
import isPalindrome from '../src/IsPalindrome';

describe('Palidrome', () => {

  it('should have a isPadindrome() the function ', () => {
    expect(isPalindrome).to.be.a('function');
  });

  it('should work when a palifrome is given', () => {
    expect(isPalindrome("Madam I'm Adam")).to.be.true;
  });

  it('should not work when a palindrome is not given', () => {
    expect(isPalindrome('Diego')).to.be.false;
  });

});
