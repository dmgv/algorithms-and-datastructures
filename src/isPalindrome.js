function isPalindrome(string) {
  const str = string.toLowerCase();
  const characterArr = str.split('');
  const validCharacters = 'abcdefghijklmnopqrstuvwyz'.split('');

  const lettersArr = [];
  characterArr.forEach((char) => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  return false;
}

export default isPalindrome;
