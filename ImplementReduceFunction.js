Array.prototype.myReduce = function (callback, initialValue) {

        // Variable that accumulates the result after performing operation one-by-one on the array elements
        let accumulator = initialValue;
        for (let index = 0; index < this.length; index++) {
            if (accumulator) {
                accumulator = callback.call(undefined, accumulator, this[index], index, this);
            }else {
                accumulator = this[index];
            }
        }
        return accumulator;
    }

    // Code to calculate sum of array elements using our own reduce method
    const arr = [1, 2, 3, 4];
    console.log(arr.myReduce((total, elem) => total + elem));
