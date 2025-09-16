let y = 100 //global variable
let sum = 5
sum = 2
function getScore(x) {
//   let y = 10 //local variable
  //global function
  let mid = 40
  let final = 30
  function doSomething() {
    return `dosomething: ${y + sum + x + mid + final}`
    //83
    //y (global),sum(global), y (local), x(local (parameter)) mid (local), final (local)
    
  }
  doSomething()
  return mid + final + x + y + sum
}
const score = getScore(1)
console.log(score)
// console.log(x, mid, final) //cannot access

const z = 1
function makeAdder(x){
  console.log(x)
  // console.log(y) // y is not defined
  console.log(z)
  return function doSomething(y) {
    return x + y + z
  }
}
const result = makeAdder(10)
console.log(typeof result)
console.log(result(3))

/// Practice-1
function idGenerator(){
  let idcount = 0
  function generator(){
    return idcount += 1
  }
  return generator
}

const idGen = idGenerator()

console.log(idGen()) // 1
console.log(idGen()) // 2
console.log(idGen()) // 3


///Practice-2

function outerFunction(x){
   return function innerFunction(y){
    return x + y
   }
}

const addFive = outerFunction(5)
console.log(addFive(3)) //8

const addTen = outerFunction(10)
console.log(addTen(2)) //12

