// singleton  declare as the literal and if constructore it is singleton


// object literals
// Object.create construcctor it contains a singleton object
const user  = {} // empty object
const mySum =  Symbol("key1")

const JsUser = {
    name : "Deepanshi", // can acces throughh key or value
    age : 20,
    location : "delhi",
    email : "deepanshi@google.com",
    isLoggedIn: false,
    lasrLoginDays: ["monday" , "saturay"],
    "full name": "Deepanshi Kathuria", // only one way to acces the this square notation
     [mySum] : "myKey1" // as a symbol
}

// access the objects

// console.log(JsUser.email)
// console.log(JsUser["email"]) // returns as a string

// console.log(JsUser["full name"])


//console.log(JsUser[mySum])

JsUser.email = "deepanshi@gpt.com" //  update
// Object.freeze(JsUser) // freeze the object no chnages occur after this
JsUser.email = "deepanshi@amzon.com" //  update
//console.log(JsUser) //returns the previous one beacuse ini the above we freez the object so that no changes occure

 JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greeting2 = function(){
    console.log(`Hello Js user , ${this.name}`);
}

console.log(JsUser.greeting); // returns undefined , function refernce not return , fn anonymous
console.log(JsUser.greeting()) // returns output


