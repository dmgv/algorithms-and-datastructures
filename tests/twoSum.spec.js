import { expect } from 'chai';
import twoSum from '../src/twoSum'

describe('Two Sum', () => {
  it('should have a function', () => {
    expect(twoSum).to.be.a("function");
  });

  it('should return [ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ] when given twoSum([1,6,4,5,3,3], 7) ', () => {
    expect(twoSum([1,6,4,5,3,3], 7)).to.eql([ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ]);
  });
});
