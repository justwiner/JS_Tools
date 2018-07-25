const Queue = require('./lib/Queue')

const queue = new Queue()
queue.enqueue(2)
queue.enqueue(4)
queue.enqueue('123123da')
console.log(queue.dequeue())