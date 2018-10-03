import { cubeVol } from './cube';

describe('volume - cube', () => {
  test('1 argument should return 1', () => {
    const x = cubeVol(1);
    expect(x).toBe(1);
  });

  test('2 arguments should return 8', () => {
    const x = cubeVol(2);
    expect(x).toBe(8);
  });

  test('[] arguments should return null', () => {
    const x = cubeVol([]);
    expect(x).toBe(null);
  });

  test('{} arguments should return null', () => {
    const x = cubeVol({});
    expect(x).toBe(null);
  });

  test(`'1' arguments should return null`, () => {
    const x = cubeVol('1');
    expect(x).toBe(null);
  });
});