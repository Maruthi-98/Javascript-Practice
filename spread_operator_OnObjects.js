// spread operator in objects

let data = {
    name: "Alone",
    age: 23
}

let data2 = {
    country: "INDIA",
    city: "Hyderabad"
}


const fullData = {...data, ...data2}; 

console.log(fullData);