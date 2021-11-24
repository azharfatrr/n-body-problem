import Vector from './Vector';
import Position from './Position';
import Velocity from './Velocity';

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
}

export default CelestialObject;
