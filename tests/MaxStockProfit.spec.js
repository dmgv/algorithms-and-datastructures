import { expect } from 'chai';
import maxStockProfit from '../src/MaxStockProfit';

describe('Max Profit', () => {
  it('Should have a maxStockPrice function', () => {
    expect(maxStockProfit).to.be.a("function");
  });

  it('should return 12 when called with [10, 18, 4, 5, 9, 6, 16, 12]', () => {
    expect(maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12])).to.eql(12);
  });

  it('should return 9 when called with [1, 10]', () => {
    expect(maxStockProfit([1, 10])).to.eql(9);
  });
});
