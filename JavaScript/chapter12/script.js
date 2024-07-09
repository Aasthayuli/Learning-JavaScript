//Fetching API
//shradha khapra

const URL = "https://cat-fact.herokuapp.com/facts";
// let promise = fetch(URL);
// console.log(promise);

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// const getFacts = async () => {
//   console.log("Fetching.....");
//   let response = await fetch(URL);
//   //Generally, we use GET request (for receiving data), for other purposes we have other requests like POST, PUT, DELETE
//   //here, fetch uses GET by default
//   console.log(response); //JSON format
//   //   console.log(response.status);
//   let data = await response.json();
//   console.log(data);
//   console.log(data[1]);
//   console.log(data[1].text);

//   factPara.innerText = data[1].text;
// };
// btn.addEventListener("click", getFacts);

//Doing the same above task using promise chaining but using async-await is better

function getFacts() {
  console.log("Fetching.....");
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data[1]);
      factPara.innerText = data[1].text;
    });
}
btn.addEventListener("click", getFacts);
