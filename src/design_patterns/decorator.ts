/**
 * Decorator Pattern is a structural design pattern that allows adding new behaviors to objects dynamically by placing them inside special wrapper objects that contain these behaviors.
 *
 * Use Case: When the client code needs to add new functionalities to objects without altering their existing structure.
 * Examples:
 * Coffee Shops: Adding milk, sugar, or syrup to coffee without changing the base coffee object.
 * Data Streams: Adding encryption, compression, or buffering to file streams.
 * Gaming: Enhancing characters with abilities like flying, invisibility, or armor upgrades.
 */

interface Coffee {
  cost(): number;
  description(): string;
}

class BasicCoffee implements Coffee {
  cost(): number {
    return 5;
  }

  description(): string {
    return "Basic Coffee";
  }
}

class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost() + 2;
  }

  description(): string {
    return `${this.coffee.description()}, Milk`;
  }
}

class SugarDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost() + 1;
  }

  description(): string {
    return `${this.coffee.description()}, Sugar`;
  }
}

const coffee = new SugarDecorator(new MilkDecorator(new BasicCoffee()));
console.log(coffee.description()); // Output: Basic Coffee, Milk, Sugar
console.log(coffee.cost()); // Output: 8
