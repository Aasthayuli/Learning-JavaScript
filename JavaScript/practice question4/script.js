//Question1
//print all even numbers from 0 to 100

for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

//Question2
//create a game where u start with any random game no.
//Ask the user to keep guessing the no. until the user enters the correct the correct no.
// let gameno=45;
// let guess;
// do{
//     guess=prompt("Enter your guess");
//     if(guess==gameno){
//         alert("You won");
//         break;
//     }
// }while(guess!=gameno);


let gameNum=45;
let userNum=prompt("Enter your number:");
while(userNum!=gameNum){
    userNum=prompt("You guessed wrong. Enter your number again: ");
}
console.log("Congratulations! You guessed the correct number.");