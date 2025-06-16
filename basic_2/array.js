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

console.log(myarray[2])

// array declarartion 
 const myfreinds = ["Diya", "Deepanshi"]

 const myarr2 = new Array(1,2,2)

// Array methods

myarr2.push(8) // add value to the array at the end
console.log(myarr2);

