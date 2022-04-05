
function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}
console.log(reverseWords('This is a sentence'));


function oddishOrEvenish(number){
  const digitsSum = number
    .toString()
    .split('')
    .map((digit) => Number(digit))
    .reduce((sum, number) => sum + number);
  return digitsSum % 2 ? 'Oddish' : 'Evenish';
}


function fizzBuzz(num){
  const start = 1;
  const end = 50;
  console.log(start);
  for(let num = start; num <= end; num++){
    if(num % 5 === 0 && num % 3 === 0){
      console.log('FizzBuzz');
    }
    else if(num % 3 == 0){
      console.log('Fizz');
    }
    else if(num % 5 === 0){
      console.log('Buzz');
    }
    else {
      console.log(num);
    }
    console.log(15);
  }
}

  function uniqueStrings(strings) {
    const strings = ['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'];
    const set = new Set(strings);
    const unique = strings.map((s)=>[...set].sort()
    console.log(strings);
    return unique;

  }}


