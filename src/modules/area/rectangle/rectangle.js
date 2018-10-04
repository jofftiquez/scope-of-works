/**
 * Calculate the Area of a Rectangle
 * @param {Number} length Distance for side A
 * @param {Number} width  Distance for side B
 * @return Area of rectangle
 */
export const areaRectangle = (length, width) => {
  if(typeof length !== 'number' || typeof width !== 'number') {
    return null;
  }

  if(length <= 0 || typeof width <=0 ) {
    return null;
  }
  
  return length * width
}; 