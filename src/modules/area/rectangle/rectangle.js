/**
 * Calculate the Area of a Rectangle
 * @param {Number} length Distance for side A
 * @param {Number} width  Distance for side B
 */

export const areaRectangle = (length, width) => {
  if(typeof length !== 'number' || typeof width !== 'number') {
    return null;
  }
  return length * width
}; 