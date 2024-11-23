class Animal {
  constructor(protected name: string) {}

  makeSound(): void {
    console.log("Some generic sound...");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

const animal = new Animal("Animal");
animal.makeSound(); // Output: Some generic sound...

const dog = new Dog("Buddy");
dog.makeSound(); // Output: Buddy says: Woof!
