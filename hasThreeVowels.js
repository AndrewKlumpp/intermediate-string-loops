function hasThreeVowels(str) {
  let vowels = "aeiou";
  let diffVowels = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels.includes(char) && !diffVowels.includes(char)) {
      diffVowels = diffVowels + char;
    }
  } if (diffVowels.length >= 3) {
    return true;
  }
  return false;
}


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
