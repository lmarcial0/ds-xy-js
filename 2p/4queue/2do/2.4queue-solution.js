/** 
 *
 * your solution here
 *
 */


function cola() {
  this.tamañoDeCola = []
  this.max = 5
  this.full = full
  this.empty = empty
  this.input = input
  this.output = output
  this.show = show
}


function input(element) {
  if (this.full()) {
    console.log("La fila esta llena, elimine elementos")
  }
  else {
    this.tamañoDeCola.push(element)
  }
}

function output() {
  if (this.empty()) {
    console.log("La fila esta vacia, introduzca elementos")
  }
  else {
    this.tamañoDeCola.shift()
  }
}

function full() {
  if (this.tamañoDeCola.length === this.max)
    return true
  else
    return false
}

function empty() {
  if (this.tamañoDeCola.length === 0)
    return true
  else
    return false
}

function show() {
  let show = ""
  for (let i = 0; i < this.tamañoDeCola.length; ++i) {
    show += this.tamañoDeCola[i] + "\n"
  }
  return show
}

let queue1 = new cola();

queue1.input("Oswaldo")
queue1.input("Antonio")
queue1.input("Juan")
queue1.input("Edgardo")
queue1.input("Luisa")

console.log(queue1.show())

queue1.input("Dsfdadsf")

queue1.output()
queue1.output()
queue1.output()
queue1.output()
queue1.output()
queue1.output()

console.log(queue1.show())