import {expect} from 'chai';

import fibMemo from '../src/memoizedFibonacci';

describe('Fibinacci', () => {
  it('should have a function', () => {
    expect(fibMemo).to.be.a("function");
  });

  it('should return 13 when given 7', () => {
    expect(fibMemo(7)).to.equal(13);
  });

  it('should return 6765 when given 20', () => {
    expect(fibMemo(20)).to.equal(6765);
  });

  it('should return 832040 when given 30', () => {
    expect(fibMemo(30)).to.equal(832040);
  });

  it('should return 354224848179262000000 when given 100', () => {
    expect(fibMemo(100)).to.equal(354224848179262000000);
  });
});
