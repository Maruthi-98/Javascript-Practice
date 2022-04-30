// spread operator with array
//example 1
let data = ["simple code", "get_a_byte"];

let data1= [...data];

console.log(data);

data =["simple code", "get_a_byte", "web dev"];

console.log(data1, data);

// using spread operator with function
//example 2

let clientsName = ["igman", "brandMatters", "sigmaSteels"];

function clientData(name1, name2, name3){
    console.log(name1,name2, name3);
}

clientData(...clientsName);