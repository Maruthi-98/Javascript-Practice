const items = [
    {name: "Tv", price: 12000},
    {name: "laptop", price: 29000},
    {name: "harddisk", price: 2500},
    {name: 9999}
]

const filterItems = items.filter((item)=>{
    return item.price >= 100;
})

console.log(filterItems);