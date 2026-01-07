const number = [ 1,2,3,4];

const sum = 
number.reduce((accumalator,
    currenValue) => {
        return accumalator +
        currenValue;
    }
);

console.log("sum is",sum);