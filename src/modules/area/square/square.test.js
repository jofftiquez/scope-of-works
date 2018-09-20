import { areaSquare } from './square';

describe('area', () => {
  test('2 * 2 should return 4', () => {
    const x = areaSquare(2, 2);
    expect(x).toBe(4);
  });
  
  test('10 * 10 should return 4', () => {
    const x = areaSquare(10, 10);
    expect(x).toBe(100);
  });

  test('1 * 2 should return 2', () => {
    const x = areaSquare(1, 2);
    expect(x).toBe(2);
  });

  test('[] * 2 should return null', () => {
    const x = areaSquare([], 2);
    expect(x).toBe(null);
  });

  test('{} * 2 should return null', () => {
    const x = areaSquare([], 2);
    expect(x).toBe(null);
  });
  
  test(`'2' * 2 should return null`, () => {
    const x = areaSquare('2', 2);
    expect(x).toBe(null);
  });
});
