import { areaSquare } from './square';

// test format is:
// description followed by a function/callback containing a value equal to a function multiplying two numbers.
// it ends with the expected return of the multiplication
describe('area', () => {
  // checks if 2 multiplied with 2 returns 4
  test('2 * 2 should return 4', () => {
    const x = areaSquare(2, 2);
    expect(x).toBe(4);
  });

  // checks if 10 multiplied with 10 returns 100
  test('10 * 10 should return 4', () => {
    const x = areaSquare(10, 10);
    expect(x).toBe(100);
  });

  // checks if 1 multiplied with 2 returns 2
  test('1 * 2 should return 2', () => {
    const x = areaSquare(1, 2);
    expect(x).toBe(2);
  });

  // checks if an empty array multiplied with 2 returns null
  test('[] * 2 should return null', () => {
    const x = areaSquare([], 2);
    expect(x).toBe(null);
  });

  // checks if an object multiplied with 2 returns null
  test('{} * 2 should return null', () => {
    const x = areaSquare([], 2);
    expect(x).toBe(null);
  });

  // checks if a string multiplied with 2 returns null
  test(`'2' * 2 should return null`, () => {
    const x = areaSquare('2', 2);
    expect(x).toBe(null);
  });
});
