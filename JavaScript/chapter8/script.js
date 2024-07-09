/*Events in JS*/

let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//   console.log("Button 1 was clicked.");
//   let a = 25;
//   a++;
//   console.log(a);
//   console.log("Event: ", evt);
//   console.log("Event type: ", evt.type);
//   console.log("Event target: ", evt.target);
//   console.log("Click position: ", evt.clientX, evt.clientY);
// };

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//   console.log("Mouse is on div");
//   console.log("Event: ", evt);
//   console.log("Event type: ", evt.type);
//   console.log("Event target: ", evt.target);
//   console.log("Click position: ", evt.clientX, evt.clientY);
// };

/*Event Listeners*/

//To add an Event Listener
btn1.addEventListener("click", () => {
  console.log("Button 1 was clicked.-Handler 1");
});

btn1.addEventListener("click", (evt) => {
  console.log("Button 1 was clicked.-Handler 2");
  console.log("Event: ", evt);
  console.log("Event type: ", evt.type);
  console.log("Event target: ", evt.target);
  console.log("Click position: ", evt.clientX, evt.clientY);
});

const handler3 = () => {
  console.log("Button 1 was clicked.-Handler 3");
};
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
  console.log("Button 1 was clicked.-Handler 4");
});

//to remove the Event Listener, say handler3
btn1.removeEventListener("click", handler3);
