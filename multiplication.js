Array.prototype.Multiply = function(){
    let mul = 1;;
    for(let i = 0;i< this.length;i++){
        mul = mul*this[i];
    }
    return mul;
}
let arr = [2,6]
console.log(arr.Multiply())
