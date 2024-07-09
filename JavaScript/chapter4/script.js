let marks=[23,45,67,65,23,56];
console.log(marks);
console.log(marks.length);

let heroes=["superman","batman","wonderwoman"];
console.log(heroes.length);
console.log(marks[0]);
console.log(marks[6]);//undefined
marks[6]=100; //we can append any value in array(mutable)
console.log(marks);
marks[0]=12;//we can replace any value in array(mutable)
console.log(marks);

//looping over array
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

//for-in loop
for(let i in marks){
    console.log(marks[i]);
}

//for-of loop
for(let i of heroes){
    // console.log(heroes[i]);  wrong way
    console.log(i);
}

let cities=["delhi","mumbai","chennai","kolkata","hyderabad"];

for( let city of cities){
    console.log(city);
    console.log(city.toUpperCase());
}

//Array methods
/* 
push():-add to end (and returns the updated length in console)
pop():-delete from end and return
toString:-converts array to string
concat():-join multiple arrays and returns new result
unshift():-add to start
shift():-delete from start and return
slice(startIdx,endIdx):-returns a piece of array and doesn't change the original array
splice(startIdx,delcount,newEle1,newEle2,...):-change the original array(add, remove, replace)
*/
 
let foodItem=["pizza","pasta","biryani"];
console.log(foodItem);
foodItem.push("burger");
console.log(foodItem);
foodItem.push("chips","kurkure","noodles");
console.log(foodItem);
foodItem.pop();
console.log(foodItem);


let deletedItem=foodItem.pop();
console.log(foodItem);
console.log("Deleted item is: ",deletedItem);

//toString()
console.log(foodItem.toString());
let newStr=foodItem.toString();
console.log(typeof newStr);

let numbers=[23,45,67,65,23,56];
let myStr=numbers.toString();
console.log(myStr);
console.log(typeof myStr);

//concat()
let marvelHeroes=["ironman","hulk","thor"];
let dcHeroes=["batman","wonderwoman","aquaman"];
let indianHeroes=["Shaktiman","Krishh"];
let Heroes=marvelHeroes.concat(dcHeroes,indianHeroes);
console.log(Heroes);

//unshift()
Heroes.unshift("Spiderman");
console.log(Heroes);

//shift()
let deletedHero=Heroes.shift();
console.log(Heroes);
console.log(`${deletedHero} is deleted!`);

//slice()
console.log(Heroes.slice(1,3));

//splice()
console.log(Heroes.splice(2,2));
console.log(Heroes.splice(2,2,"antman","spiderwoman"));
console.log(Heroes);

console.log(Heroes.splice(1));
console.log(Heroes);