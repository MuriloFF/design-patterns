abstract class Vehicle {
  constructor(protected brand: string) {}

  abstract startEngine(): void; // Abstract method
  abstract honk(): void; // Abstract method
}

class Car extends Vehicle {
  startEngine(): void {
    console.log(`${this.brand} car engine started.`);
  }

  honk(): void {
    console.log(`Bi Bi!`);
  }
}

const car = new Car("Ferrari");
car.startEngine(); // Output: Ferrari car engine started.
