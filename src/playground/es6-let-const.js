var nameVar = 'Shekhar';
var nameVar = 'Sushant';
console.log('nameVar', nameVar);

let nameLet = 'Baba';
nameLet = 'Jim';
console.log('nameLet', nameLet);

const nameConst = 'Ram';
console.log('nameComst', nameConst);

//Block scoping

const fullName = 'Johnny Depp';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);