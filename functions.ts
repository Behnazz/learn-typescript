function add(n1: number, n2: number) {
  return n1 + n2;
}

//void because it doesn't have return
function printResult(num: number) {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, callback:(num:number)=> void) {
  const result = n1 + n2;
  callback(result)
}
printResult(add(2, 3));

//function type describe a function regarding the parameters and the returning value
let combineValue: (a: number, b: number) => number; //combineValue takes a function that has two parameters with type number and return a number
combineValue = add;

addAndHandle(20, 4, (result) => {
  console.log(result)
})