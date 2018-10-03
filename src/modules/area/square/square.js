/**
 * Calculate the Area of a Square
 * @param {Number} length Distance for Side A
 * @param {Number} width  Distance for Side B
 */

export const areaSquare = (length, width) => {
  if(typeof length !== 'number' || typeof width !== 'number') {
    return null;
  }
  return length * width
}; 