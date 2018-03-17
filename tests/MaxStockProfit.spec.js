import {expect} from 'chai';
import maxStockProfit from '../src/MaxStockProfit';

describe.only('Max Profit', () => {
  it('Should have a function', () => {
    expect(maxStockProfit).to.be.a("function");
  });

  it('should', () => {
    expect(maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12])).to.eql(12);
  });

  it('should 2', () => {
    expect(maxStockProfit([1, 10])).to.eql(9);
  });
});
