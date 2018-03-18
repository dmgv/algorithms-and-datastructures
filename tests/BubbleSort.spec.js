import {expect} from 'chai';
import bubleSort from '../src/bubbleSort';

describe('Bubble Sort', () => {
  it('should have a function', () => {
    expect(bubleSort).to.be.a("function");
  });

  it('shoud return [1,2,3,4,5] when given [5,4,3,2,1]', () => {
    expect(bubleSort([5,4,3,2,1])).to.eql([1,2,3,4,5]);
  });

  it('shoud return [4,6,8,10,12] when given [10,4,6,8,12]', () => {
    expect(bubleSort([10,4,6,8,12])).to.eql([ 4, 6, 8, 10, 12 ]);
  });

  it('shoud return [-10,-6,4,8,12] when given [-10,4,-6,8,12]', () => {
    expect(bubleSort([-10,4,-6,8,12])).to.eql( [-10, -6, 4, 8, 12]);
  });

  it('shoud return [-10,-6,4,4,4,8,12,12] when given [-10,4,4,4,12,-6,8,12]', () => {
    expect(bubleSort([-10,4,4,4,12,-6,8,12])).to.eql( [-10, -6, 4, 4, 4, 8, 12, 12]);
  });
});
