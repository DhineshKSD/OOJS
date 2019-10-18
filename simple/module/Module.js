var bike=(function() //Main Module
{
    var bikename="Thunderbird 350x";
    var price=160000;
    var tax= 1860;
    var insurance=8560;
    var discount=5000;
    var discountpercent;
    document.getElementById("demo").innerHTML = "Bike Name: "+bikename+ '<br><br>';

    var discounted_price=function(){
        return price-discount;
    }

    discountpercent=discounted_price()/100;

    let find_onroadprice=(function(){ //SubModule
        let onroad;

        if(bikename=="Thunderbird 350x")
        {
            onroad = price+tax+insurance
        }
        return(onroad);
    })();

    document.getElementById("demo").innerHTML +=("The Onroad price of "+ bikename+" is Rs. "+find_onroadprice+"<br><br> ");
    return discountpercent;

}());