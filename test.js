require('./extend/extendObj')

const test = {
  a: null,
  b: 2,
  c: {
    d: null,
    e: 3,
    f: "",
    g: {
      h: null,
      i: 7,
      j: undefined
    }
  }
}

console.log(Object.replaceKeys(test, '-', true))