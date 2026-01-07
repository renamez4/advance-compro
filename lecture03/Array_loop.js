//oldway
const names = ['Justin', 'Sarah', 'Christopher'];

for (let i = 0 ; i < names.length; i++){
    console.log(names[i]);
}

//modern
names.forEach(names => {
        console.log(names)
});

//Power Tool#1 .forEach()
names.forEach(myFuntion);

function myFuntion(names){
    console.log(names);
}

names.forEach(value => console.log(value));

for(let name of names){
    console.log(names);
}