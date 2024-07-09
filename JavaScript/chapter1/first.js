fullName="tony stark";
_fullname="Aasthayuli";
$fullname="aasthayuli";
// 123name="hello";
console.log(fullName);
console.log(_fullname);
console.log($fullname);
var age=29;
var age=56;  //can be re-declared as well as updated
console.log(age);
let Age=45;   //can't be re-declared (within the same block)
Age=23;
console.log(Age);
const PI=3.14; //can't be changed (within the same block)
//and must be initialised upon declaration 
console.log(PI);

// scope

{
    let a=10;
    console.log(a);
}
{
    let a=20;
    console.log(a);
}

{
    const a=10;
    console.log(a);
}

let price=234.566;
console.log(price);
typeof(price); //will not print to console
console.log(typeof(price));  //will print to console

let newprice=-234.566;
console.log(newprice);
console.log(typeof(newprice));  //will print to console

isFollow=true;
console.log(isFollow);
console.log(typeof(isFollow));  

let x;
console.log("x is:",x, "coz x is not initialised.");
console.log("type of x:",typeof(x));

let y=null;
console.log("y is:",y);
console.log( "coz null means there should be something which is not there.");
console.log("type of y:",typeof(y));

//bigInt
let z=BigInt(123);
console.log(z);
console.log(typeof(z));

//symbol
let s=Symbol("hello");
console.log(s);
console.log(typeof(s));

//objects(non-prmitive data type)
const student={
    fullName:"Rahul Kumar",
    age:23,
    cgpa:8.2,
    isPass:true
};
console.log(student);
console.log(typeof(student));
console.log(student.fullName);
console.log(student["fullName"]);

student.age= student.age+1;
console.log(student.age);

student["age"]= student["age"]+1;
console.log(student.age);

console.log(typeof (student.age));
console.log(typeof (student.isPass));