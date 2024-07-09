/* Loops in JavaScript*/

//for loop
// for(let count=1;count<=10000;count++){
//     console.log("Hello JS!");
// }
// console.log("Loop has ended!");

for(let count=1;count<=5;count++){
    console.log("Hello JS!");
    console.log("count= ",count);
}
console.log("Loop has ended!");

let sum=0;
for(let i=1;i<=5;i++){
    sum+=i;
}
console.log(sum);

for(var j=1;j<=5;j++){
    console.log("Hello JS!");
}
console.log(j); 
//var is global. So, can be printed out of the scope of the loop 

//while loop
let i=1;
while(i<=10){  //loops run only if the condition is true
    console.log("i=",i);
    i++;
}
console.log("Loop has ended!");
//do-while loop
i=1;
do{
    console.log("i=",i);
    i++;
}while(i<=10); //condition is checked at last 
//so, at least once the loop runs.

//for-of loop
let str="Hello world";
for(let char of str){
    console.log(char);
}

const student={
    fullName:"rahul kumar",
    class:10,
    rollNo:1,
    marks:100
};
for(let key in student){
    console.log(key);
}
for(let key in student){
    console.log(student[key]);
//here, this time double quotes is not required coz key is already a variable
}

/*Strings in JS */
 let str1="Hello world";
 let str2='Hello JS';
 console.log(str1);
 console.log(str2);
 console.log(str1[8]);
 console.log(str1.length);

 //Template literals
 let sentence=`This is a template literal`;
 console.log(sentence);
 console.log(typeof sentence);
 console.log(sentence.length);
 console.log(sentence[5]);
 console.log(sentence.indexOf("is"));
 console.log(sentence.split("a"));
 console.log(sentence.split(" ").length);
 console.log(sentence.slice(3,9));
 console.log(sentence.slice(3));//prints upto last
 console.log(sentence.substring(3,9));
 console.log(sentence.substr(3,8));
 console.log(sentence.toUpperCase());
 console.log(sentence.toLowerCase());
 console.log(sentence.trim());

 let obj={
    item:"pen",
    price:10,
    quantity:5,
    total:50
 };
 console.log("Item:",obj.item,"Price:",obj.price,"Quantity:",obj.quantity,"Total:",obj.total);
 let output2=`Item:${obj.item} Price:${obj.price} Quantity:${obj.quantity} Total:${obj.total}`;
 console.log(output2);

 let specialString=`hello! See the use of backticks ${1+2+3}`;
 console.log(specialString);

 let string1="hello\nworld";
 console.log(string1);
 console.log(string1.length);
 
 let string2="hello\tworld";
 console.log(string2);
 console.log(string2.length);

 let mystr="      hello ji!!!   ki haal  chaal!!!      "
 console.log(mystr.trim()); //trims whitespaces from start and end
str1.concat(str2);
console.log(str1);//doesn't change original string
str1=str1.concat(str2);//changes original string
console.log(str1);
let res=str1+str2;//it also concatenates
console.log(res);

let newStr="IloveJS";
newStr[0]='s';//will not the string
console.log(newStr);