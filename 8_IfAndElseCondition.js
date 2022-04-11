// if condition is used to find is a condition is true or false

//example:

let userName= "admin";
let password = "admin";

if(userName === "admin" && password === "admin"){           // if condition is flase nothing will be printed in the console because we did not define a else statement
    console.log("welcome admin");
}

// lets use else statement to

let firstName = "Prasad";

let salary = 4000000;

if(firstName === "Prasad" && salary === 4000000 ){
    console.log("prasad is a pro programmer")
} else{
    console.log("prasad you need to improve your skills");
}

// lets use if elseif and else
let time = 9

if (time < 10) {
    console.log("Good morning");
  } else if (time < 20) {
    console.log("Good day");
  } else {
    console.log("Good evening");
  }