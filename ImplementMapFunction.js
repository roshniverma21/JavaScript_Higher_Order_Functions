
Array.prototype.myMap = function(callback) {
  let newArray = [];
  let arraySize = this.length;
  for (let index = 0; index < arraySize; index++) {
    let counter = callback(this[index]);
    newArray.push(counter);
  }
  return newArray;
};

//with implementated map function
let array = [70, 80, 90];
array = array.myMap(i => i * 2);
console.log(array); // prints [ 140, 160, 180 ]
