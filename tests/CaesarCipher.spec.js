import { expect } from 'chai';
import caesarCipher from '../src/caesarCipher'

describe('Caesar Cipher', () => {

  it('should have a caesarCipher() function', () => {
    expect(caesarCipher).to.be.a('function');
  });

  it('should return b when called with ("a", 1)', () => {
    expect(caesarCipher('a', 1)).to.be.equal('b');
  });

  it('should return a when called with ("z", 1)', () => {
    expect(caesarCipher('z', 1)).to.be.equal('a');
  });

  it('should return z when called with ("a", -1)', () => {
    expect(caesarCipher('a', -1)).to.be.equal('z');
  });

  it('should return o when called with ("a", 1080)', () => {
    expect(caesarCipher('a', 1080)).to.be.equal('o');
  });

  it('should return Hmiks when called with ("Diego Menezes", 30)', () => {
    expect(caesarCipher('Diego Menezes', 30)).to.equal('Hmiks Qiridiw');
  });

});
