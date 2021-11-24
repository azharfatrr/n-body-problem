import Acceleration from './Acceleration';
import Position from './Position';
import Vector from './Vector';

/**
 * Velocity class.
 * It's a vector that represents a Velocity.
 */
export class Velocity extends Vector {
  // --- METHODS ---
  /**
   * Calculate the velocity based on the position and the time.
   * @param p1 first position of the object.
   * @param p2 second position of the object.
   * @param t time between the two positions.
   * @returns the velocity of the object.
   */
  public static average(p1: Position, p2: Position, t: number): Velocity {
    const i = (p2.i - p1.i) / t;
    const j = (p2.j - p1.j) / t;
    return new Velocity(i, j);
  }

  /**
   * Change the current velocity by the acceleration.
   * @param a acceleration to be added to the current velocity.
   * @param t time after which the acceleration is applied.
   */
  public newTime(a: Acceleration, t: number): void {
    this.i += a.i * t;
    this.j += a.j * t;
  }

  /**
   * Return the position of the current velocity after a given time.
   * @param t time after which the displacement is calculated.
   * @returns the displacement of the current velocity after a given time.
   */
  public displacement(t: number): Vector {
    return new Vector(this.i * t, this.j * t);
  }
}

export default Velocity;
