/**
 * Calculate the volume of a rectangular box.
 * @param {Number} lengthX 
 * @param {Number} lengthY 
 * @param {Number} thickness 
 * @param {Number} footing 
 */
export const blockVol = (lengthX, lengthY, thickness, footing) => {

  if(typeof lengthX !== 'number' ||
     typeof lengthY !== 'number' || 
     typeof thickness !== 'number' ||
     typeof footing !== 'number'
    ) {
    return null;
  }
  if( lengthX <= 0 ||
      lengthY <= 0 || 
      thickness <= 0 ||
      footing <= 0
    ) {
    return null; 
  }

  return lengthX * lengthX * thickness * footing;
  
}