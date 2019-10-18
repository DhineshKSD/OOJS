function showroom(brand,model,year,color,price) //Constructor Function
{
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.display = function (){
    document.getElementById("demo").innerHTML+=`* Cost of ${this.brand} ${this.model}  (${this.year}) model (${this.color}) variant is Rs.${this.price}`+"<br><br>";
    } 
}

const bike1 = new showroom('Yamaha','R15','2019 - V3', 'Blue', 145000); //creating instance
const bike2 = new showroom('TVS','Apache','2018 - 4V','Red', 125000); //creating instance
console.log(bike1);
bike1.display();
console.log(bike2);
bike2.display();