//Question 1
//create a h2 heading element with text-"Hello JavaScript".
//Append "from Apna College" to this text using JS.

let h2 = document.querySelector("h2"); //accessing the element
h2.innerText = h2.innerText + " from Apna College"; //concatenation

//Question 2
//create 3 divs with common class name-"box".
//Access them & some unique text in each div.

let divs = document.querySelectorAll(".box");
console.log(divs);

for (let i = 0; i < divs.length; i++) {
  divs[i].innerText = divs[i].innerText + `\nAdded unique text${i}`;
}
