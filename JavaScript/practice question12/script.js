//Question 1
//create a new button element.
//Give it a text "click me", background colour of red and text colour of white.
//Insert the element as the first element inside the body tag.

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);

//Question 2

let para = document.querySelector("p");

// para.setAttribute("class", "newClass");
//changes the previous class CSS(as it changed the font colour to black again)
//So,It is not preferred.

//adding the new attribute using classList
para.classList.add("newClass"); //(Better way)

//To remove the existing element property(CSS)
para.classList.remove("content");
