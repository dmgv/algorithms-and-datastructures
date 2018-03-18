export function getMean(array) {
  let sum = 0;

  array.forEach((num) => {
    sum += num;
  });

  const mean = sum / array.length;
  return mean;
}

export function getMedian(array) {
  array.sort((a, b) => a - b);
  let median;

  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  } else {
    const mid1 = array[(array.length / 2) - 1];
    const mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }

  return median;
}

export function getMode(array) {
  const modeObj = {};

  // create modeObj
  array.forEach((num) => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num] += 1;
  });

  // create array of mode/s
  let maxFrequency = 0;
  let modes = [];

  /* eslint-disable no-restricted-syntax */
  for (const num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  /* eslint-enable no-restricted-syntax */

  // if every value appears same amount of times
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}

export function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array),
  };
}
