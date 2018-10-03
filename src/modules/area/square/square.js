/**
 * Calculate the Area of a Square
 * @param {Number} length Length of a square
 * @return Area of square
 */
export const areaSquare = (length) => {
  if(typeof length !== 'number') {
    return null;
  }
  return Math.pow(length, 2);
}; 