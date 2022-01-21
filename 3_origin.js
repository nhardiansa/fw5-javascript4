const number = 5956560159466056;
let text = number.toString();
const length = text.length - 1;
let penampung = "";
let hasil = []


for(let i = 0; i <= length; i++) {
  if (i === length) {
    penampung += text[i]
    let idx = hasil.length
    hasil[idx] = penampung
  } else if (text[i] !== '0') {
    penampung += text[i]
  } else {
    let idx = hasil.length
    hasil[idx] = penampung
    penampung = ""
  }
}

const comparator = (val1, val2) => {
  let res = Number(val1) - Number(val2)

  if (res === 0) {
    return null
  } else if (res < 0) {
    return false
  } else {
    return true
  }
}

for(let i = 0; i < hasil.length; i++) {
  let el = hasil[i]
  // for(let j = 0; j < el.length; j++) {
  //   let a = el[j]
  //   let b = el[j+1]
  //   let res = a - b

  //   if(res > 0) {
  //     el[j] = b
  //     el[j+1] = a
  //   }
    
  //   if (res < 0) {
  //     el[j] = a
  //     el[j+1] = b
  //   }
  // }
  el = el.split('').sort().join('')
  // console.log(el);
  hasil[i] = el
}

console.log(Number(hasil.join('')));
// let dump = hasil[0]
// hasil[0] = hasil[1]
// hasil[1] = dump
// console.log(hasil);