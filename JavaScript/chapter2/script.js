let a=5;
let b=2;
console.log("a= ",a," & b=",b);
console.log("a+b= ",a+b);;
console.log("a-b= ",a-b);
console.log("a*b= ",a*b);
console.log("a/b= ",a/b);
console.log("a%b= ",a%b);  //modulus
console.log("a**b= ",a**b); //exponentiation

console.log("a++= ",a++); //Increment
console.log("a--= ",a--); //Decrement
//after printing value, post increment and post decrement are performed
console.log("a++= ",a++); //Increment
console.log("a--= ",a--); //Decrement

a++;   //Increment is done
b--;   //Decrement is done
console.log("a++= ",a); //Increment
console.log("a--= ",a); //Decrement

++a;   //Increment is done
--b;   //Decrement is done
console.log("a++= ",a); //printed
console.log("a--= ",a); //printed

//assignment operators
a+=b;  //a=a+b
console.log(a);

let c=5;
let d=2;
c-=d;  //c=c-d
console.log("c= ",c);

let e=5;
let f=2;
e*=f;  //e=e*f
console.log("e= ",e);

let g=5;
let h=2;
g/=h;  //g=g/h
console.log("g= ",g);

let i=5;
let j=2;
i%=j;  //i=i%j
console.log("i= ",i);

let k=5;
let l=2;
k**=l;  //k=k**l
console.log("k= ",k);

//comparison operators
console.log("a==b",a==b);
console.log("a!=b",a!=b);
console.log("a>b",a>b);
console.log("a<b",a<b);
console.log("a>=b",a>=b);
console.log("a<=b",a<=b);

let num1=5;
let num2='5';
console.log("5=='5' ", num1==num2);
console.log("5==='5'", num1===num2);
console.log("5!=='5'", num1!==num2);
console.log("5>'5'", num1>num2);
console.log("5<'5'", num1<num2);
console.log("5>='5'", num1>=num2);
console.log("5<='5'", num1<=num2);

//logical operators
let varA=2;
let varB=4;

let cond1=varA>varB;  //false
let cond2=varA===varB; //false
console.log("cond1 && cond2",cond1 && cond2);
console.log("cond1 || cond2",cond1 || cond2);
console.log("!cond1",!cond1);

//conditional statements
/*if-else*/
let age=18;
if(age>=18){
    console.log("you can vote");
}
else{
    console.log("you cannot vote");
}

/*if statement*/
let mode="dark";
let color;
if(mode==="dark"){
    color="black";
}
if(mode==="light"){
    color="white";
}
console.log(color);

if(mode==="dark") console.log(mode);//prints the value of mode
//one line statement

//ternary operator
let result=age>18?"you can vote":"you cannot vote";
console.log(result);

alert("Hello"); //one time pop-up msg
let msg=prompt("Hello! Enter here something!");//can take some msg too along with msg pop-up
console.log(msg);