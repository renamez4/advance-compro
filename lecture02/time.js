const starTime = Date.now();

function someHeavyTask(){
    for(let i = 0; i < 1e7; i++){
        Math.sqrt(i);
    } 
}
someHeavyTask();

const endTime = Date.now();

const duration = endTime - starTime;

console.log(`Duration: ${duration} ms`);