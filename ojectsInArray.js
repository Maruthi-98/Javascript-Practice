// having multiple objects in a single arrary

let users = [
    {userId: 101, userName: "Alone101"},
    {userId: 102, userName: "Alone102"},
    {userId: 103, userName:"Alone103"}
]

console.log(users);

// using loop to get the data from the array

for(let user of users){
    console.log(user);
    console.log(user.userId, user.userName);
}