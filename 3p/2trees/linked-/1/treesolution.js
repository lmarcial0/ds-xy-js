//
// ES5 tree
// imports
// preorder
//

function Node(o){
    this.d=o//bject<->data
    this.l=null//eft
    this.r=null//ight
}

let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node("/")
let q1 = new Node(2)
let q2 = new Node(7)

p.l = o1
p.r = o2

preorder(p)