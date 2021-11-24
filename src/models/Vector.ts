/**
 * 2D vector class models
 */

/**
 * Vector is a class models that represents a 2D vector.
 */
class Vector {
  // --- ATTRIBUTES ---

  public i: number; // i component of the vector

  public j: number; // j component of the vector

  // --- METHODS ---

  /**
   * Constructor of the Vector class.
   * @param i component of the vector
   * @param j component of the vector
   */
  public constructor(i: number, j: number) {
    this.i = i;
    this.j = j;
  }

  /**
   * Calculate the magnitude of the current vector.
   * @returns the magnitude of the current vector.
   */
  public magnitude(): number {
    return Math.sqrt((this.i * this.i) + (this.j * this.j));
  }

  /**
  * Add the current vector by the vector in parameter.
  * @param v vector to be added to the current vector.
  */
  public add(v: Vector): Vector {
    this.i += v.i;
    this.j += v.j;
    return this;
  }

  /**
   * Add the vector v1 to the vector v2.
  * Notation: v1 + v2
  * @param v1 the first vector to be added.
   * @param v2 the second vector to be added.
  * @returns vector v1 + v2.
  */
  public static add(v1: Vector, v2: Vector): Vector {
    return new Vector(v1.i + v2.i, v1.j + v2.j);
  }

  /**
  * Subtract the current vector by the vector in parameter.
  * @param v vector to be subtracted to the current vector.
  */
  public sub(v: Vector): Vector {
    this.i -= v.i;
    this.j -= v.j;
    return this;
  }

  /**
  * Subtract the vector v1 by the vector v2.
   * Notation: v1 - v2
  * @param v1 the first vector to be subtracted.
  * @param v2 the second vector to be subtracted.
  * @returns vector v1 - v2.
  */
  public static sub(v1: Vector, v2: Vector): Vector {
    return new Vector(v1.i - v2.i, v1.j - v2.j);
  }

  /**
   * Normalize the current vector.
   * @returns a normalized current vector.
   */
  public normalize(): Vector {
    const magnitude = this.magnitude();
    this.i /= magnitude;
    this.j /= magnitude;
    return this;
  }

  /**
   * Normalize the current vector.
   * @param v vector to be normalized.
   * @returns a new normalized vector.
   */
  public static normalize(v: Vector): Vector {
    const magnitude = v.magnitude();
    const normVector = new Vector(v.i / magnitude, v.j / magnitude);
    return normVector;
  }

  /**
   * Multiply the current vector by the scalar in parameter.
   * @param c scalar to be multiplied by the current vector.
   * @returns a current vector that is the scalar product of the scalar c and the current vector.
   */
  public scalar(c: number): Vector {
    this.i *= c;
    this.j *= c;
    return this;
  }

  /**
   * Multiply the vector v by the scalar c in parameter.
   * @param v vector to be multiplied by the scalar c.
   * @param c scalar multiplier.
   * @returns a vector that is the scalar product of the vector v and the scalar c.
   */
  public static scalar(v: Vector, c: number): Vector {
    return new Vector(v.i * c, v.j * c);
  }

  /**
   * Dot product of the current vector by the vector in parameter.
   * @param v vector to be dot producted to the current vector.
   * @returns a number that is the dot product of the current vector and the vector in parameter.
   */
  public dot(v: Vector): number {
    return this.i * v.i + this.j * v.j;
  }

  /**
   * Dot product of the vector v1 by the vector v2.
   * @param v1 the first vector to be dot producted.
   * @param v2 the second vector to be dot producted.
   * @returns a number that is the dot product of the vector v1 and the vector v2.
   */
  public static dot(v1: Vector, v2: Vector): number {
    return v1.i * v2.i + v1.j * v2.j;
  }
}

export default Vector;
