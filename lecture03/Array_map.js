//Simple Transformation
const names = ["Taylor" , "Donald", "Natasha"];

const annoucements = names.map (member => {
    return member + " joined the contest.";
});

//Complex Transformation
const kvArryy =[
    {key: 1, value: 10},
    {key: 2, value: 20}
];

const reformatted = kvArryy.map(
    ({key, value}) => ({ [key]: value})
);

console.log(annoucements);
console.log(kvArryy);
console.log(reformatted)