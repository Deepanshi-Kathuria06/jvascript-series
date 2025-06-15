// Datatype in javascript

"use strict";  // treat all the js  code as per newer version

// alert("hello world"); // we are using node js, not browser

// make the code readable dont messup with the code 

// ecmaScript 6 (ES6) is the latest version of JavaScript uaiing the standards for the js not the js 

//  documentations MDN, TC39s

// Dtatatypes :-  types of data that can be stored in a variable

let name = "Deepanshi"; // string
let age = 20;  // number 2^53
let isStudent = true; // boolean
let height = 5.5; // float
let hobbies = ["reading", "coding", "travelling"];
let address = { city: "Delhi", state: "Delhi" }; // object
let undefinedVariable; // undefined
let nullVariable = null; // null // object
let symbolVariable = Symbol("unique"); // symbol



/********************** Primitive and Non-primitive *****************/

// # Primitive  (call by value) mean refernece of original value is not given  copy of the value is given changes are done in the copy and original is not changed
// 7 types : String , Number,boolean, null (empty) , undefined , symnol (unique) , BigIntw 

const score = 100 

// # Non primitve  or refernce type
// Array , objects, functions

//   stack memory( primitive )  create the copy of the original and dont change the original one  and heap memory( non primitive)  take the reference of the original  and chnage the original one


// stcak memory (call by value)
// let name1 = "deepanshi"

// let myname = name
//  myname = "Deepanshi Kathuria"

// console.log(name1)
// console.log(myname)


// call by reference

let userone = {
    email: "user1@gmail.com",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "userTwo@gmail.com"

console.log("userone" ,userone)
console.log("usertwo" , usertwo)




