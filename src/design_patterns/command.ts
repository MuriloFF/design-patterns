/**
 * Command Pattern is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as
 * arguments, delay or queue a request's execution, and support undoable operations.
 *
 * Use Case: When you need to encapsulate a request as an object to delay execution, queue it, or log commands.
 * Examples:
 * Remote Controls: Turning on/off devices (e.g., TV, Light) using remote controls.
 * Queuing Systems: Managing requests in a queue to support undoable operations.
 * Transaction Management: Executing database transactions as command objects.
 */

interface Command {
  execute(): void;
}

class Light {
  on(): void {
    console.log("Light is ON");
  }

  off(): void {
    console.log("Light is OFF");
  }
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.on();
  }
}

class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.off();
  }
}

class RemoteControl {
  private command: Command | null = null;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
    this.command?.execute();
  }
}

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();
remote.setCommand(lightOn);
remote.pressButton(); // Output: Light is ON

remote.setCommand(lightOff);
remote.pressButton(); // Output: Light is OFF
