//without using built-in Function
const array1 = [10, 29, 11, 43, 37];
let sum1 = 0;
for(let i = 0; i < array1.length; i++) {
  sum1 = sum1 + array1[i];
}
console.log(sum1); // prints 130


//with Using a Higher-Order Function (Reduce)
const array2 = [10, 29, 11, 43, 37];
const sum2 = array2.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sum2); // prints 130
