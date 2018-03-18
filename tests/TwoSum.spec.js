import { expect } from 'chai';
import twoSum from '../src/TwoSum'

describe('Two Sum', () => {

  it('should have a twoSum() function', () => {
    expect(twoSum).to.be.a("function");
  });

  it('should return [ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ] when called with [1,6,4,5,3,3], 7)', () => {
    expect(twoSum([1,6,4,5,3,3], 7)).to.eql([ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ]);
  });

});
