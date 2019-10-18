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

console.log(bike1);

const bike2 = Object.create(bike1); //prototype inheritance

console.log(bike2);

bike2.display();                    //will display bike1 object properties---inheriting bike1 properties

bike2.display1();                   //will display bike1 object properties---inheriting bike1 properties

bike2.on_road = 150000;             //modifying the inherited property for bike2 

bike2.display1();

var show = Object.getPrototypeOf(bike1);

console.log(show);//returns the bike1 object details

console.log(bike2.__proto__===bike1);//returns true 