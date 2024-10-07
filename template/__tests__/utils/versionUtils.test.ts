import versionUtils from '@utils/versionUtils';

describe('versionUtils.compareVersionNumbers', () => {
  it('should return 0 when versions are equal', () => {
    expect(versionUtils.compareVersionNumbers('1.0.0', '1.0.0')).toBe(0);
  });

  it('should return a negative number when the first version is less than the second', () => {
    expect(versionUtils.compareVersionNumbers('1.0.0', '1.0.1')).toBeLessThan(0);
    expect(versionUtils.compareVersionNumbers('1.0.0', '1.1.0')).toBeLessThan(0);
    expect(versionUtils.compareVersionNumbers('1.0.0', '2.0.0')).toBeLessThan(0);
  });

  it('should return a positive number when the first version is greater than the second', () => {
    expect(versionUtils.compareVersionNumbers('1.0.1', '1.0.0')).toBeGreaterThan(0);
    expect(versionUtils.compareVersionNumbers('1.1.0', '1.0.0')).toBeGreaterThan(0);
    expect(versionUtils.compareVersionNumbers('2.0.0', '1.0.0')).toBeGreaterThan(0);
  });
});
