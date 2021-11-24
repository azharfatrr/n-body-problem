import Vector from './Vector';
import Velocity from './Velocity';
import Acceleration from './Acceleration';

// Module representing kinematic objects.

/**
 * Position class.
 * It's a vector that represents a Position.
 */
class Position extends Vector {
  // --- METHODS ---
  /**
   * Relative position between this position to the other position.
   * @param other position to be compared.
   * @returns the relative position between this position to the other position.
   */
  public relativeTo(other: Position): Vector {
    return new Vector(other.i - this.i, other.j - this.j);
  }

  /**
   * Relative position between this position from the other position.
   * @param other position to be compared.
   * @returns the relative position between this position from the other position.
   */
  public relativeFrom(other: Position): Vector {
    return new Vector(this.i - other.i, this.j - other.j);
  }

  /**
   * Calculate the distance between this position and the other position.
   * @param other position to be compared.
   * @returns the distance between this position and the other position.
   */
  public distance(other: Position): number {
    const relative = this.relativeTo(other);
    return relative.magnitude();
  }

  /**
   * Calculate the position based on the velocity and the time.
   * @param v velocity of the object.
   * @param a acceleration of the object.
   * @param t time after which the position is calculated.
   */
  public afterTime(v: Velocity, a: Acceleration, t: number): void {
    const totalDisplacement = Position.add(v.displacement(t), a.displacement(t));
    this.add(totalDisplacement);
  }
}

export default Position;
