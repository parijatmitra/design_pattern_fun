//Singleton Design

class Car {
   constructor(dataEnter) {
    if(Car.instance) {
        return Car.instance;
    }
    this.data = dataEnter;
    Car.instance = this;
   }

   static getCarInstance(dataEnter) {
      return new Car(dataEnter);
   }
};

let car1 = Car.getCarInstance("Ferrari");
let car2 = Car.getCarInstance("Lambo");
let carCheck = (car1 == car2);
if(carCheck) {
    console.log("They are the same");
} else {
    console.log("They are not equal");
}


//builder design 

// product class
class Burger {
  constructor(builder) {
    this.hasChesse = builder.hasCheese || false;
    this.hasChilli = builder.hasChilli || false;
    this.hasDiscount = builder.hasDiscount || false;;
  }
};


// builder class
class BurgerBuilder {
      contructor() {

      }

      putCheese(dataEnter) {
        this.hasCheese = dataEnter;
        return this;
      }

      putChilli(dataEnter) {
        this.hasChilli = dataEnter;
        return this;
      }

      putDiscount(dataEnter) {
        this.hasDiscount = dataEnter;
        return this;
      }

      build() {
        return new Burger(this);
      }
};

// instance 1
let burger1 = new BurgerBuilder().putCheese(true).putChilli(true).putDiscount(true).build();
console.log(burger1, 'burger 1st instance')

//instance 2
let burger2 = new BurgerBuilder().putCheese(false).putChilli(true).putDiscount(false).build();
console.log(burger2, 'burger 2nd instance')
