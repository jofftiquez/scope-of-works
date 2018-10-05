/**
 * Calculate the volume of a disk
 * @param {Number} diameter Diameter of the disk
 * @param {Number} height Height of the disk
 */

export const diskVol = (diameter, height) => {

  if(typeof diameter !== 'number' || typeof height !== 'number') {
    return null;
  }
  
  if(diameter <= 0 || height <= 0 ) {
    return null;
  }
  
  return 3.14 * (Math.pow(diameter, 2)) * 0.25 * height;
}