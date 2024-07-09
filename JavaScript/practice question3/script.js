
//Question 1
let msg=prompt("Enter a number here:");
if(msg%5==0){
    console.log(msg," is entered and is multiple of 5.");
}
else{
    console.log(msg," is entered and is not multiple of 5.");
}

//Question2

let score=90;
let Grade;
if(score>=90 && score<=100){
    Grade= 'A';
}else if(score>=70 && score<90){
    Grade= 'B';
}else if(score>=60 && score<70){
    Grade= 'C';
}else if(score>=50 && score<60){
    Grade= 'D';
}else if(score<50){
    Grade= 'F';
}
console.log(Grade);