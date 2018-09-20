export const areaTrapezoid = (a, b, h) => {
  if(typeof a !== 'number' || typeof b !== 'number' || typeof h !== 'number') {
    return null;
  }
  return ((a + b) / 2) * h;
}; 