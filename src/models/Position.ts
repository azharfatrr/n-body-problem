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
   * Calculate the position based on the velocity and the time.
   * @param v velocity of the object.
   * @param a acceleration of the object.
   * @param t time after which the position is calculated.
   */
  public new_position(v: Velocity, a: Acceleration, t: number): void {
    const totalDisplacement = Position.add(v.displacement(t), a.displacement(t));
    this.add(totalDisplacement);
  }
}

export default Position;
