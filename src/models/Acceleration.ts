import Vector from './Vector';
import Position from './Position';
import Velocity from './Velocity';

/**
 * Acceleration class.
 * It's a vector that represents an Acceleration.
 */
class Acceleration extends Vector {
  // --- METHODS ---
  /**
   * Calculate the acceleration based on the position and the time.
   * @param p1 first velocity of the object.
   * @param p2 second velocity of the object.
   * @param t time between the two positions.
   * @returns the acceleration of the object.
   */
  public static calculate(v1: Velocity, v2: Velocity, t: number): Acceleration {
    const i = (v2.i - v1.i) / t;
    const j = (v2.j - v1.j) / t;
    return new Acceleration(i, j);
  }

  /**
   * Return the displacement of the current acceleration after a given time.
   * @param t time after which the displacement is calculated.
   * @returns the displacement of the current acceleration after a given time.
   */
  public displacement(t: number): Vector {
    const i = (1 / 2) * this.i * (t ** 2);
    const j = (1 / 2) * this.j * (t ** 2);
    return new Vector(i, j);
  }
}

export default Acceleration;
