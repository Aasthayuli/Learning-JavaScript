//Question 1
//Create a toggle button that changes the screen to dark mode when clicked & light mode when clickes again.

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; //dark

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode);
});

//Question 2
//to add some action listener on mouse hover

// modeBtn.addEventListener("mouseover", () => {
//   if (currMode === "light") {
//     modeBtn.classList.add("btnbg2");
//     modeBtn.classList.remove("btnbg1");
//   } else {
//     modeBtn.classList.add("btnbg1");
//     modeBtn.classList.remove("btnbg2");
//   }
// });
