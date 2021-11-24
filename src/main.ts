import Vector from './models/Vector';
import Force from './models/Force';
import Position from './models/Position';

console.log('Hello World');

const v1 = new Force(1, 2);
v1.add(new Force(3, 4));
const v3 = Vector.dot(v1, new Position(5, 6));
console.info(v3);
