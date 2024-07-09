fullName=prompt("Enter your full name");

const account={
    sign:"@",
    name:fullName,
    len:fullName.length
};
let res=account.sign+account.name+account.len;
console.log(res);

let newRes="@"+fullName+fullName.length;
console.log(newRes);

let newRes2=`@${account.name}${account.len}`;
console.log(newRes2);