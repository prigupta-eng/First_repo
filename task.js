console.log("helloooooo");
function test() {
    this.name= 'pusharma'
    this.age= 24
    return this;
}
const obj =  new test();
console.log(obj);

function registerUser(name, password) {
    console.log(`this before func exec `, this);
    
    this.name = name;
    this.password = password;
    console.log(`this after func exec `, this);
}  
const user1 = new  registerUser('pusharma', '12345');
console.log(user1);


const registerUserArrow = (name, password) => {
    console.log(`this before func exec `, this);
    
    this.name = name;
    this.password = password
    console.log(`this after func exec `, this);
}
const user2 =   registerUserArrow('pusharma', '12345');
console.log(user2);