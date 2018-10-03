import { blockVol } from './block';

describe('volume - block', () => {
  test('1, 1, 1, 1 arguments should return 1', () => {
    const x = blockVol(1, 1, 1, 1);
    expect(x).toBe(1);
  });

  test('2, 2, 2, 2 arguments should return 16', () => {
    const x = blockVol(2, 2, 2, 2);
    expect(x).toBe(16);
  });

  test('[], 2, 2, 2 arguments should return null', () => {
    const x = blockVol([], 2, 2, 2);
    expect(x).toBe(null);
  });

  test('{}, 2, 2, 2 arguments should return null', () => {
    const x = blockVol({}, 2, 2, 2);
    expect(x).toBe(null);
  });

  test(`'1', 2, 2, 2 arguments should return null`, () => {
    const x = blockVol('1', 2, 2, 2);
    expect(x).toBe(null);
  });
});