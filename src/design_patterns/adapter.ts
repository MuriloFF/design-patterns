/**
 * Adapter Design Pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate.
 *
 * Use Case: When you need to make two incompatible interfaces work together.
 * Examples:
 * Legacy Systems: Integrating new systems with legacy systems.
 * Third-Party Libraries: Making third-party libraries work with your code.
 * Cross-Platform Development: Adapting platform-specific classes for a common interface.
 */

class OldPrinter {
  printOldWay(): void {
    console.log("Printing with old printer...");
  }
}

interface NewPrinter {
  print(): void;
}

class PrinterAdapter implements NewPrinter {
  constructor(private oldPrinter: OldPrinter) {}

  print(): void {
    this.oldPrinter.printOldWay();
  }
}

const oldPrinter = new OldPrinter();
const adapter = new PrinterAdapter(oldPrinter);

adapter.print(); // Output: Printing with old printer...
