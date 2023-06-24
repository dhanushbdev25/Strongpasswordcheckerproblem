//unit testing is purformed using JEST.
const passwordChecker = require('./passwordChecker');

describe('passwordChecker', () => {
  it('should return the minimum number of changes required for a strong password', () => {
    expect(passwordChecker("")).toBe(6);
    expect(passwordChecker("password")).toBe(2);
    expect(passwordChecker("short")).toBe(2);
    expect(passwordChecker("Weeeak123")).toBe(1);
    expect(passwordChecker("StrongPassword123")).toBe(0);
  });

  it('should handle test cases', () => {
    expect(passwordChecker("a")).toBe(5);
    expect(passwordChecker("aA1")).toBe(3);
    expect(passwordChecker("1337C0d3")).toBe(0);
  });
});
