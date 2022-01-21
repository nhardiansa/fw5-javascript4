// const number = BigInt(98123037221069457)
const number = 5956560159466056

const text = number.toString().split('0')

const result = text.map(e => {

  let text = e.split('')
  text = text.sort()
  text = text.join('')

  return text
})

const fin = parseInt( result.join('') )

console.log(fin);