import Vector from './Vector';
import CelestialObject from './CelestialObject';
import Acceleration from './Acceleration';

/**
 * Force class.
 * It's a vector that represents a force.
 */
class Force extends Vector {
  // --- METHODS ---

  /**
   * Calculate the acceleration of the object based on the current force.
   * @param m mass of the object.
   * @returns the acceleration of the object.
   */
  public toAcceleration(m: number): Acceleration {
    return new Acceleration(this.i / m, this.j / m);
  }

  /**
   * Calculate the acceleration of the object based on the force.
   * @param f force to be converted.
   * @param m mass of the object.
   * @returns the acceleration of the object.
   */
  public static ToAcceleration(f: Force, m: number): Acceleration {
    return new Acceleration(f.i / m, f.j / m);
  }

  /**
   * Calculate the force on the object based on the acceleration.
   * @param a acceleration to be converted.
   * @param m mass of the object.
   * @returns the force of that happens on the object.
   */
  public static fromAcceleration(a: Acceleration, m: number): Force {
    return new Force(a.i * m, a.j * m);
  }

  /**
   * Gravitational force between from m1 to m2.
   * @param ob1 first object.
   * @param ob2 second object.
   * @returns the gravitational force between the two objects.
   */
  public static gravitation(ob1: CelestialObject, ob2: CelestialObject): Force {
    // Relative position.
    const r = ob1.position.relativeTo(ob2.position);
    // Distance.
    const d = r.magnitude();
    // Amount of force.
    const f = (ob1.mass * ob2.mass) / (d ** 2);
    // Force vector.
    const fv = r.normalize().scalar(f);

    return fv as Force;
  }

  public static acceleration(ob1: CelestialObject, ob2: CelestialObject): Acceleration {
    // Gravitational force.
    const f = Force.gravitation(ob1, ob2);
    // Acceleration.
    const a = f.toAcceleration(ob1.mass);

    return a as Acceleration;
  }
}

export default Force;
