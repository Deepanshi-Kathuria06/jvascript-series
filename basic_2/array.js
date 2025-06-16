// arrays

// js arrays are resizable and can contain a mix of diff datatypes
// JavaScript:
// Arrays can store elements of different data types within the same array (e.g., numbers, strings, objects, even other arrays).
// C++:
// Arrays are typically homogeneous; they can hold only elements of the same data type. 
// 2. Size:
// JavaScript:
// Arrays are dynamic. Their size can grow or shrink as needed during runtime. You don't need to specify a size when creating an array.
// C++:
// Arrays usually have a fixed size that must be specified at compile time. Once declared, their size cannot be changed. C++ std::vector is a dynamic array alternative.
// 3. Memory Allocation:
// JavaScript:
// Arrays are objects and are not stored in contiguous memory locations. They are sparse, meaning they can have gaps between elements. Memory is allocated only for the existing elements.
// C++:
// Arrays are stored in contiguous memory locations. This makes accessing elements by index very efficient. 
// 4. Implementation:
// JavaScript:
// Arrays are implemented as objects with special properties like length. Modern JavaScript engines often try to use contiguous memory when possible.
// C++:
// Arrays are built-in data structures that are directly associated with memory locations. 
// 5. Usage:
// JavaScript:
// Arrays are often used for general-purpose data storage, including lists of items, collections of objects, and as a basic building block for other data structures.
// C++:
// Arrays are used when you need a fixed-size collection of elements of the same type, and you need to optimize for memory access and performance.
// 6. Array Operations:
// JavaScript:
// JavaScript provides built-in methods for common array operations like sorting, searching, adding, and removing elements.
// C++:
// C++ arrays require manual implementation of many operations, although the standard library provides algorithms for common tasks.


// shallow copy -- same refernce point 
// deep copy -- do not share the same refernce point

const myarray = [1,2,3,4,5,6]

// console.log(myarray[2])

// array declarartion 
 const myfreinds = ["Diya", "Deepanshi"]

 const myarr2 = new Array(0,1,2,3,4,5,6)

// Array methods

// myarr2.push(8) // add value to the array at the end
// myarr2.pop();

// myarr2.unshift(9); // insert at the starting of the array 3
// myarr2.shift() // same as pop
// console.log(myarr2);

// myarr2.pop()

// console.log(myarr2.includes(4)) // retruns false and true boolean value
// console.log(myarr2.indexOf(2)); // returns  -1 if not  there  and returns index number if there 


// const newArr = myarr2.join();
// console.log( typeof newArr) // same output but returns type as a string
// console.log(myarr2) // same output

// slice , splice

// console.log("A" , myarr2)

// const myn1 = myarr2.slice(1,3) /// not include last number
// console.log(myn1);
// console.log("B" , myarr2)

// const myn2 = myarr2.splice(1,3) // includes last number, also change the original array
// console.log("B" , myarr2)
// console.log(myn2);

// const marvel_heros = ["thor" , "Ironman" , "spiderman"]
// const dc_heros = ["superman" , "flash" , "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros); // create a jagged array means create a array of array

//console.log(marvel_heros[3][1]) // acces the array element  
const arr1 = ["thor" , "Ironman" , "spiderman"]
const arr2 = ["superman" , "flash" , "batman"]

const myarr = arr1.concat(arr2) // combine two or more array not in the form of jagged array returns new array
// console.log(myarr)

//spread operator

const all_new_heros = [...arr1,...arr2]
// console.log(all_new_heros) // same work as of concatinate

const another_array = [1,2,3, [4,5,6], 7,[6, 7, [4,5]]]
const real_another_array = another_array.flat(Infinity) // returns a jagged array into the single array

// console.log(real_another_array)

  




