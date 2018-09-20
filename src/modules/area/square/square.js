export const areaSquare = (length, width) => {
  if(typeof length !== 'number' || typeof width !== 'number') {
    return null;
  }
  return length * width
}; 