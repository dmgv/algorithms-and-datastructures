import {expect} from 'chai';
import {mergeSort, merge} from '../src/MergeSort';

describe('Merge Sort', () => {
  it('should have a function', () => {
    expect(mergeSort).to.be.a("function");
  });
  it('should have a function', () => {
    expect(merge).to.be.a("function");
  });

  it('should return [1,2,3,4,5] when given [5,4,3,2,1]', () => {
    expect(mergeSort([5,4,3,2,1])).to.eql([1,2,3,4,5]);
  });

  it('should return [-5,-4,-3,-2,-1] when given [-1,-2,-3,-4,-5]', () => {
    expect(mergeSort([-1,-2,-3,-4,-5])).to.eql([-5,-4,-3,-2,-1]);
  });
});
