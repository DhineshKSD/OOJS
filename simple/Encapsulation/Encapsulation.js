function showroom(brand,model,year,color,price,tax,insurance) //Constructor Function
{
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.ex_price = price;
    this.tax = tax;
    this.insurance =insurance;

    this.display = function ()
    {
    document.getElementById("demo").innerHTML+=`* Ex-showroom price of ${this.brand} ${this.model}  (${this.year}) model "${this.color}" variant is Rs.${this.ex_price}`+"<br><br>";
    } 

    this.calculate_onroadprice = function()
    {
        return(this.ex_price+this.tax+this.insurance);
    }

    this.display_onroadprice=function()
    {
    var original_price=this.calculate_onroadprice(); //encapsulation of original price of bike1
    document.getElementById("demo1").innerHTML+=`* The On-road price of the Bike is Rs. `+ original_price+` (Inclusive of tax and insurance) `;
    };
}

const bike1 = new showroom("Royal Enfield","Classic 350",2018,"Matte Black",165000,1760,10000);

bike1.display();

bike1.display_onroadprice();