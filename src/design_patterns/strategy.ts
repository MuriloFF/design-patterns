/**
 * Strategy Pattern is a behavioral design pattern that defines a family of algorithms, encapsulates each algorithm, and makes them interchangeable. Strategy lets the algorithm vary independently from the clients that use it.
 *
 * Use Case: When the client code needs to select an algorithm from a family of algorithms at runtime.
 * Examples:
 * Sorting Algorithms: Selecting between Quick Sort, Merge Sort, or Bubble Sort based on the data size.
 * Payment Processing: Choosing between Credit Card, PayPal, or Stripe payment methods at runtime.
 * Image Processing: Applying different filters (e.g., Sepia, Black & White, or Invert) to an image.
 */

interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using Credit Card.`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using PayPal.`);
  }
}

class ShoppingCart {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  checkout(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

const cart1 = new ShoppingCart(new CreditCardPayment());
cart1.checkout(100); // Output: Paid $100 using Credit Card.

const cart2 = new ShoppingCart(new PayPalPayment());
cart2.checkout(200); // Output: Paid $200 using PayPal.
