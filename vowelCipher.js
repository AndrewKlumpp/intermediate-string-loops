function vowelCipher(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let vowels = "aeiou"
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!vowels.includes(char)) {
      newString += char;
    } else if (vowels.includes(char)) {
      let origIndex = vowels.indexOf(char);
      let newIndex = origIndex + 1;
      let newChar = vowels[newIndex % vowels.length];
      newString += newChar;
    }
  }
  return newString;
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
