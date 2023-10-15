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

//Abstract factory

class GUIFactory {

    createButton() {
        throw new Error("This is an abstract method and has to be overridden");
    }

    createCheckBox() {
        throw new Error("This is an abstract method and has to be overridden");
    }

};

//Concrete Factory 1

class MacFactory extends GUIFactory {
    createButton() {
        return new MacButton();
    }
    createCheckBox() {
        return new MacCheckox();
    }

};

//Concrete factory 2
class WindowFactory extends GUIFactory {

    createButton() {
        return new WindowButton();
    }

    createCheckBox() {
        return new WindowCheckBox();
    }

};

//product A1 

class MacButton {
   paint() {
    return "this is a mac button";
   }
};

//product A2 

class MacCheckox {
  paint() {
    return "this is a mac check box";
  }
};

//product B1

class WindowButton {
  paint() {
    return "this is a window button";
  }
};

//product B2

class WindowCheckBox {
  paint() {
    return "this is  a window checkbox";
  }
};

//client code

function renderUI(factory) {
    const button = factory.createButton();
    const checkBox = factory.createCheckBox();

    console.log(button.paint());
    console.log(checkBox.paint());
}

const macFactory = new MacFactory();
const windowFactory = new WindowFactory();

renderUI(macFactory);

renderUI(windowFactory);
