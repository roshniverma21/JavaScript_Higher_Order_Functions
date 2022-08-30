Array.prototype.myForEach = function(number) {
     for(let index=0; index<this.length; index++) {
         number(this[index], index)
     }
};

[1,2,3,4,5].myForEach(function(val, i){
    console.log(val);
});
