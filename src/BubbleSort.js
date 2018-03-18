export default function bubbleSort(arr) {
  const array = arr;

  for (let i = array.length; i > 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        // [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
