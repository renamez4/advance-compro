const bookObj ={
    title: "Becoming",
    author: "Michelle Obama",
    isAvalable: false
};

const bookJSON = JSON.stringify(bookObj);

console.log(bookJSON);
console.log(typeof bookJSON);

const receviedBookObj = JSON.parse(bookJSON);

console.log(receviedBookObj.author);
console.log(typeof receviedBookObj);