Array.prototype.Square = function(){

    for(let i =0;i<this.length;i++){
        this[i] = this[i] * this[i];
    }
    return this;
}
let array = [3,5,6];

console.log(array.Square());
