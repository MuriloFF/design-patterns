/**
 * Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
 *
 * Use Case: When you need to ensure only one instance of a class exists and provide a global point of access to it
 * Examples:
 * Configuration Management: Centralized app configuration (e.g., database connection, API configuration).
 * Logging: A single logger instance to maintain consistent logs.
 * Caching: Shared cache across the application.
 */

class Singleton {
  private static instance: Singleton;

  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  showMessage(): void {
    console.log("Singleton instance.");
  }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2); // Output: true
singleton1.showMessage(); // Output: Singleton instance.
