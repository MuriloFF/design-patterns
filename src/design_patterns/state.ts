/**
 * State Pattern is a behavioral design pattern that allows an object to alter its behavior when its internal state changes. The object will appear to change its class.
 *
 * Use Case: When the object's behavior depends on its state and it must change its behavior at runtime.
 * Examples:
 * State Machines: Implementing state machines for different states.
 * ATM Machines: States like idle, processing transaction, or out of service.
 * Media Players: Different behaviors for playing, paused, and stopped states.
 */

interface State {
  handle(): void;
}

class HappyState implements State {
  handle(): void {
    console.log("I am in a happy state!");
  }
}

class SadState implements State {
  handle(): void {
    console.log("I am in a sad state.");
  }
}

class Individual {
  private state: State | null = null;

  setState(state: State): void {
    this.state = state;
  }

  behave(): void {
    this.state?.handle();
  }
}

const person = new Individual();

person.setState(new HappyState());
person.behave(); // Output: I am in a happy state!

person.setState(new SadState());
person.behave(); // Output: I am in a sad state.
