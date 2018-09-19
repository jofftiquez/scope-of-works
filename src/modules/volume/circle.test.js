import { circleVol } from './circle';

describe('volume - circle', () => {
  test('19 and 25 arguments should return 7084.625', () => {
    const x = circleVol(19, 25);
    expect(x).toBe(7084.625);
  });

  test('[] and 25 arguments should return null', () => {
    const x = circleVol([], 25);
    expect(x).toBe(null);
  });

  test('{} and 25 arguments should return null', () => {
    const x = circleVol({}, 25);
    expect(x).toBe(null);
  });

  test(`'10' and 25 arguments should return null`, () => {
    const x = circleVol([], 25);
    expect(x).toBe(null);
  });
});