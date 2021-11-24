import Vector from './Vector';
import Position from './Position';
import Velocity from './Velocity';
import Force from './Force';

/**
 * CelestialObject is a class that represents an object in the simulation.
 */
class CelestialObject {
  // --- ATTRIBUTES ---

  public position: Position; // position of the object

  public velocity: Velocity; // velocity of the object

  public mass: number; // mass of the object

  /**
   * Constructor of the class.
   * @param position position of the object.
   * @param velocity velocity of the object.
   * @param mass mass of the object.
   */
  public constructor(position: Position, velocity: Velocity, mass: number) {
    this.position = position;
    this.velocity = velocity;
    this.mass = mass;
  }

  // --- METHODS ---
  /**
   * The interaction of current object given total force.
   * @param totalForce total force of the system.
   * @param time amount of time to be simulated.
   * @returns the current object after interaction with force.
   */
  public interaction(totalForce: Force, time: number): CelestialObject {
    // BEFORE MOVE POSITION.
    // Calculate the acceleration from all the forces applied to the object.
    const acceleration = totalForce.toAcceleration(this.mass);
    // Change the velocity of the object by the acceleration.
    this.velocity.after(acceleration, time);
    // Change the position of the object by the velocity and the acceleration.
    this.position.after(this.velocity, acceleration, time);

    return this;
  }
}

export default CelestialObject;
