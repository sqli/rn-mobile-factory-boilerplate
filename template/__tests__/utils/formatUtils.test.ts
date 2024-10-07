import { convertEnumToObject, deepCopy } from '@utils/formatUtils';

describe('formatUtils', () => {
  describe('convertEnumToObject', () => {
    enum TestEnum {
      A = 'A',
      B = 'B',
      C = 'C',
    }

    it('should convert enum to object with fill value', () => {
      const fillValue = 42;
      const result = convertEnumToObject(TestEnum, fillValue);
      const expected = {
        A: fillValue,
        B: fillValue,
        C: fillValue,
      };
      expect(result).toEqual(expected);
    });

    it('should handle empty enum', () => {
      const fillValue = 'test';
      const result = convertEnumToObject({}, fillValue);
      expect(result).toEqual({});
    });
  });

  describe('deepCopy', () => {
    it('should create a deep copy of an object', () => {
      const original = { a: 1, b: { c: 2 } };
      const copy = deepCopy(original);
      expect(copy).toEqual(original);
      expect(copy).not.toBe(original);
      expect(copy.b).not.toBe(original.b);
    });

    it('should create a deep copy of an array', () => {
      const original = [1, 2, { a: 3 }];
      const copy = deepCopy(original);
      expect(copy).toEqual(original);
      expect(copy).not.toBe(original);
      expect(copy[2]).not.toBe(original[2]);
    });
  });
});
