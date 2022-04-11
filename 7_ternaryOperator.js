// ternary operator is also known as  conditinal operator and it aslo works like if condition
// syntax for ternary operator

// variablename = (condition) ? value1:value2 

// example:

let user_name= "admin";
let password = "admin";

let login = (user_name === "admin" && password === "admin")? "Welcome Admin": "invalod user name or password";
console.log(login);