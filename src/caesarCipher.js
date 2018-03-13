function caesarCipher(str, number) {
  const num = number % 26;
  const lowerCaseString = str.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = '';

  for (let i = 0; i < lowerCaseString.length; i += 1) {
    const currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      /* eslint-disable no-continue */
      continue;
      /* eslint-enable no-continue */
    }
    const currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 25) newIndex -= 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }

  return newString;
}

export default caesarCipher;
