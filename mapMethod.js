// map method in javascript


const items = [
    {name: "phone" , price : 9999},
    {name: "laptop" , price : 29000},
    {name: "Tv", price : 12000}
]

const itemNames = items.map((item)=>{
    return item.name;
})

console.log(itemNames);