import { rectVol } from './rectangle';

describe('volume - rectangle', () => {
  test('1, 1, 1, 1 arguments should return 1', () => {
    const x = rectVol(1, 1, 1, 1);
    expect(x).toBe(1);
  });

  test('2, 2, 2, 2 arguments should return 16', () => {
    const x = rectVol(2, 2, 2, 2);
    expect(x).toBe(16);
  });

  test('[], 2, 2, 2 arguments should return null', () => {
    const x = rectVol([], 2, 2, 2);
    expect(x).toBe(null);
  });

  test('{}, 2, 2, 2 arguments should return null', () => {
    const x = rectVol({}, 2, 2, 2);
    expect(x).toBe(null);
  });

  test(`'1', 2, 2, 2 arguments should return null`, () => {
    const x = rectVol('1', 2, 2, 2);
    expect(x).toBe(null);
  });
});