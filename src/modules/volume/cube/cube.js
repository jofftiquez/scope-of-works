/**
 * Calculate the volume of a cube/dice.
 * @param {Number} length
 */
export const cubeVol = (length) => {

  if(typeof length !== 'number') {
    return null;
  }

  return Math.pow(length, 3);
  
}