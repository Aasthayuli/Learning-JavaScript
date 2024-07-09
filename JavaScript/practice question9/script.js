//Question 1
//For a given number of array of numbers, print the square of each value using the forEach loop

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach((value, idx) => {
  console.log(`${idx} square is:${value * value}`);
});

//or, we can also store our square arrow function in a variable and pass it to forEach function
let sqaure = (value, idx) => {
  console.log(`${idx} square is:${value * value}`);
};

arr.forEach(sqaure);
