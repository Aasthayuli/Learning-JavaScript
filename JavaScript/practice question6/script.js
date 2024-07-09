//Question 1
//For a given array with marks of students->[85,97,44,37,76,60].
//Find the average marks of entire class

let marks = [85,97,44,37,76,60];
let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum+=marks[i];
// }
// let avg=sum/marks.length;

// for(let mark in marks){
//     sum+=marks[mark];
// }
// let avg=sum/marks.length;

for(let mark of marks){
    sum+=mark;
}
let avg=sum/marks.length;
console.log(`The average marks of the class is:${avg}`);


//Question2
//For a given array of prices of 5 items->[250,645,300,900,50]
//All items hav an offer of 10% OFF on them.
//Change the array to store final price after applying offer

let prices=[250,645,300,900,50];
for(let i in prices){
    prices[i]-=prices[i]*0.1;
}
console.log(prices);

//or
let items=[250,645,300,900,50];
let i=0;
for(let val of items){
    let offer=val*0.1;
     val-=offer;
     items[i]=val;
     i++;
}
console.log(items);