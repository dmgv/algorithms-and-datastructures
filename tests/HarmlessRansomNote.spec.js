import { expect } from 'chai';
import harmlessRansomNote from '../src/HarmlessRansomNote';

describe('Harmless Ranson Note', () => {

  it('should have a harmlessRansomNote() function', () => {
    expect(harmlessRansomNote).to.be.a('function');
  });

  it('should return true when true 😏 ', () => {
    expect(harmlessRansomNote('it is true', 'If you are saying that it is true I will belive')).to.be.true;
  });

  it('should return false when false 😏 ', () => {
    expect(harmlessRansomNote('it is false', 'If you are saying that this it is true I do not belive')).to.be.false;
  });

  it('should return false when the number of word is not enought', () => {
    expect(harmlessRansomNote('beetlejuice beetlejuice beetlejuice','Sorry! I will only speak beetlejuice one time')).to.be.false;
  });

  it('should return false if nothing is passed', () => {
    expect(harmlessRansomNote('Diego','')).to.be.false;
  });

});
