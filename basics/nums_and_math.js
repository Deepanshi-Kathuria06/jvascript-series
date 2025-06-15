const score = 400.// automatically defined number, return number type
const balance = new Number(400) // explicity defined datatatype , return object type

// console.log(typeof score)
// console.log(typeof balance)

// console.log(balance.toString()) // rteurn as a string now
// console.log(balance.toString().length) // after string get some extra string functions also

//console.log(balance.toFixed(3)) // get specified number of zeros used in ecommerce website , returns 400.00

const newnumber = 23.8999

//console.log(newnumber.toPrecision(5)) // values between i to 21 and returns as a string

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')) // it return a big number with commas easy representation of a number

 // ++++++++++++++++ Maths +++++++++++

//  console.log(Math) // object with properties 
//  console.log(Math.abs(-4))// returns in positive and if positive it returns n the same 
//  console.log(Math.round(4.8)) // return round off value , 4
//  console.log(Math.ceil(4.2)) // return upper value
//  console.log(Math.floor(4.9)) // return lower value
//  console.log(Math.min(4,3,6,8)) // return min value
//  console.log(Math.max(3,2,5,6)) // return max value

  console.log(Math.random()) // always betweem 0 and 1 
  console.log((Math.random() * 10) +  1) 

  const min = 10
  const max = 20

  console.log(Math.floor(Math.random() * (max - min + 1)))
  console.log(Math.floor(Math.random() * (max - min + 1))+ min)




 
