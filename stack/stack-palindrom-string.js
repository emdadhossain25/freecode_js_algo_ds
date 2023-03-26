// push, pop LIFO
let stack = [];
let word = "racecar";
let reverseWord = "";
for (let i = 0; i < word.length; i++) {
  stack.push(word[i]);
}
for (let j = 0; j < word.length; j++) {
  reverseWord += stack.pop();
}

if (reverseWord === word) {
  console.log(word +" is a palindrome");
}

