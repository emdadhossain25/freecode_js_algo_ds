function isPalindrome() {
  let word = "lol";
  let reverseWord = "";
  let stack = [];

  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }

  for (let j = 0; j < word.length; j++) {
    reverseWord=reverseWord+stack.pop();
  }
  if (reverseWord===word) {
    return 1;
  }
  return 0;
}

console.log(isPalindrome());