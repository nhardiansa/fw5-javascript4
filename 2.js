const { prompt } = require('enquirer');

const reverseSentence = async () => {
  let answer;

  do {
    answer = await prompt({
      type: 'input',
      name: 'text',
      message: 'Masukan text'
    })
  } while (!validator(answer.text.trim()))

  const { text } = answer;

  const result = mainProcess(text.trim())

  console.log(result);
}

/*=============== validator =============== */
const validator = (input) => {
  if (input === '') {
    console.log('Input tidak boleh kosong');
    return false;
  }

  if (input.length < 2) {
    console.log('Teks terlalu pendek');
    return false;
  }

  if (!input.includes(' ')) {
    console.log('teks minimal 2 kata');
    return false;
  }

  return true
}

/*=============== pemrosesan kalimat =============== */
const mainProcess = (str) => {
  let sentence = str

  sentence = sentence.split(' ')
  sentence = sentence.reverse()
  sentence = sentence.join(' ')

  return sentence
}

reverseSentence()