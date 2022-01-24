const { prompt } = require('enquirer'); // melakukan inisialisasi variabel untuk package enquirer

const reverseSentence = async () => { // inisialisasi fungsi ini untuk meminta jawaban dari user berdasarkan pertanyaan yang dibuat
  let answer;

  // diawali dengan perulangan do while yang akan melakukan pengulangan pertanyaan jika jawaban yang diminta tidak sesuai dengan aturan validasi yang telah dibuat
  do {
    answer = await prompt({ 
      type: 'input',
      name: 'text',
      message: 'Masukan text'
    })
  } while (!validator(answer.text.trim())) // pengecekan kondisi dengan memanggil fungsi validator yang menerima jawaban dari user untuk dilakukan validasi

  const { text } = answer; // jika jawaban tervalidasi maka jawaban disimpan ke dalam variabel text

  const result = mainProcess(text.trim()) // dan jawaban dikirim sebagai parameter ke fungsi mainProcess agar bisa diolah sesuai keperlua dan tidak lupa dipanggil juga fungsi trim() untuk menghindari spasi yang tidak diperlukan serta hasil olahan tersebut akan disimpan ke dalam variabel result

  console.log(result); // isi dari variabel result akan ditampilkan
}

/*=============== validator =============== */
// dalam fungsi validator ini akan menerima parameter input dalam bentuk string dan akan dicek sesuai dengan validasi yg ingin dibuat serta jika tidak tervalidasi akan mengembalikan nilai boolean false dan jika tervalidasi maka akan mengembalikan nilai boolean true
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
//  dalam fungsi ini, paramater yang diterima adalah sebuah string yang akan diproses dengan memisah dengan spasi lalu dibalik menggunakan fungsi reverse dan digabung kembali dengan fungsi join serta mengembalikan hasil dari proses tersebut
const mainProcess = (str) => {
  let sentence = str

  sentence = sentence.split(' ')
  sentence = sentence.reverse()
  sentence = sentence.join(' ')

  return sentence
}

reverseSentence() // fungsi reverseSentence dipanggil untuk dijalankan