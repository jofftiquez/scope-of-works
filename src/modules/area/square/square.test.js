import { areaSquare } from './square';

describe('area - square', () => {

  test('1 * 1 should return 1', () => {
    const x = areaSquare(1);
    expect(x).toBe(1);
  });

  test('2 * 2 should return 4', () => {
    const x = areaSquare(2);
    expect(x).toBe(4);
  });
  
  test('10 * 10 should return 4', () => {
    const x = areaSquare(10);
    expect(x).toBe(100);
  });

  test('[] * 2 should return null', () => {
    const x = areaSquare([]);
    expect(x).toBe(null);
  });

  test('{} * 2 should return null', () => {
    const x = areaSquare([]);
    expect(x).toBe(null);
  });
  
  test(`'2' * 2 should return null`, () => {
    const x = areaSquare('2');
    expect(x).toBe(null);
  });
});
