class Car {
  constructor(brand) {
    this.brandName = brand;
  }
  present() {
    return `I have a ${this.brandName}`;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  showOff() {
    return `${this.present()}. The model is ${this.model}`;
  }
}

const myCar = new Model('Ford', 'Mustang');

console.log(myCar.showOff());
