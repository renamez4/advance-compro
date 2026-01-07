const a = 10
const b = 5

const add = function(x,y){
    return x + y
}

const addArrow = (x,y) =>{
    return x + y
}

const substract = (a,b) =>{
    const result = a - b;
    return result;
}

console.log(`Addition: ${add(a,b)}`);
console.log(`Addition using Arrow function : ${addArrow(a,b)}`);
console.log(`Subtraction : ${substract(a,b)}`);