// 1.Create variables for a first name, last name, and age. Apply camelCase naming convention .
// let firstName = "Afzal";
// let lastName = "Malik";
// let age = 18;

// 2.What will the following code output?

// console.log(typeof 42);       // Output: Number
// console.log(typeof 'Hello');     // Output: String
// console.log(typeof true);        // Output: Boolean
// console.log(typeof { name: "John" }); // Output: Object
// console.log(typeof [1, 2, 3]); // Output: object

// 3.Create two variables, a and b, and assign them values. Use the > and < operators to compare a and b. Log whether a is greater than, less than, or equal to b.

// let a = 10
// let b = 20

// if (a > b) {
//     console.log( "a is greater than b" + );
// } else if (a < b) {
//     console.log( "a is less than b" );

// } else {
//     console.log( "a is equal to b" );
// }

// 4.Create a variable value and assign it a numeric value. Use the pre-increment (++value), post-increment (value++), pre-decrement (--value), and post-decrement (value--) operators. Log the value of value before and after each operation.

// let value = 7;
// console.log(++value); // 8
// console.log(value); // 8
// console.log(value++); // 8
// console.log(value); // 9
// console.log(--value); // 8
// console.log(value); // 8
// console.log(value--); // 8
// console.log(value); // 7

// 5.Assign `a = 15` and `b = 20`. Log whether `a` is greater than, less than, or equal to `b`.
// let a = 15;
// let b = 20;
// if (a > b) {
//   console.log("a is greater than b");
// } else if (a < b) {
//   console.log("a is less than b");
// } else {
//   console.log("both are equal");
// }

// 6.Assign `age = 22`. Use a ternary operator to log `'Adult'` if `age` is 18 or older, and `'Minor'` otherwise.
// let age = 22;

// console.log(age >= 18 ? "Adult" : "Minor"); // Output: Adult

// 7. print pyramid pattern
//      *
//     ***
//    *****
//   *******
// let n = 4;
// let m = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "";

//   for (let j = 1; j <= m - i; j++) {
//     str += "  ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     str += "* ";
//   }
//   console.log(str);
// }

// 8.Write code that checks if the variable `num` is even or odd. num value is taken by user Print "Even" if it is even, and "Odd" if it is odd.

// let number = parseInt(prompt("Enter number"));

// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// 9.Write code that checks the variable `score` and prints a grade based on the following criteria:
//  - "Excellent" for scores 90 and above
//  - "Good" for scores between 70 and 89
//  - "Needs Improvement" for scores below 70

let score = 85;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Good");
} else {
  console.log("Needs Improvement");
}
