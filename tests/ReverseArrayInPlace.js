import { expect } from 'chai';
import reverseArrayInplace from '../src/reverseArrayInPlace'

describe('Reverse Array in Place', () => {
  it('shoud exist a function', () => {
    expect(reverseArrayInplace).to.be.a('function');
  });

  it('shoud return [4,3,2,1] when given [1,2,3,4]', () => {
    expect(reverseArrayInplace([1, 2, 3, 4])).to.be.eql([ 4, 3, 2, 1 ]);
  });

  it('shoud return [5,4,3,2,1] when given [1,2,3,4,5]', () => {
    expect(reverseArrayInplace([1, 2, 3, 4, 5])).to.be.eql([ 5, 4, 3, 2, 1 ]);
  });
});
