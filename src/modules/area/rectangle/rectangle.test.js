import { areaRectangle } from './rectangle';

describe('area - rectangle', () => {
  test('2 * 2 should return 4', () => {
    const x = areaRectangle(2, 2);
    expect(x).toBe(4);
  });
  
  test('10 * 10 should return 4', () => {
    const x = areaRectangle(10, 10);
    expect(x).toBe(100);
  });

  test('1 * 2 should return 2', () => {
    const x = areaRectangle(1, 2);
    expect(x).toBe(2);
  });

  test('[] * 2 should return null', () => {
    const x = areaRectangle([], 2);
    expect(x).toBe(null);
  });

  test('{} * 2 should return null', () => {
    const x = areaRectangle([], 2);
    expect(x).toBe(null);
  });
  
  test(`'2' * 2 should return null`, () => {
    const x = areaRectangle('2', 2);
    expect(x).toBe(null);
  });
});
