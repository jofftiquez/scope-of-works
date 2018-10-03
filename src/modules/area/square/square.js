/**
 * Calculate the Area of a Rectangle
 * @param {Number} length Length of a cube
 */

export const areaSquare = (length) => {
  if(typeof length !== 'number') {
    return null;
  }
  return Math.pow(length, 2);
}; 