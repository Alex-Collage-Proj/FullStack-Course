console.log("Fullstack Course");

// alert("Jave Script Test");


// var myNumber = "Number:";

// for (var i = 1; i <= 10; i++) {
//     console.log(myNumber + i + "*6=" + i * 6);
// }
console.log("++++++++++++++XXXXXX++++++++++++++++++");

// console.log(10 % 3);
// console.log(10 + 3);
// console.log(10 == 3);
// console.log(10 == 10);
// console.log(10 == "10");
// console.log(10 * "10");
// console.log(10 ** "3");//hezeka
// console.log(" " + 1 + 2);
// console.log(1 + 2 + " " + 3);

console.log("+++++++++++++++++++++++++++++++++++++++++");

// var n = 0;
// console.log("Start: \n" + ++n);
// console.log("Mid:\n" + n++);
// console.log("Last:\n" + n);

console.log("++++++++++++++XXXXXX++++++++++++++++++");

// var n2 = "2"

// console.log(n == n2)//check regular
// console.log(n === n2) //check data type 2

console.log("+++++++++++++++++++++++++++++++++++++++++");

// var names = ["Jane", "Mark", "Jacob", "Marry", "John", "Sally"];

// names.pop();

// console.log(names);

console.log("++++++++++++++XXXXXX++++++++++++++++++");

// var username = prompt("whats You Name?");
// var flag=1;
// var i=0;

// while (username.length > i) {
//     if (!(username[i] >= 'a' && username[i] <= 'z' || username[i] >= 'A' && username[i] <= 'Z')) {
//         flag = 0;
//         break;
//     }
//     i++;
// }

// i = 0;

// if (flag == 1)
//     while (username.length > i) {
//         console.log(username[i]);
//         i++;
//     }

// if (flag == 1)
//     console.log(username);
// else
//     console.log("wrong")

console.log("+++++++++++++++++++++++++++++++++++++++++");

// console.log("Rendo:");

// var Rrendo = Math.floor(Math.random() * (10) + 1);

// console.log(Rrendo);

console.log("++++++++++++++XXXXXX++++++++++++++++++");

// var shopingList = ["G", "V", "P", "D"];

// for (i = 0; i <= 3; i++)
//     if (shopingList[i] != "V")
//         console.log(shopingList[i]);

//  console.log("Length:"+shopingList.length);

console.log("+++++++++++++++++++++++++++++++++++++++++");

//  var arr1=[1,2,3];
//  var arr2=[1,2,3];
//  var arr3=arr1;

//  console.log(arr1===arr2); //not same cause checking data loc
//  console.log(arr1===arr3);

console.log("++++++++++++++XXXXXX++++++++++++++++++");

// var useList=[
//     { username:"jon", password:"123"},
//     { username:"jon", password:"1234"}
// ]

// console.log(useList[0].username == useList[1].username );


console.log("+++++++++++++++++++++++++++++++++++++++++");

// var fullname = "Abun Nafha";
// var age = 36;
// var email = "abun36@gmail.com";
// var user = {
//     fullname,
//     age,
//     email,
// };

// for (var key in user) {
//     console.log(user[key]);
// }

console.log("++++++++++++++XXXXXX++++++++++++++++++");

// function convertToMs(timeUnit, time) {
//     if (typeof time === "number") {
//         if (timeUnit === "day") {
//             console.log(time * 24 * 60 * 60 * 1000);
//         }
//         else if (timeUnit === "time") {
//             console.log(time * 60 * 60 * 1000);
//         }
//         else if (timeUnit === "minute") {
//             console.log(time * 60 * 1000);
//         }
//         else if (timeUnit === "seconds") {
//             console.log(time1000);
//         }
//         else {
//             console.log("not a valid time unit");
//         }

//     }
//     else {
//         console.log("not a valid number");
//     }

// }

// convertToMs("day", 1);

console.log("+++++++++++++++++++++++++++++++++++++++++");

// function calc(x,y){
//     return {
//         divide:x/y,
//         add: x+y,
//         minus:x-y
//     }
// }

// console.log(calc(3,4).add+calc(3,4).minus +" , "+calc(3,4).add+" "+calc(3,4).divide+" "+calc(3,4).minus);

// console.log("++++++++++++++XXXXXX++++++++++++++++++");

// var validator={
//     checkIf8Characters: function(password){
//         if(typeof password!=="string"){
//             return false;
//         }

//         if(password.length>7){
//             return true;
//         }
//         else{
//             return false;
//         }
//     },   
// };



// var isPasswordValid=validator.checkIf8Characters("122256465");
// console.log(isPasswordValid);

//console.log(10+10+" Hello")


// function calcTriangle(base, height) {
//     if(base===undefined||height===undefined)
// {
//     return "Must Provide All Parameters;"
// }
//     var result = (base * height) / 2;
    
//     return result;
// }

// var s = calcTriangle(10, 5);
// console.log(s);

// console.log(calcTriangle(20, 5));

// console.log(window);

// console.log(this);

console.log("++++++++++++++XXXXXX++++++++++++++++++");


var review = ['Apple', 'Ananas', 'Cherry', 'Banana', 'Apple'];

console.log(review);

review.forEach(function(item, index, object) {
  if (item === 'Apple') {
    object.splice(index, 1);
  }
});

console.log(review);

