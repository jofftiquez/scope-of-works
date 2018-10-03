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
});
