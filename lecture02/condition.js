const itstatus = 200;

if (itstatus === 200) {
    console.log("ok");

} else if (itstatus === 400) {
    console.log("Bad Request");
} else {
    console.log("Other status");
}

switch (itstatus){
    case 200:
        console.log("ok")
        console.log("Success")
       // break;
    case 400:
        console.log("Bad Request")
        break;
    default:
        console.log("Other Request")
}