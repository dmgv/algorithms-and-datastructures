import {expect} from 'chai';

import fibonacci from '../src/fibonacci';

describe.only('Fibinacci', () => {
  it('should have a function', () => {
    expect(fibonacci).to.be.a("function");
  });

  it('should return 13 when given 7', () => {
    expect(fibonacci(7)).to.equal(13);
  });

  it('should return 6765 when given 20', () => {
    expect(fibonacci(20)).to.equal(6765);
  });

  it('should return 832040 when given 3 0', () => {
    expect(fibonacci(30)).to.equal(832040);
  });
});
