function twoSum(numArray, sum) {
  const pairs = [];
  const hashtable = [];
  for (let i = 0; i < numArray.length; i += 1) {
    const currNum = numArray[i];
    const counterPart = sum - currNum;
    if (hashtable.indexOf(counterPart) !== -1) {
      pairs.push([currNum, counterPart]);
    }
    hashtable.push(currNum);
  }
  return pairs;
}

export default twoSum;
