/*DOM- (part-1)*/
// let heading = document.getElementById("heading");
// console.log(heading);

let heading_class = document.getElementsByClassName("heading-class");
console.log(heading_class);
console.dir(heading_class);

let para = document.getElementsByTagName("p");
console.log(para);

let elements = document.querySelector("p");
console.dir(elements);

let firstElement = document.querySelector(".heading-class"); //class name should start with dot(.)
console.dir(firstElement);

let secondElement = document.querySelectorAll(".heading-class");
console.dir(secondElement);

let button = document.querySelector("#btn"); //id name should start with #
console.dir(btn);

console.log(button.tagName);
console.log(firstElement.tagName);
console.log(firstElement.tagName);

let div = document.querySelector("div");
console.log(div);
// console.log(document.querySelector("div").children);

let heading = document.querySelector("h1");
console.log(heading);
