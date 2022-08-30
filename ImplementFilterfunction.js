const array = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (funct) {
  const filtered = []; // it will receive all values that match to condition passed in fn callback.
  for (let index = 0; index < this.length; index++) {
    if (funct(this[index])) {
      filtered.push(this[index]);
    }
  }
  return filtered;
};

const filteredData = array.myFilter(function (number) {
  if (number > 2) return number;
});

// using arrow function
// const filteredData = data.myCustomFilter(el => el > 2);

console.log(filteredData); // output [3,4,5]
