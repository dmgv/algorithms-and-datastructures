import { expect } from 'chai';
import fibMemo from '../src/MemoizedFibonacci';

describe('Fibinacci', () => {

  it('should have a fibMemo() function', () => {
    expect(fibMemo).to.be.a("function");
  });

  it('should return 13 when called with 7', () => {
    expect(fibMemo(7)).to.equal(13);
  });

  it('should return 6765 when called with 20', () => {
    expect(fibMemo(20)).to.equal(6765);
  });

  it('should return 832040 when called with 30', () => {
    expect(fibMemo(30)).to.equal(832040);
  });

  it('should return 354224848179262000000 when called with 100', () => {
    expect(fibMemo(100)).to.equal(354224848179262000000);
  });

});
