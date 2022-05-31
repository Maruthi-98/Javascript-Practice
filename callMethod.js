// call() method in Javascript

// With the call() method, you can write a method that can be used on different objects.

// example:

const user = {
    name : "Alone", 
    idNo : 101,
    about : function(){
        console.log(this.name, this.idNo);
    }
}

const user1 = {
    name : "alone", 
    idNo : 102
}

// user.about();  // in this case the about method in the user object will be called and executed

user.about.call(user1);  // in this case we are using the about function in the user object to work for the user1 object by using call() method

// example 2: 

const user2 = {
    name : "John",
    idNo : 103,
}


function hobbies(){
    console.log(`${this.name} has hobbies playing cricket and singing`);
}

hobbies.call(user1); // accessing hobbie function for objects using call method; 

