// function returning the fuction


function func1(){
    function fun2(){
        console.log("Hello world")
    }
    return fun2;
}

const ans = func1();
ans();
