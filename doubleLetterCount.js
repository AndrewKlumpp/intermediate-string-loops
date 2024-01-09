function doubleLetterCount(string) {
  let twoInRow = 0;
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char === string[i-1]) {
      twoInRow = twoInRow + 1;
    }
  } return twoInRow;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1
