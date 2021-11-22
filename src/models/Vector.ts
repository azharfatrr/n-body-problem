/**
 * The interface for a vector class.
 */
interface Vector {
  magnitude(): number;
  add(v: Vector): void;
  sub(v: Vector): void;
  scalar(n: number): void;
  dot(v: Vector): number;
}

export default Vector;
