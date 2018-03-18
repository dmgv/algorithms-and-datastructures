export default function harmlessRansomNote(noteText, magazineText) {
  const noteArr = noteText.split(' ');
  const magazineArr = magazineText.split(' ');
  const magazineObj = {};

  magazineArr.forEach((word) => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word] += 1;
  });

  let noteIsPossible = true;
  noteArr.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word] -= 1;
      if (magazineObj[word] < 0) noteIsPossible = false;
    } else noteIsPossible = false;
  });

  return noteIsPossible;
}
