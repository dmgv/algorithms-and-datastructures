import { expect } from 'chai';
import harmlessRansomNote from '../src/harmlessRansomNote';

describe('Harmless Ranson Note', () => {
  it('should exist the function', () => {
    expect(harmlessRansomNote).to.be.a('function');
  });

  it('should return true when true 😏 ', () => {
    expect(harmlessRansomNote('it is true', 'If you are saying that it is true I belive it')).to.be.true;
  });

  it('should return false when false 😏 ', () => {
    expect(harmlessRansomNote('it is false', 'If you are saying that it is true I do not belive it')).to.be.false;
  });
});

