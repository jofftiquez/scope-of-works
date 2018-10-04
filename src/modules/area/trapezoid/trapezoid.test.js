import { areaTrapezoid } from './trapezoid';

describe('area - Trapezoid', () => {
  test('1, 2, 3 should return 4.5', () => {
    const x = areaTrapezoid(1, 2, 3);
    expect(x).toBe(4.5);
  });
  
  test('10, 20, 5 should return 75', () => {
    const x = areaTrapezoid(10, 20, 5);
    expect(x).toBe(75);
  });

  test('[], 1, 2 should return null', () => {
    const x = areaTrapezoid([], 1, 2);
    expect(x).toBe(null);
  });

  test('{}, 1, 2 should return null', () => {
    const x = areaTrapezoid({}, 1, 2);
    expect(x).toBe(null);
  });
  
  test(`'1', 2, 3 should return null`, () => {
    const x = areaTrapezoid('1', 2, 3);
    expect(x).toBe(null);
  });

  test('0, 0, 0 should return null', () => {
    const x = areaTrapezoid(0, 0, 0);
    expect(x).toBe(null);
  });

  test('1, 2, 0 should return null', () => {
    const x = areaTrapezoid(1, 2, 0);
    expect(x).toBe(null);
  });

  test('1, 0, 2 should return null', () => {
    const x = areaTrapezoid(1, 0, 2);
    expect(x).toBe(null);
  });

  test('0, 1, 2 should return null', () => {
    const x = areaTrapezoid(0, 1, 2);
    expect(x).toBe(null);
  });

  test('-1, 1, 2 should return null', () => {
    const x = areaTrapezoid(-1, 1, 2);
    expect(x).toBe(null);
  });

  test('1, -1, 2 should return null', () => {
    const x = areaTrapezoid(1, -1, 2);
    expect(x).toBe(null);
  });

  test('1, 2, -1 should return null', () => {
    const x = areaTrapezoid(1, 2, -1);
    expect(x).toBe(null);
  });


});
