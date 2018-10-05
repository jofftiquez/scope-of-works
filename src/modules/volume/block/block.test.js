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

  test(`0, 1, 2, 2 arguments should return null`, () => {
    const x = blockVol(0, 1, 2, 2);
    expect(x).toBe(null);
  });

  test(`1, 0, 2, 2 arguments should return null`, () => {
    const x = blockVol(1, 0, 2, 2);
    expect(x).toBe(null);
  });

  test(`1, 2, 0, 2 arguments should return null`, () => {
    const x = blockVol(1, 2, 0, 2);
    expect(x).toBe(null);
  });

  test(`1, 2, 2, 0 arguments should return null`, () => {
    const x = blockVol(1, 2, 2, 0);
    expect(x).toBe(null);
  });

  test(`-1, 1, 2, 2 arguments should return null`, () => {
    const x = blockVol(-1, 1, 2, 2);
    expect(x).toBe(null);
  });

  test(`1, -1, 2, 2 arguments should return null`, () => {
    const x = blockVol(1, -1, 2, 2);
    expect(x).toBe(null);
  });

  test(`1, 2, -1, 2 arguments should return null`, () => {
    const x = blockVol(1, 2, -1, 2);
    expect(x).toBe(null);
  });
  
  test(`1, 2, 2, -1 arguments should return null`, () => {
    const x = blockVol(1, 2, 2, -1);
    expect(x).toBe(null);
  });

});