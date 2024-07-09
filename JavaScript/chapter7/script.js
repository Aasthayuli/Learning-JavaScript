//Accessing div
let div = document.querySelector("div");
console.log(div);

//Accessing by attributes
let id = div.getAttribute("id");
console.log(id);

//Accessing by user defined attributes
let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class")); //accessing <p> class attribute
console.log(para.setAttribute("class", "newClass")); //setting <p> class attribute

div.style.backgroundColor = "brown";

//Creating a new Button
let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);

//Inserting the button to the div
//for that, first I have to access that div in which i have to add the button
// let div2 = document.querySelector("div");  already accessed above(do not re comment it out to access!)
// div.append(newBtn); //Adding inside at first div2
// div.prepend(newBtn);    //Adding inside at last div2
// div.before(newBtn);    //Adding outside at first div2
// div.after(newBtn);    //Adding outside at last div2

para.after(newBtn); //adding button after the paragraph

//creating a new element and directly adding it to the existing element without storing the existing element in a variable
let newheading = document.createElement("h1");
newheading.innerHTML = "<i>new Heading</i>";

document.querySelector("body").prepend(newheading);

//removing an existing element(for example, say para)
para.remove();
