
// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

function func1(){
    console.log("hello this  a call back function")
}

function fun2(a, b, callback){
    console.log(a+b);
    callback();
}

fun2(10,20,func1);