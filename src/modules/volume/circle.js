export const circleVol = (diameter, length) => {

  if(typeof diameter !== 'number' || typeof length !== 'number') {
    return null;
  }

  return 3.14 * (Math.pow(diameter, 2)) * 0.25 * length;
  
}