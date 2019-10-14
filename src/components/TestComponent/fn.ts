export type TestType = 'hello' | 'world';
export type AnotherTest = TestType | 'nice' | 'day';

// Parsing error at `is` at `x is T`
export function isDefined<T>(x: T|undefined): x is T {
  return x !== undefined;
}

// Parsing error at `extends` at `T extends TestType`
export function fn<T extends TestType>(x: T) {
  return x
}

// Parsing error at `as` at `x as ...`
export function fn2<T = AnotherTest>(x: T): TestType {
  return x as unknown as TestType;
}
