
// javascript hoisting

// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

// example1:

var firstName = "Alone";

console.log(firstName);  // this is a common way to declare a variable

// example2:

console.log(x);

var x= 10;  // in this example we will get output as undefined

// hoisting in functions

hello();

// function declartion

function hello(){
    console.log("hello");
}



hello1();   // we will receive a error "Cannot access 'hello1' before initialization"

// function expression

const hello1 = function(){
    console.log("hello1");
}


hello3(); //  we will receive a error "Cannot access 'hello1' before initialization"

// Arrow function

const hello3 = ()=>{
    console.log("hello3");
};