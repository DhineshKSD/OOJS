function showroom(brand,model,year,color,price,price1) //Constructor Function
{
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.ex_price = price;
    this.on_road = price1;
    this.display=function()
    {
      document.getElementById("demo").innerHTML+=`* Ex-showroom price of ${this.brand} ${this.model}  (${this.year}) model "${this.color}" variant is Rs.${this.ex_price}`+"<br><br>";
    }
}
showroom.prototype.display1 = function ()
{
    document.getElementById("demo").innerHTML+=`* Onroad price of ${this.brand} ${this.model}  (${this.year}) model "${this.color}" variant is Rs.${this.on_road}`+"<br><br>";
} 

const bike1 = new showroom("Royal Enfield","Classic 350",2018,"Matte Black",165000,176000);

bike1.display();

bike1.display1();

showroom.prototype={
  capacity : "150cc"
}
console.log(bike1.capacity)            //gives undefined because the updated value is not known for bike1
const bike2 = new showroom();          //new object
console.log(bike2.capacity)            //This will give the updated value
