export const rectVol = (lengthX, lengthY, thickness, footing) => {

  if(typeof lengthX !== 'number' ||
     typeof lengthY !== 'number' || 
     typeof thickness !== 'number' ||
     typeof footing !== 'number'
    ) {
    return null;
  }

  return lengthX * lengthX * thickness * footing;
  
}