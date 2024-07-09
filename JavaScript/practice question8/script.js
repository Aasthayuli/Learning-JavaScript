//Question 1
/*Create a function using "function" keyword that takes 
a String as an argument and returns the number of vowels in the String.*/

function retVowels(str) {
  let count = 0;
  for (let char of str) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u" ||
      char == "A"
    ) {
      count++;
    }
  }
  return count;
}

let numofVowels = retVowels("hello");
console.log(`Number of vowels in hello is ${numofVowels}.`);

const arrowFunc=(str)=>{
  let count=0;
  for(let char of str){
    if(
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u" ||
      char == "A" ||
      char == "E" ||
      char == "I" ||
      char == "O" ||
      char == "U"){
        count++;
      }
  }
  return count;
}

let vowels=arrowFunc("aaaaaayfdoqufnvjefivnfjnvefdnvj kdfkdv akjdvnoqir");
console.log(`vowels are: ${vowels}`);
