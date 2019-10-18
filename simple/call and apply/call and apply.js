var bikes = [
{
    brand : "Honda",
    model : "CBR",
    ex_price : 132000,
},
{
    brand : "Bajaj",
    model : "Pulsar",
    ex_price : 125000,
},
];

for (var i = 0; i < bikes.length; i++) {
  (function(i) {
    this.print = function() {
        document.getElementById("demo").innerHTML += ('*' + 'Brand: ' + this.brand+'<br>'+ ' Model: ' + this.model+'  ' +'<br>'+ ' Ex-Showroom Price: Rs.'+ this.ex_price +"<br><br>");
    }
    this.print();
  }).call(bikes[i], i);
}

for (var i = 0; i < bikes.length; i++) {
  (function(i) {
    this.print = function() {
        document.getElementById("demo1").innerHTML += ('*' + 'Brand: ' + this.brand+'<br>'+ ' Model: ' + this.model+'  ' +'<br>'+ ' Ex-Showroom Price: Rs.'+ this.ex_price +"<br><br>");
    }
    this.print();
  }).apply(bikes[i], [i]);
}