/**
 * Observer Pattern is a behavioral design pattern that defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
 *
 * Use Case: When multiple objects need to listen and react to changes in the state of another object
 * Examples:
 * Event Systems: Subscribing to UI events like button clicks.
 * Real-Time Applications: Chat applications where users are notified of new messages.
 * Stock Market Applications: Updating stock prices for multiple viewers.
 */

class Subject {
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update());
  }
}

interface Observer {
  update(): void;
}

class ConcreteObserver implements Observer {
  constructor(private name: string) {}

  update(): void {
    console.log(`${this.name} has been notified.`);
  }
}

const subject = new Subject();
const observer1 = new ConcreteObserver("Observer1");
const observer2 = new ConcreteObserver("Observer2");

subject.attach(observer1);
subject.attach(observer2);

subject.notify();
// Output:
// Observer1 has been notified.
// Observer2 has been notified.
