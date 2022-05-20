// find method in javascript

const items = [
    { name: "phone", price: 9999, model : "Mi"},
    { name: "phone", price: 11999, model: "Samsung"},
    { name: "laptop", price: 29000},
    { name: "Tv", price: 12000}
]


const findItems = items.find((item)=>{
    return item.name === "phone" && item.price === 11999;
})


console.log(findItems);