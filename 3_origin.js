const split = (str, key) => {
  const length = str.length
  let dump = "";
  const result = []

  for(let i = 0; i <= length; i++) {
    if (key === "") {
      if (str[i]) {
        let nextIdx = result.length
        result[nextIdx] = str[i]
      }
    } else if (i === length || str[i] === key) {
      let nextIdx = result.length
      result[nextIdx] = dump
      dump = ""
    } else {
      dump += str[i]
    }
  }

  return result;
}

const join = (arr, separator=null) => {
  const length = arr.length
  let dump = ""

  for(let i = 0; i < length; i++) {
    if (i === 0) {
      dump = arr[i]
    } else if (separator == null) {
      dump += "," + arr[i]
    } else {
      dump += separator + arr[i]
    }
  }

  return dump
}

const sorter = (array) => {
  const arr = array
  const n = arr.length
  console.log(arr, 'sort');
  
  for (let i = 1; i < n; i++)
  { 
    let key = arr[i]; //11
    let j = i - 1; //0

    while (j >= 0 && arr[j] > key)
    {
      arr[j + 1] = arr[j]; 
      j--; 
    }
    arr[j + 1] = key; 
  }
  
  return arr
}

const divideAndSort = (num, separator) => {
  const text = String(num)
  const key = String(separator) || ""
  const arr = split(text, key)
  // const arr = split("text", "")
  let result = ""

  for(let i = 0; i < arr.length; i++) {
    let str = split(arr[i], "")
    str = sorter(str)
    result += join(str, "")
  }

  console.log(Number(result));
}

divideAndSort(5956560159466056, 0)
// const number = 5956560159466056;
// console.log(split('5956560159466056', '0'));
// console.log(split('text', ''));