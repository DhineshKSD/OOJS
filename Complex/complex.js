var name = "Welcome";                           //Global variable
var data=[];

var xmlhttp = new XMLHttpRequest();             //Ajax to read JSON data
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var myArr =JSON.parse(this.responseText);
            localStorage.setItem("brand",JSON.stringify(myArr.brand));
            localStorage.setItem("bikedata",JSON.stringify(myArr.bikes));
            localStorage.setItem("user",JSON.stringify(myArr.user));
            localStorage.setItem("discount",JSON.stringify(myArr.discount_price));
            console.log(myArr.discount_price)
        }
    };
    xmlhttp.open("GET", "http://192.168.153.60:96/", true);
    xmlhttp.send();

(function disp_showroom()                       //IIFE function to display showroom name
{
document.getElementById("showroom").innerHTML=("--------------------------------------------"+window.name+"---------------------------------------------<br><br>");//Prints welcome since it is a global variable accessible by window object
document.getElementById("showroom").innerHTML+="Bikers of the world, welcome home to your dream bike shop Biker Buddy. Find your right <br> bike/scooter from various brands at Biker Buddy and compare the budget, price, and features.<br> Stay updated with latest reviews about bikes, compare bikes in your price range and stay tuned.<br><br>Avail amazing diwali discounts for your dream bike purchase on this month. <br> Hurry Up! Limited offer only!";
})();
 
function brand(brand1,brand2,brand3)            //Constructor Function
{ 
    this.brand1 = brand1;
    this.brand2 = brand2;
    this.brand3 = brand3;
    this.display = function (){
    document.getElementById("demo").innerHTML =`---------------------------------------Available Brands----------------------------------------<br><br>` ;
    document.getElementById("demo").innerHTML+=`~~ ${this.brand1} ~~<br> ~~ ${this.brand2} ~~<br> ~~ ${this.brand3} ~~<br><br>` ;
    document.getElementById("demo").innerHTML+=`-------------------------------------------------------------------------------------------------------` ;
    }
} 

var x = JSON.parse(window.localStorage.getItem("brand"));

const bikes = new brand(x[0].brand1,x[1].brand2,x[2].brand3) //object creation
bikes.display();
    
class Bike_showroom                                          //Class
{ 
    constructor(brand,model,year,color,price,tax,insurance) 
    {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.ex_price = price;
    this.tax = tax;
    this.insurance =insurance;
    }
    display_bike = function ()
    {
        document.getElementById("top_line1").innerHTML =`-----------------------------------------Available Variants----------------------------------------<br><br>` ;    
        document.getElementById("demo1").innerHTML+=`* Brand: ${this.brand}  <br> &nbsp&nbsp Model: ${this.model} <br> &nbsp&nbsp Year: ${this.year} model <br> &nbsp&nbsp Variant:  "${this.color}"<br> &nbsp&nbsp Price: Rs.${this.ex_price}<br><br>`;
        document.getElementById("bot_line1").innerHTML=`-------------------------------------------------------------------------------------------------------` ;    
    }    
}

class Yamaha extends Bike_showroom                             //Polymorphism
{ 
    constructor(brand,model,year,color,price,tax,insurance) 
    {
    super(brand,model,year,color,price,tax,insurance)
    }
    display_bike = function ()                                 //over-ride the display fn in parent class (i.e.Bike_showroom)
    {
        document.getElementById("top_line2").innerHTML =`-----------------------------------------Available Variants----------------------------------------<br><br>` ;    
        document.getElementById("demo2").innerHTML+=`* Brand: ${this.brand}  <br> &nbsp&nbsp Model: ${this.model} <br> &nbsp&nbsp Year: ${this.year} model <br> &nbsp&nbsp Variant:  "${this.color}"<br> &nbsp&nbsp Price: Rs.${this.ex_price}<br><br>`;
        document.getElementById("bot_line2").innerHTML=`-------------------------------------------------------------------------------------------------------` ;    
    }    
}

class Tvs extends Bike_showroom                                //Polymorphism
{ 
    constructor(brand,model,year,color,price,tax,insurance) 
    {
    super(brand,model,year,color,price,tax,insurance)
    }
    display_bike = function ()                                  //over-ride the display fn in parent class (i.e.Bike_showroom)
    {
        document.getElementById("top_line3").innerHTML =`-----------------------------------------Available Variants----------------------------------------<br><br>` ;    
        document.getElementById("demo3").innerHTML+=`* Brand: ${this.brand}  <br> &nbsp&nbsp Model: ${this.model} <br> &nbsp&nbsp Year: ${this.year} model <br> &nbsp&nbsp Variant:  "${this.color}"<br> &nbsp&nbsp Price: Rs.${this.ex_price}<br><br>`;
    }    
}

Bike_showroom.prototype.calculate_onroadprice = function()     //prototype
{
    return(this.ex_price+this.tax+this.insurance);
}

Bike_showroom.prototype.display_onroadprice=function()
{
var original_price=this.calculate_onroadprice();              //encapsulation
    if(this.brand=="Royal Enfield")
    {
    document.getElementById("separator1").innerHTML =`--------------------------------------------On-Road Price--------------------------------------------<br><br>` ;    
    document.getElementById("onroad1").innerHTML+=`----- The On-road price of "${this.brand}-${this.model}" model is Rs. `+ original_price+' ------<br><br>';
    document.getElementById("onroad1").innerHTML+=` Ex-showroom Price: Rs. ${this.ex_price}<br> Road Tax: Rs. ${this.tax}<br> Insurance: Rs. ${this.insurance} <br><br>`;
    }
    if(this.brand=="Yamaha")
    {
    document.getElementById("separator2").innerHTML =`--------------------------------------------On-Road Price-------------------------------------------<br><br>` ;             
    document.getElementById("onroad2").innerHTML+=`----- The On-road price of "${this.brand}-${this.model}" model is Rs. `+ original_price+' ------<br><br>';
    document.getElementById("onroad2").innerHTML+=` Ex-showroom Price: Rs. ${this.ex_price}<br> Road Tax: Rs. ${this.tax}<br> Insurance: Rs. ${this.insurance} <br><br>`;
    }
    if(this.brand=="TVS")
    { 
    document.getElementById("separator3").innerHTML =`--------------------------------------------On-Road Price-------------------------------------------<br><br>` ;    
    document.getElementById("onroad3").innerHTML+=`----- The On-road price of "${this.brand}-${this.model}" model is Rs. `+ original_price+' ------<br><br>';
    document.getElementById("onroad3").innerHTML+=` Ex-showroom Price: Rs. ${this.ex_price}<br> Road Tax: Rs. ${this.tax}<br> Insurance: Rs. ${this.insurance} <br><br>`;
    }
};

var y = JSON.parse(window.localStorage.getItem("bikedata"));

const bike1 = new Bike_showroom(y[0].brand,y[0].model,y[0].year,y[0].color,y[0].price,y[0].tax,y[0].insurance) //creating object

const bike2 = Object.create(bike1); //prototype inheritance

bike2.model = "Thunderbird 350X";   //Modifying Properties of bike2
bike2.year = 2019;                  //Modifying Properties of bike2
bike2.ex_price = 175000;            //Modifying Properties of bike2
bike2.color = "Whimsical White";    //Modifying Properties of bike2
bike2.insurance = 10000;

const bike3 = new Yamaha(y[2].brand,y[2].model,y[2].year,y[2].color,y[2].price,y[2].tax,y[2].insurance) //creating object
const bike4 = new Tvs(y[3].brand,y[3].model,y[3].year,y[3].color,y[3].price,y[3].tax,y[3].insurance) //creating object

var dp = JSON.parse(window.localStorage.getItem("discount"));


Bike_showroom.prototype.discount_price1=dp[0].discount_price1;
Bike_showroom.prototype.discount_price2=dp[1].discount_price2;
Bike_showroom.prototype.discount_price3=dp[2].discount_price3;
Bike_showroom.prototype.discount_price4=dp[3].discount_price4;

//IIFE
Bike_showroom.prototype.discounted_price=(function(){
    bike1.discounted_price = bike1.ex_price-bike1.discount_price1;
    bike2.discounted_price = bike2.ex_price-bike2.discount_price2;
    bike3.discounted_price = bike3.ex_price-bike3.discount_price3;
    bike4.discounted_price = bike4.ex_price-bike4.discount_price4;    
})();

Bike_showroom.prototype.display_discountprice=function()
{
    if(this.brand=="Royal Enfield")
    {
        document.getElementById("separator1x").innerHTML =`-------------------------------------------Discount Price------------------------------------------<br><br>` ;    
        document.getElementById("discount1").innerHTML+=("-- Avail discount of "+" "+" Rs. "+ bike1.discount_price1+" -- <br> * The discounted price of "+bike1.brand+" - "+ bike1.model+" is Rs."+" "+bike1.discounted_price+ "<br> (Exclusive of tax and insurance)<br><br>");
        document.getElementById("discount1").innerHTML+=("-- Avail discount of "+" "+" Rs. "+ bike2.discount_price2+" -- <br> * The discounted price of "+bike2.brand+" - "+ bike2.model+" is Rs."+" "+bike2.discounted_price+ "<br> (Exclusive of tax and insurance)<br><br>");
    }
    if(this.brand=="Yamaha")
    {
        document.getElementById("separator2x").innerHTML =`-------------------------------------------Discount Price------------------------------------------<br><br>` ; 
        document.getElementById("discount2").innerHTML+=("-- Avail discount of "+" "+" Rs. "+ bike3.discount_price3+" -- <br> * The discounted price of "+bike3.brand+" - "+ bike3.model+" is Rs."+" "+bike3.discounted_price+ "<br> (Exclusive of tax and insurance)<br><br>");
    }
    if(this.brand=="TVS")
    {
        document.getElementById("separator3x").innerHTML =`-------------------------------------------Discount Price------------------------------------------<br><br>` ; 
        document.getElementById("discount3").innerHTML+=("-- Avail discount of "+" "+" Rs. "+ bike4.discount_price4+" -- <br> * The discounted price of "+bike4.brand+" - "+ bike4.model+" is Rs."+" "+bike4.discounted_price+ "<br> (Exclusive of tax and insurance)<br><br>");
    }
}

//Composite pattern
function Feedback()
{
    function Customer(name,feedback,city,email)
    {
      this.cus_name = name;
      this.email=email
      this.feedback = feedback;
      this.city = city;
    }
    function bike_model(name)
    {
      this.sname = name;
      this.bikemodel = [];
    } 
    bike_model.prototype.add = function(bikename)
    {
      this.bikemodel.push(bikename);
    }
    
    bike_model.prototype.getName = function(index)
    {
      return this.bikemodel[index].cus_name;
    }
    
    bike_model.prototype.getFeedback = function(index)
    {
      return this.bikemodel[index].feedback;
    }
    
    bike_model.prototype.getCity = function(index)
    {
      return this.bikemodel[index].city;
    }

    bike_model.prototype.getemail = function(index)
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
            if(mailformat.test(this.bikemodel[index].email))
                {  
                console.log("Valid email address!");  
                }  
            else  
                {  
                    console.log("You have entered an invalid email address!");  
                }
        return this.bikemodel[index].email;
    }

    bike_model.prototype.display = function()
    {
        document.getElementById("feedback").innerHTML +=("<br>-- Customers Feedback for " + this.sname+" --<br><br>");
        for(var i = 0 , len = this.bikemodel.length ; i < len ; i++)
        {
        document.getElementById("feedback").innerHTML +=(` ${this.getName(i)} from ${this.getCity(i)} gave a rating of "${this.getFeedback(i)}" <br>`);
        }
        document.getElementById("feedback_sep").innerHTML += `----------------------------------------------------`;
    }
    var z = JSON.parse(window.localStorage.getItem("user"));

    Bike_A = new bike_model("Classic 350");
    Bike_B = new bike_model("Yamaha R15");

    const user1 = new Customer(z[0].name,z[0].feedback,z[0].city,z[0].email);
    const user2 = new Customer(z[1].name,z[1].feedback,z[1].city,z[1].email);
    const user3 = new Customer(z[2].name,z[2].feedback,z[2].city,z[2].email);

    const user4 = new Customer(z[3].name,z[3].feedback,z[3].city,z[3].email);
    const user5 = new Customer(z[4].name,z[4].feedback,z[4].city,z[4].email);
    const user6 = new Customer(z[5].name,z[5].feedback,z[5].city,z[5].email);

    Bike_A.add(user1);
    Bike_A.add(user2);
    Bike_A.add(user3);
    
    Bike_B.add(user4);
    Bike_B.add(user5);
    Bike_B.add(user6);
    
    Bike_A.display();
    Bike_B.display(); 
}