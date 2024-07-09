//question 1
//We are given array of marks of the students.Filter out the marks of students who scored 90+.

let marks = [97, 32, 49, 87, 93, 64, 99, 86];
let toppers = marks.filter((val) => {
  return val > 90;
});

console.log(toppers);

//Question2
//Take a number n as an input from the user.create an array of numbers from 1 to n.
//Use the reduce method to calculate the sum of all the numbers in the array.
//Use the reduce method to calculate the product of all the numbers in the array.

let n = prompt("Enter a number");
let array = [];
for (let i = 1; i <= n; i++) {
  array[i - 1] = i; //1(i=0),2(i=1),3(i=2),4(i=3),5(i=4).......n(i=n-1)
}
console.log("Array is ", array);
//calculating sum
let sum = array.reduce((res, val) => {
  return res + val;
});
console.log(`sum is ${sum}`);

//calculating product
let factorial = array.reduce((res, val) => {
  return res * val;
});
console.log(`product is ${factorial}`);
