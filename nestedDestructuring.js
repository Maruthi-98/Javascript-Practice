// simple destructuring of nested array

let data = [
    {userId: 101, userName: "Alone101"},
    {userId: 102, userName: "Alone102"}
]

let [user1, user2] = data;

console.log(user1);
console.log(user2);

//destructuring objects from the array

let [{userId, userName}] = data;

console.log(userId);
console.log(userName);