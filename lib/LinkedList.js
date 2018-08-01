let LinkedList = (() => {
    class LinkedList {
        length = 0;
        head = null;
        append (element) {
            let node = new Node(element),
                current;
            if (head === null) {
                head = node
            } else {
                current = head
                while (current.next) {
                    current = current.next
                }
                current.next = node
            }
            length ++
        }
        insert (position, element) {

        }
        removeAt (position) {

        }
        remove (element) {

        }
        indexOf (element) {

        }
        isEmpty () {

        }
        size () {

        }
        getHead () {

        }
        toString () {

        }
        print () {

        }
    }
    class Node {
        constructor(element) {
            this.element = element;
            this.next = null
        }
    }
    return LinkedList
})()

exports = module.exports = LinkedList