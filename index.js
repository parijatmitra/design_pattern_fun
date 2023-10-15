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



