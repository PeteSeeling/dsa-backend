const sentence = 'alchemy rocks gold';
const words = sentence.split(' ');

console.log(words);


function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}
console.log(reverseWords('This is a sentence'));



