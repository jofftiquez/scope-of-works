// returns length multiplied with width, unless either of them doesen't equal 'number'
export const areaSquare = (length, width) => {
  if(typeof length !== 'number' || typeof width !== 'number') {
    return null;
  }
  return length * width
};