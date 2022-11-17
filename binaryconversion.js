Array.prototype.conversion = function(){
    function converbinary(x){
        let bin = 0;
        let rem , i =1,step = 1;

        while(x!=0){
            rem = x%2;
            x=  parseInt(x/2);
            bin = bin + rem *i;
            i=i*10;
        }
        return bin;
    }

    for(let i =0;i<this.length;i++){
        this[i] = converbinary(this[i]);
    }


    return this;
}

let arr = [2,5,8];

console.log(arr.conversion());
