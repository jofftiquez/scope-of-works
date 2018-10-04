// TypeScript Version: 3.1.1

export function area<T>(a: number, b: number, h: number): number | T;
export function area<T>(length?: number, width?: number): number | T;
export function volume<T>(lengthX: number, lengthY: number, thickness: number, footing: number): number | T;
export function volume<T>(diameter: number, height: number): number | T;
export function volume<T>(length: number): number | T;
