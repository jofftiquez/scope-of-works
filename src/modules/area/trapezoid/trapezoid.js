/**
 * Calculate the Area of a Trapezoid.
 * ```
 * a  +--+     +
 *   +    +    | h
 *  +      +   |
 * +--------+  +
 * b
 * ```

 * @param {Number} a See ASCII art above.
 * @param {Number} b See ASCII art above.
 * @param {Number} h See ASCII art above.
 */
export const areaTrapezoid = (a, b, h) => {
  if(typeof a !== 'number' || typeof b !== 'number' || typeof h !== 'number') {
    return null;
  }
  if(a <= 0 ||  b <= 0 || h <= 0) {
    return null;
  }
  

  return ((a + b) / 2) * h;
}; 