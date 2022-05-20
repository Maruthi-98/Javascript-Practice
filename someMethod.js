// some method in javascript

const items = [
    {naem : "phone", price : 9999},
    {name: "Tv" , price : 12000},
    {name : "laptop" , price : 29000}
]

const SomeItems = items.some((item)=>{
    return item.price <= 9999;
})

console.log(SomeItems);