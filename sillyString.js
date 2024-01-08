function sillyString(str) {
  let newStr = "";
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels.includes(char)) {
      newStr = newStr + char + "b" + char;
    } else {
      newStr = newStr + char;
    }
  }
  return newStr;
}


console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber
