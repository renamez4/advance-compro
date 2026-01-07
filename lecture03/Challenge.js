let value1 = ['Apple' , 1, false];
let value2 = ['Fires', 2, true, 'Apple'];
let value3 = ['Mars' ,9, 'Apple'];


for (let val1 of value1){
    for (let val2 of value2){
        for (let val3 of value3){
            if(val1 === val2 && val1 === val3){
                console.log(`Common value found: ${val1}`);
            }
        }
    }
}