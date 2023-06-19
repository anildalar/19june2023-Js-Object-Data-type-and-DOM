
let car1 = {
    //1. P:V (Many)
    brand:"TATA",
    year:2023,
    model:"Harrier",
    color:"black",
    type:'SUV',
    engine:"EV/Petrol/Diesel",
    price:200000,

    //2. Method (Many)
    getFullDetail(){

        //Every function return something
        return this.brand + this.year + this.model + this.color + this.type;
    }
}
var car2 = {
    //1. P:V (Many)
    brand:"Mahindra",
    year:2022,
    model:"Thar",
    color:"black",
    type:'Gypsy',
    engine:"Diesel",
    price:140000

    //2. Method (Many)
}
const car3 = {
    //1. P:V (Many)
    brand:"Hundai",
    year:2023,
    model:"Verna",
    color:"white",
    type:'Sedan',
    engine:"Pertrol",
    price:160000

    //2. Method (Many)
}

console.log(car1.brand); // object.property
console.log(car2["brand"]); //oject["property"]
let x="brand"
console.log(car3[x]); //oject[expression]  x is an expression