const bike = {
    brand : "Honda",
    model : "CBR",
    ex_price : 135000,
    onroad : function()
    {
        var rto = 1500;
        var insurance = 10000; 
        document.getElementById("demo").innerHTML = '* The Onroad price of '+(this.brand)+" "+(this.model)+' is Rs.'+ (rto+insurance+this.ex_price) +"<br><br>";
        console.log(' The Price of Yamaha R15 is Rs.'+ (rto+insurance+this.ex_price));
    }
};

bike.onroad();

console.log(bike);

bike.color = "Black"; //adding properties to bike object

bike.capacity = "150 CC"; //adding properties to bike object

console.log(bike);

console.log(bike.color);

document.getElementById("demo").innerHTML += '* The Ex-Showroom price of '+(bike.brand)+" "+(bike.model)+' with engine capacity of '+bike.capacity+' is Rs.'+ bike.ex_price;