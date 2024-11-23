/**
 * Factory Method Pattern is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created.
 *
 * Use Case: When the client code needs to create objects without knowing the exact class or its constructor logic.
 * Examples:
 * UI Components: Creating buttons, text fields, or dropdowns for different platforms
 * Data Parsers: JSON, XML, or CSV parsers dynamically based on the input file type
 * Payment Processing: Selecting PayPal, Stripe, or Credit Card payment methods at runtime
 */

interface Draw {
  draw(): void;
}

class Star implements Draw {
  draw(): void {
    console.log("Drawing a Star.");
  }
}

class Retangle implements Draw {
  draw(): void {
    console.log("Drawing a Retangle.");
  }
}

class DrawFactory {
  static createDraw(type: string): Draw {
    switch (type) {
      case "star":
        return new Star();
      case "retangle":
        return new Retangle();
      default:
        throw new Error("Invalid shape type");
    }
  }
}

const star = DrawFactory.createDraw("star");
star.draw(); // Output: Drawing a star.
