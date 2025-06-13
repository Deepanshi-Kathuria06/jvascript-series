// greater thaan
// they are easy 
// console.log(2>3);
// console.log(2>=3);
// console.log(2<3);
// console.log(2<=3);
// console.log(2==3);
// console.log(2!=3);


// comparisons with diff datatypes

// console.log("2" > 1) // make sure that the datatypes hould be same on comparison
// console.log("02" > 1)

// console.log(null > 0)// false (value get converted)
// console.log(null == 0) // false
// console.log(null >= 0) // true
// console.log(null > 0)

// thw reason is that an equality check == and  comparisons > < >= <= works diiferently comparisons convert null to number, treating it as 0  that's why (3) null>=0 and (4) null > 0 false


// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false
// console.log(undefined <= 0); // false

// === check value and type of values

console.log("2" == 2) // true
console.log("2" === 2) // false
