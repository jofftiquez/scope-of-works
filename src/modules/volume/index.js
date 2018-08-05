export const circleVol = (diameter, length) => {

  let who = 'Circle Volume';

  if(typeof diameter !== 'number') {
    throw {
      message: `${who} Error - diameter must be a number, got ${typeof diameter}.`
    }
  }

  if(typeof length !== 'number') {
    throw {
      message: `${who} Error - length must be a number, got ${typeof length}.`
    }
  }
    
  return 3.14 * (Math.pow(diameter, 2)) * 0.25 * length;
}

export const rectVol = (lengthX, lengthY, thickness, footing) => {
  
  let who = 'Rectangle Volume';

  if(typeof lengthX !== 'number') {
    throw {
      message: `${who} Error - lengthX must be a number, got ${typeof lengthX}.`
    }
  }

  if(typeof lengthY !== 'number') {
    throw {
      message: `${who} Error - lengthY must be a number, got ${typeof lengthY}.`
    }
  }

  if(typeof thickness !== 'number') {
    throw {
      message: `${who} Error - thickness must be a number, got ${typeof thickness}.`
    }
  }

  if(typeof footing !== 'number') {
    throw {
      message: `${who} Error - footing must be a number, got ${typeof footing}.`
    }
  }

  return lengthX * lengthX * thickness * footing;

}