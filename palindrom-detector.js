const text = 'malam';

const result = text.split('').reverse().join('')

if (text === result) {
  console.log('palindrom');
} else {
  console.log('bukan palindrom');
}

console.log(result);