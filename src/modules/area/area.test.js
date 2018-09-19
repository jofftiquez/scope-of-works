import { area } from './area';

describe('area', () => {
  test('2 * 2 should return 4', () => {
    const x = area(2, 2);
    expect(x).toBe(4);
  });
  
  test('10 * 10 should return 4', () => {
    const x = area(10, 10);
    expect(x).toBe(100);
  });

  test('1 * 2 should return 2', () => {
    const x = area(1, 2);
    expect(x).toBe(2);
  });

  test('[] * 2 should return null', () => {
    const x = area([], 2);
    expect(x).toBe(null);
  });

  test('{} * 2 should return null', () => {
    const x = area([], 2);
    expect(x).toBe(null);
  });
  
  test(`'2' * 2 should return null`, () => {
    const x = area('2', 2);
    expect(x).toBe(null);
  });
});
