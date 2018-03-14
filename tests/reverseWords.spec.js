import { expect } from 'chai';
import reverseWords from '../src/reverseWords'

describe('Reverse Word', () => {
  it('should exist a function reverseWorlds', () => {
    expect(reverseWords).to.be.a('function');
  });

  it('should get tcaer when given react ', () => {
    expect(reverseWords('react')).to.be.equal('tcaer');
  });

  it('should return "siht si a gnirts fo sdrow" when given "this is a string od words"', () => {
    expect(reverseWords('this is a string of words')).to.be.equal('siht si a gnirts fo sdrow');
  });

});
