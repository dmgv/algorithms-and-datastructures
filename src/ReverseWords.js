function reverseWords(string) {
  const wordsArr = string.split(' ');
  const reversedWordsArr = [];

  wordsArr.forEach((word) => {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i -= 1) {
      reversedWord += word[i];
    }
    reversedWordsArr.push(reversedWord);
  });

  return reversedWordsArr.join(' ');
}

export default reverseWords;
