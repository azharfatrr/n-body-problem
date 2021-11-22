import Vector from './Vector';

/**
 * 2D vector class models
 */

/**
 * Vector is a class models that represents a 2D vector.
 */
export class Vector2D implements Vector {
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
  public add(v: Vector2D): void {
    this.i += v.i;
    this.j += v.j;
  }

  /**
   * Add the vector v1 to the vector v2.
   * Notation: v1 + v2
   * @param v1 the first vector to be added.
   * @param v2 the second vector to be added.
   * @returns vector v1 + v2.
   */
  public static add(v1: Vector2D, v2: Vector2D): Vector2D {
    return new Vector2D(v1.i + v2.i, v1.j + v2.j);
  }

  /**
   * Subtract the current vector by the vector in parameter.
   * @param v vector to be subtracted to the current vector.
   */
  public sub(v: Vector2D): void {
    this.i -= v.i;
    this.j -= v.j;
  }

  /**
   * Subtract the vector v1 by the vector v2.
   * Notation: v1 - v2
   * @param v1 the first vector to be subtracted.
   * @param v2 the second vector to be subtracted.
   * @returns vector v1 - v2.
   */
  public static sub(v1: Vector2D, v2: Vector2D): Vector2D {
    return new Vector2D(v1.i - v2.i, v1.j - v2.j);
  }

  /**
   * Multiply the current vector by the scalar in parameter.
   * @param c scalar to be multiplied by the current vector.
   */
  public scalar(c: number): void {
    this.i *= c;
    this.j *= c;
  }

  /**
   * Multiply the vector v by the scalar c in parameter.
   * @param v vector to be multiplied by the scalar c.
   * @param c scalar multiplier.
   * @returns a vector that is the scalar product of the vector v and the scalar c.
   */
  public static scalar(v: Vector2D, c: number): Vector2D {
    return new Vector2D(v.i * c, v.j * c);
  }

  /**
   * Dot product of the current vector by the vector in parameter.
   * @param v vector to be dot producted to the current vector.
   * @returns a number that is the dot product of the current vector and the vector in parameter.
   */
  public dot(v: Vector2D): number {
    return this.i * v.i + this.j * v.j;
  }

  /**
   * Dot product of the vector v1 by the vector v2.
   * @param v1 the first vector to be dot producted.
   * @param v2 the second vector to be dot producted.
   * @returns a number that is the dot product of the vector v1 and the vector v2.
   */
  public static dot(v1: Vector2D, v2: Vector2D): number {
    return v1.i * v2.i + v1.j * v2.j;
  }
}
