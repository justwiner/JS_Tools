let PriorityQueue = (() => {
  const Queue = require('./Queue')
  function QueueElement (element, priority) {
    this.element = element
    this.priority = priority
  }
  class PriorityQueue extends Queue {
    constructor () {
      super()
    }
    
    enqueue (element, priority) {
      let queueElement = new QueueElement(element, priority)
      let added = false
      
    }
  }
  return PriorityQueue
})()
exports = module.exports = PriorityQueue