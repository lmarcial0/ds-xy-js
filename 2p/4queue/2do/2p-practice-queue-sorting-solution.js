var AB = []
var CD = []

function queueSorting(top) {
  this.Tamaño_Fila = []
  this.top = top
  this.full = full
  this.empty = empty
  this.input = input
  this.output = output
  this.show = show
  this.peek = peek
}


function full() {
  if (this.Tamaño_Fila.length === this.top)
    return true
  else
    return false
}

function empty() {
  if (this.Tamaño_Fila.length === 0)
    return true
  else
    return false
}



function input(element) {
  if (this.full()) {
    console.log("Su cola esta full, elimine datos")
  } else {
    this.Tamaño_Fila.push(element)
  }
}

function output() {
  if (this.empty()) {
    console.log("Su cola esta empty, introduzca datos")
  }
  else {
    return this.Tamaño_Fila.shift()
  }
}

function show() {
  let show = ""
  for (let i = 0; i < this.Tamaño_Fila.length; ++i) {
    show += this.Tamaño_Fila[i] + "\n"
  }
  return show
}

function peek() {
  return this.Tamaño_Fila[0]
}





function ord_queueSorting(x) {
  let pasos = 0;
  for (let j = 1; j <= 5; j++) {
    var start = Date.now()
    let f = new queueSorting(x);
    let q = new queueSorting(x);
    let n, r;
    let i = 1;
    n = Math.floor(Math.random() * (x - 1) + 1)
    f.input(n)
    while (i < x) {
      r = Math.floor(Math.random() * (x - 1) + 1)
      while (f.empty() != true) {
        q.input(f.output())
        pasos++
      }
      while (r > q.peek()) {
        f.input(q.output())
        pasos++
      }
      if (q.empty()) {
        f.input(r)
        pasos++
      }
      if (r <= q.peek()) {
        f.input(r)
        pasos++
      }
      while (q.empty() != true) {
        f.input(q.output())
      }
      i++
    }
    AB[j - 1] = pasos;
    console.log(f.show())
    console.log("Los pasos en el ciclo " + j + " de " + x + " numeros aleatorios son: " + pasos)
    var end = Date.now()
    CD[j - 1] = end - start
    console.log("El tiempo requerido en el ciclo " + j + " de " + x + " numeros aleatorios son: " + CD[j - 1] + "s")
    pasos = 0
  }
}



ord_queueSorting(10)
AB[5] = (AB[0] + AB[1] + AB[2] + AB[3] + AB[4]) / (5)
AB[6] = (AB[0] + AB[1] + AB[2] + AB[3] + AB[4])
CD[5] = (CD[0] + CD[1] + CD[2] + CD[3] + CD[4]) / (5)
CD[6] = (CD[0] + CD[1] + CD[2] + CD[3] + CD[4])
console.log("El promedio de los pasos en el programa fue de: " + AB[5])
console.log("Total de Pasos: " + AB[6])
console.log("El promedio de tiempo total es: " + CD[5] + "s")
console.log("Total de tiempo: " + CD[6] + "s")
console.log("-5 Ciclos de 10")
//-------------------------------------------------------------
ord_queueSorting(100)
AB[5] = (AB[0] + AB[1] + AB[2] + AB[3] + AB[4]) / (5)
AB[6] = (AB[0] + AB[1] + AB[2] + AB[3] + AB[4])
CD[5] = (CD[0] + CD[1] + CD[2] + CD[3] + CD[4]) / (5)
CD[6] = (CD[0] + CD[1] + CD[2] + CD[3] + CD[4])
console.log("El promedio de los pasos en el programa fue de: " + AB[5])
console.log("Total de Pasos: " + AB[6])
console.log("El promedio de tiempo total es: " + CD[5] + "s")
console.log("Total de tiempo: " + CD[6] + "s")
console.log("-5 Ciclos de 100")
//-------------------------------------------------------------
ord_queueSorting(1000)
AB[5] = (AB[0] + AB[1] + AB[2] + AB[3] + AB[4]) / (5)
AB[6] = (AB[0] + AB[1] + AB[2] + AB[3] + AB[4])
CD[5] = (CD[0] + CD[1] + CD[2] + CD[3] + CD[4]) / (5)
CD[6] = (CD[0] + CD[1] + CD[2] + CD[3] + CD[4])
console.log("El promedio de los pasos en el programa fue de: " + AB[5])
console.log("Total de Pasos: " + AB[6])
console.log("El promedio de tiempo total es: " + CD[5] + "s")
console.log("Total de tiempo: " + CD[6] + "s")
console.log("-5 Ciclos de 1000")