function criticalCode(){
    throw ("Throwing an exception");
}

function logError(theException){
    console.log(theException);
}

//Try..Catch
console.log("\n--- Try..Catch ---\n");
try{
    criticalCode();
}catch(ex){
    console.log("Got An Error");
    logError(ex);
}

//Throwing in Try..Catch
console.log("\n--- Throwing in Try..Catch ---\n");
try{
    throw "An exception that is thrown ever time";
} catch(ex){
    console.log("Got an error");
    logError(ex);
}

//Try..Catch..Finally
console.log("\n--- Try..Catch..Finally ---\n");

try{
    criticalCode();
}catch(ex){
    console.log("Got An Error");
    logError(ex);
}finally{
    console.log("Code that always will runs");
}
