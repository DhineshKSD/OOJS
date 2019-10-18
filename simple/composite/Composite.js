function bike(name,color) {
    this.name = name;
    this.color = color;
}
bike.prototype.display = function () {
    console.log(this.bike);
}

function bike_showroom(name) {
    this.name = name;
    this.bikes = [];
}

bike_showroom.prototype.add = function (item) {
    this.bikes.push(item);
}

bike_showroom.prototype.getbikeName = function (index) {
    return this.bikes[index].name;
}
bike_showroom.prototype.getbikeColor = function(index) {
    return this.bikes[index].color;
}

bike_showroom.prototype.describe = function() {
    document.getElementById("demo").innerHTML +=`${(this.name)}<br><br>`;
    for (let i = 0, length = this.bikes.length; i < length; i++) 
    {
        document.getElementById("demo").innerHTML +=`Bike name is ${this.getbikeName(i)} colour is ${this.getbikeColor(i)}<br><br> `;
    }
}

Showroom1 = new bike_showroom('Showroom 1');
Showroom2 = new bike_showroom('Showroom 2');
Showroom3 = new bike_showroom('Showroom 3');

bike1 = new bike('Yamaha R15' , 146000);
bike2 = new bike('Tvs Apache' , 139000);
bike3 = new bike('Classic 350' , 168000);

Showroom1.add(bike1);
Showroom1.add(bike2);

Showroom2.add(bike1);
Showroom2.add(bike3);

Showroom3.add(bike1);
Showroom3.add(bike2);
Showroom3.add(bike3);

Showroom1.describe();
Showroom2.describe();
Showroom3.describe();