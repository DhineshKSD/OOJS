let bikename = "Apache";

var brand="TVS";

var price="130000";

function describe_data()
{
    document.getElementById("demo").innerHTML+=(`The  price of the brand ${this.brand} is ${this.price} <br><br>`);
}

const bike ={
    brand : "Honda",
    color : "Black",
    ex_price : 132000,

    display_data:function(){
        document.getElementById("demo").innerHTML+=`Bike name is `+this.brand+` which is of color `+this.color+' and its ex-showroom price is '+this.ex_price+`<br><br>`;//prints the local variable of vehicle object
        document.getElementById("demo").innerHTML+=`Bike name is `+bikename +` of brand `+brand+` and its ex-showroom price is `+ price + `<br><br>`;//prints the global variables
    }
}

window.describe_data();

console.log(window.brand);//prints the brand since the global variable is accessible by window object

console.log(window.bikename);//does not print because of the let keyword


bike.display_data();
