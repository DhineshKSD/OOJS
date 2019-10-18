class showroom {
  constructor(brand,model,year,capacity) //to initialize properties of an object
  {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.capacity = capacity;
  }
  display() {
    return "Brand: " + this.brand +"<br>"+"Model: "+this.model +"<br>"+"Year: "+this.year +"<br>"+"Engine Capacity: "+  this.capacity+" CC. <br><br>" ;
  }
}

bike1 = new showroom("TVS","Scooty",2015,110); //creating object
bike2 = new showroom("Honda","Active",2014,110); //creating object
document.getElementById("demo").innerHTML = bike1.display()+bike2.display();