function genRandomInt(){
    const randomPart = Math.random().toString(36).substring(2, 8);
    return randomPart.toUpperCase();
}

const orderId = genRandomInt();
console.log(`Your order ID is: ${orderId}`);