import { Linked, Node } from '../../../../lomv/linked/node5es.js'
let Node1 = new Node('a')
let Node2 = new Node('b')

let l = new Linked(Node1)
l.prepend(Node2)
l.append(new Node('c'))
l.prepend(new Node('d'))
l.traverse(l.getHead())

console.log(l.contains('a'))
console.log(l.contains('z'))

console.log(l.getTail())