/**
 * Builder is a creational design pattern that lets you construct complex objects step by step.
 *
 * Use Case: When an object needs to be created with multiple parts and the construction process is complex.
 * Examples:
 * Document Generation: Creating documents (e.g., PDFs, Word files) with multiple sections.
 * Meal Planning: Assembling meals with customizable options (drink, main course, dessert).
 * Configuration Management: Configuring complex objects like vehicles, software setups, or APIs.
 */

class Product {
  parts: string[] = [];

  addPart(part: string): void {
    this.parts.push(part);
  }

  showParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}`);
  }
}

class ProductBuilder {
  private product: Product;

  constructor() {
    this.product = new Product();
  }

  buildPartA(): ProductBuilder {
    this.product.addPart("PartA");
    return this;
  }

  buildPartB(): ProductBuilder {
    this.product.addPart("PartB");
    return this;
  }

  buildPartC(): ProductBuilder {
    this.product.addPart("PartC");
    return this;
  }

  getProduct(): Product {
    return this.product;
  }
}

const builder = new ProductBuilder();
const product = builder.buildPartA().buildPartB().buildPartC().getProduct();
product.showParts(); // Output: Product parts: PartA, PartB, PartC
