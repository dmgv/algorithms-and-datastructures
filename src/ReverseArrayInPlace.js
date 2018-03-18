function reverseArrayInplace(arr) {
  for (let i = 0; i < arr.length / 2; i += 1) {
    const tempVar = arr[i];
    /* eslint-disable no-param-reassign */
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
    /* eslint-enable no-param-reassingn */
  }
  return arr;
}

export default reverseArrayInplace;

console.log(reverseArrayInplace([1, 2, 3, 4]));
