const { prompt } = require('enquirer');

const palindromDetector = async () => {
  let answer;

  do {
    answer = await prompt({
      type: 'input',
      name: 'text',
      message: 'Masukan text'
    })
  } while (!validator(answer.text.trim()))

  const { text } = answer;

  const result = text.split('').reverse().join('')

  if (text === result) {
    console.log('palindrom');
  } else {
    console.log('bukan palindrom');
  }
}

/*=============== validator input =============== */
const validator = (input) => {
  if (input === '') {
    console.log('Masukan huruf atau angka');
    return false;
  }

  if (input.length < 2) {
    console.log('Teks terlalu pendek');
    return false;
  }

  return true
}

// const askQuestion = async (type, question) => {
//   try {
//     let answer
//     do {
//       answer = await prompt({
//         type: type,
//         name: 'text',
//         message: question
//       })

//     } while (!validator(answer.text))

//     console.log(answer);

//     return answer;
//   } catch (err) {
    
//   }
// }

palindromDetector()