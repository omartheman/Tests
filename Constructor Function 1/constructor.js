function Apple ( x, y, color, score ) 
{
	this.x = x;
	this.y = y;
	this.color = color;
	this.score = score;
};

//The constructor function is building an object. The constructor function is a function. The constructor function uses this. to point to the name of the object that will be created by the function. The constructor function uses semicolons instead of commas. How is the constructor function different from a regular function? 

var apple1 = new Apple( 10, 20, 'red', 200);

const apple2 = new Apple( 11, 22, 'blue', 300)

const myCar = {

  maxSpeed: 70,
  driver: "Net Ninja",
  drive: function(speed, time) {
    console.log(speed * time);
  },
  logDriver: function () {
    console.log(`Driver name is ${this.driver}`)
  }

}

const Car = function (maxSpeed, driver) {
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function(speed, time) {
    console.log(speed * time);
  };
  this.logDriver = function () {
    console.log(`Driver name is ${this.driver}`)
  };
};