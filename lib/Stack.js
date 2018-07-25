let Stack = ( function () {
  const items = new WeakMap();
  class Stack {
    constructor () {
      items.set(this, [])
    }
    push (element) {
      let item = items.get(this)
      item.push(element)
    }
    pop () {
      let item = items.get(this)
      return item.pop()
    }
    peek () {
      let item = items.get(this)
      return item[item.length - 1]
    }
    isEmpty () {
      let item = items.get(this)
      return item.length === 0
    }
    clear () {
      items.set(this, [])
    }
    size () {
      let item = items.get(this)
      return item.length
    }
    all () {
      return items.get(this)
    }
  }
  return Stack
} )()

exports = module.exports = Stack