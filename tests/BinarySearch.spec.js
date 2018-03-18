import { expect } from 'chai';
import binarySearch from '../src/BinarySearch.js'

describe('Binary Search', () => {

  it('should have a binarySearch() function', () => {
    expect(binarySearch).to.be.a("function");
  });

  it('should return true when the key is on array ', () => {
    expect(binarySearch([1, 2, 3, 4, ,5 ,6], 6)).to.be.true;
  });

  it('should return false when the key is not on array ', () => {
    expect(binarySearch([1, 2, 3, 4, ,5 ,6], 7)).to.be.false;
  });

  it('should return true when the key is on array ', () => {
    expect(binarySearch([1, 2, 3, 4, ,5 ,6], 2)).to.be.true;
  });

});
