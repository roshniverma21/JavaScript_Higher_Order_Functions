//array.map(function(currentValue, index, arr), thisValue)

//Without built-in function
const array1 = [10, 20, 30];
const newArray = [];
for(let i = 0; i < array1.length; i++) {
  newArray.push(array1[i] * 2);
}
console.log(newArray);// prints [ 20, 40, 60 ]

//with Using a Higher-Order Function (Map)
let array2 = [40, 50, 60];
array2 = array2.map(i => i * 2);
console.log(array2); // prints [ 80, 100, 120 ]
