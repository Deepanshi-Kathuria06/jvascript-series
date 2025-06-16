// const tinderUser = new Object() // empty , singleton

const tinderUser = {} // non singleton

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser ={
    email: "some@gmail.com",
    fullname : {
       userfullname: {
        firstname: "Deepanshi",
        lastname : "Kathuria"
       }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

const obj3 = Object.assign(obj1, obj2)
console.log(obj3)
