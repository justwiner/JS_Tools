let Queue = (() => {
  const items = new WeakMap()
  class Queue {
    constructor () {
      items.set(this, [])
    }
    enqueue (element) {
      let item = items.get(this)
      item.push(element)
    }
    dequeue () {
      let item = items.get(this)
      return item.shift()
    }
    front () {
      let item = items.get(this)
      return item[0]
    }
    isEmpty () {
      let item = items.get(this)
      return item.length === 0
    }
    size () {
      let item = items.get(this)
      return item.length
    }
    all () {
      return items.get(this)
    }
  }
  return Queue
})()

exports = module.exports = Queue