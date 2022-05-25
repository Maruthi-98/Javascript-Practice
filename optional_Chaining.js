// optional chaining

const user = {
    name: "Alone",
    userId : 101,
    //address : {houseNumber: 123}
}

console.log(user?.name);

console.log(user?.address?.houseNumber);
