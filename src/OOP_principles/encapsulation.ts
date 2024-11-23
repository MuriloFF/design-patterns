class Person {
  private name: string; // Encapsulation of property

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name; // Controlled access
  }

  setName(name: string): void {
    this.name = name;
  }
}

const person1 = new Person("John");
console.log(person1.getName()); // Output: John
person1.setName("Doe");
console.log(person1.getName()); // Output: Doe
