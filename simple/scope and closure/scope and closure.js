const bike='Yamaha R15'; //global declaration

function onroad_price(price,tax,ins_price,discount)
{
    var discount1 = (discount/100);

    var exshowroom_price = price+(price*discount1); //5% Discount

    var rto_tax = tax;

    var insurance_price = ins_price;


    document.getElementById("demo1").innerHTML = "Split up: <br><br>* Ex-showroom Price: Rs."+exshowroom_price+"<br><br>"+"* Road tax: Rs."+rto_tax+"<br><br>"+"* Insurance: Rs."+ins_price;
    return function display() //closure
    {
        return(exshowroom_price+rto_tax+insurance_price);
    }
}   

let r15 = onroad_price(120000,10000,1500,5);
document.getElementById("demo").innerHTML = '(--- The Onroad price of '+ bike+' is Rs.'+r15()+' ---)';