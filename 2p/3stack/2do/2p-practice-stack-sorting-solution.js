var AB = []

var CD = []
function stackSorting(top) {
  this.tamañoDe_Pila = []
  this.top = top
  this.full = full
  this.empty = empty
  this.input = input
  this.output = output
  this.show = show
  this.peek = peek
}


function full() {
  if (this.tamañoDe_Pila.length === this.top)
    return true
  else
    return false
}


function empty() {
  if (this.tamañoDe_Pila.length === 0)
    return true
  else
    return false
}


function input(element) {
  if (this.full()) {
    console.log("La pila esta llena, debes borrar elementos")
  } else {
    this.tamañoDe_Pila.unshift(element)
  }
}

function output() {
  if (this.empty()) {
    console.log("La pila esta vacia, introduce elemetos")
  }
  else {
    return this.tamañoDe_Pila.shift()
  }
}



function show() {
  let show = ""
  for (let i = 0 ; i < this.tamañoDe_Pila.length ; ++i) {
    show += this.tamañoDe_Pila[i] + "\n"
  }
  return show
}


function peek() {
  return this.tamañoDe_Pila[0]
}


function ordenar_stackSorting(x) {
  let pasos = 0;
  for (let j = 1; j <= 5; j++) {
    var start = Date.now()
    let p = new stackSorting(x);
    let s = new stackSorting(x);
    let n, r;
    let i = 1;
    n = Math.floor(Math.random() * (x - 1) + 1)
    p.input(n)
    while (i < x) {
      while (s.empty() != true) {
        p.input(s.output())
        pasos++
      }
      r = Math.floor(Math.random() * (x - 1) + 1)
      while (r <= p.peek() && p.empty() != true) {
        s.input(p.output())
        pasos++
      }
      if (r >= p.peek() || p.empty()) {
        p.input(r)
        pasos++
      }
      i++
    }
    while (!s.empty()) {
      p.input(s.output())
    }
    AB[j - 1] = pasos;
    console.log(p.show())
    console.log("Los pasos que se hicieron en el ciclo " + j + " de " + x + " numeros aleatorios fueron de: " + pasos)
    var end = Date.now()
    CD[j - 1] = end - start
    console.log("El tiempo o milisegundos que se tardo en el ciclo " + j + " de " + x + " fue de: " + CD[j - 1] + "s")
    pasos = 0
  }
}
ordenar_stackSorting(10)
AB[5] = (AB[0] + AB[1] + AB[2] + AB[3] + AB[4]) / (5)
AB[6] = (AB[0] + AB[1] + AB[2] + AB[3] + AB[4])
CD[5] = (CD[0] + CD[1] + CD[2] + CD[3] + CD[4]) / (5)
CD[6] = (CD[0] + CD[1] + CD[2] + CD[3] + CD[4])


console.log("El promedio de pasos fue: " + AB[5])
console.log("Todos los pasos en el programa: " + AB[6])
console.log("El promedio del tiempo total fue: " + CD[5] + "s")
console.log("Total de tiempo: " + CD[6] + "s")
console.log("-5 Ciclos de 10")
//-------------------------------------------------------------
ordenar_stackSorting(100)
AB[5] = (AB[0] + AB[1] + AB[2] + AB[3] + AB[4]) / (5)
AB[6] = (AB[0] + AB[1] + AB[2] + AB[3] + AB[4])
CD[5] = (CD[0] + CD[1] + CD[2] + CD[3] + CD[4]) / (5)
CD[6] = (CD[0] + CD[1] + CD[2] + CD[3] + CD[4])
console.log("El promedio de pasos fue: " + AB[5])
console.log("Todos los pasos en el programa: " + AB[6])
console.log("El promedio del tiempo total fue: " + CD[5] + "s")
console.log("Total de tiempo: " + CD[6] + "s")
console.log("-5 Ciclos de 100")
//-------------------------------------------------------------
ordenar_stackSorting(1000)
AB[5] = (AB[0] + AB[1] + AB[2] + AB[3] + AB[4]) / (5)
AB[6] = (AB[0] + AB[1] + AB[2] + AB[3] + AB[4])
CD[5] = (CD[0] + CD[1] + CD[2] + CD[3] + CD[4]) / (5)
CD[6] = (CD[0] + CD[1] + CD[2] + CD[3] + CD[4])
console.log("El promedio de pasos fue: " + AB[5])
console.log("Todos los pasos en el programa: " + AB[6])
console.log("El promedio del tiempo total fue: " + CD[5] + "s")
console.log("Total de tiempo: " + CD[6] + "s")
console.log("-5 Ciclos de 1000")