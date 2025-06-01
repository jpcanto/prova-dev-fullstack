export const assertNotUndefined = <T>(value: T | undefined): T => {
  if (value === undefined) {
    throw new Error('Unexpected undefined value');
  }
  return value;
};
