import {expect } from 'chai';
import binarySearch from '../src/binarySearch.js'

describe('Binary Search', () => {
  it('should have a function', () => {
    expect(binarySearch).to.be.a("function");
  });

  it('should return true when ket is on array ', () => {
    expect(binarySearch([1, 2, 3, 4, ,5 ,6], 6)).to.be.true;
  });

  it('should return false when key is not on array ', () => {
    expect(binarySearch([1, 2, 3, 4, ,5 ,6], 7)).to.be.false;
  });
});
