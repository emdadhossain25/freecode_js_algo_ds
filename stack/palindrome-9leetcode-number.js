let original = 10;
let copy = original;
let reverseNumber = 0;
while (copy > 0) {
  let remainder = copy % 10;
  reverseNumber = reverseNumber * 10 + remainder;
  copy = Math.floor(copy / 10); // divides and floors to
}
console.log(reverseNumber);
console.log(original);
if (reverseNumber === original) {
  return true;
} else {
  return false;
}

