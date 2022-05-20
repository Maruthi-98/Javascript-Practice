// every method in javascript


// every method is similar to some method but instead of checking one item is satifying the condition it checks all the items and see if the condition is true


const items = [
    {name: "phone", price : 9999},
    {name : "Tv", price : 12000},
    {name: "laptop", price : 29000}
]

const everyItem = items.every((item)=>{
    //return item.price<= 99999; // returns true as every item price is less than 99999
      return item.price <=9999;  // returns false as only item is less than equal to 9999
})

console.log(everyItem);