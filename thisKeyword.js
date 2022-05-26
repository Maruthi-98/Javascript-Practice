// this keyword in javascript

// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// 1) when a this keyword is defined alone then it referece to global object

// example:

console.log(this);  // window object

// when a this keyword is defined in  a function it referce to global object

function fun1(){
    console.log(this);
}

fun1();  // window object

// but when a this keyword is defined in function with a strict mode then we will get undefined

function fun2(){
    "use strict";
    console.log(this);
}

fun2();  // undefined


// if a this keyword is defined inside a method then it referce to the owner object

// example:

const user = {
    name : "Alone" , 
    age : 22,
    programming_language : function(){
        console.log("HTML", "CSS", "Js");
        console.log(this);
    }

}

user.programming_language();