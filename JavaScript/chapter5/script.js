/* Functions in JS:-Block of code that performs some specific task, can be invoked anywhere needed.*/
//Advantages: Reduces redundancy
// console.log("Hello!");//in-built functions
// [1,2,3,4].push(5);//in-built functions
// "abc".toUpperCase();//in-built functions

//Function definition
// function functionName(){
//     //do some work code
// }

//function call
// functionName();

//function functionName(param1, param2,....){
//  //do some work code
// }

/*EXAMPLES*/
function myfunction() {
  console.log("Hello World");
  console.log("Hello India");
  console.log("Hello USA");
}

myfunction(); //function call

function func(msg) {
  console.log(msg);
}

func("Hello my function is printing!");

function sum(x, y) {
  // x and y (parameters of functions)are local varaibles!
  console.log(`sum of ${x} and ${y} is ${x + y}`);
}
sum(23, 56);

function retFunc(x, y) {
  s = x + y;
  return s;
}
let mySum = retFunc(23, 56);
console.log(mySum);

/*
function sum(x,y){
add=x+y;
console.log("Before return statement"); //It will run
return add;
console.log("After return statement");//It will never run coz it is after return statement
}
*/

//Arrow Functions:-compact way of writing a function(part of modern JavaScript)

/* const functionName=(param1, param2,....)=>{
    //do some work code
}*/

/* EXAMPLES*/
// (a,b)=>{
//     console.log(a+b);
// };//It is a function but will not work untill it is stored in a variable

const arrowSum = (a, b) => {
  return a + b;
};
console.log(arrowSum(23, 56));

const arrowMul = (x, y) => {
  return x * y;
};

console.log(arrowMul(4, 5));

const printHello = () => {
  console.log("hello!");
};
printHello();

//forEach loop in Arrays
//arr.forEach(callBackFunction)
//callBackFunction: It is a function to execute for each element in the array
//A callBackFunction is passed as an argument to the forEach() method(a higher order function)
//A higher order function/method is the one which either takes another function as parameter or return it.
//JavaScript has this special property that a function can be passed as a parameter to another function

/*EXAMPLES*/
let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {
  //val is passed to item at each index in arr
  console.log(val);
}); //but here, we generally pass arrow function

arr.forEach((val) => {
  console.log(val);
});

//parameters available for forEach() method:-val, index, arr
// val prints each item in the array
// index prints the index of each item
// arr prints the entire array
let cities = ["mumbai", "delhi", "banglore"];
cities.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
});

//some more array methods
//map():-creates a new array with the results of some operation.
//The value its callback returns are used to form a new array.
//syntax:-arr.map(callBackFunction(value,index,array))

let myArray = [1, 2, 3, 14, 45, 66, 74, 56];

myArray.map((val) => {
  console.log(val);
});

//new array of square of the values
let myArray2 = myArray.map((val) => {
  return val * val;
});
console.log(myArray2);

//filter():-Creates a new array of elements that give true for a condition/filter
//e.g.,all even elements
let newArr = [1, 2, 3, 45, 6, 43, 57, 78];
let evenArray = newArr.filter((val) => {
  return val % 2 == 0;
});
console.log(evenArray);
//original array remains unchanged
console.log(newArr);

//reduce():-performs some operation & reducesthe array to a single value.
//It returns that single value.
//reduce(result,currentValue)

let array1 = [1, 2, 3, 4, 5];
const output = array1.reduce((idxPrev, idxnext) => {
  return idxPrev + idxnext; //the sum stores in the idxPrev
});
//idxNext is updated to next index each time(after each sum) where it starts from idxPrev(index 0) and idxNext(index 1)
console.log(output);

//Another example
let array2 = [5, 6, 2, 13, 4];
const output2 = array2.reduce((idxPrev, idxnext) => {
  return idxPrev > idxnext ? idxPrev : idxnext;
  //The value of this ternary operator is stored in idxPrev
});

console.log(output2);
