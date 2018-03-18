import { expect } from 'chai';

import { meanMedianMode, getMean, getMedian, getMode } from '../src/meanMedianMode';

describe('MMM Smoke Tests', () => {
  it('shoud exist a meanMediaMode function', () => {
    expect(meanMedianMode).to.be.a('function');
  });

  it('shoud exist a getMean function', () => {
    expect(getMean).to.be.a('function');
  });

  it('shoud exist a getMedian function', () => {
    expect(getMedian).to.be.a('function');
  });

  it('should exist a getMode function', () => {
    expect(getMode).to.be.a('function');
  });
});

describe('Mean Median mode', () => {
  it('shoud return {mean:14, median:10, mode:[]} when given [9, 10, 23, 10, 23, 9]', () => {
    expect(meanMedianMode([9, 10, 23, 10, 23, 9])).to.be.eql( {mean: 14, median: 10, mode: [] })
  });

  it('shoud return {mean:3, median:3, mode:[]} when given [1, 2, 3, 4, 5]', () => {
    expect(meanMedianMode([1, 2, 3, 4, 5])).to.eql({mean:3, median:3, mode:[]});
  });

  it('shoud return {mean:22.9, median:22, mode:["1", "2"]} when given [50, 21, 32, 2, 43, 54, 23, 1, 1, 2]', () => {
    expect(meanMedianMode([50, 21, 32, 2, 43, 54, 23, 1, 1, 2])).to.eql({ mean: 22.9, median: 22, mode: [ '1', '2' ] });
  });
});
