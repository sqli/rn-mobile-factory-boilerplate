import {
  getDateInDDMMYYYY,
  getTimestampFromString,
  getIsDateBeforeAnother,
  convertUTCDateToLocalDate,
} from '@utils/datesUtils';

describe('datesUtils', () => {
  describe('getDateInDDMMYYYY', () => {
    it('should format date string to DD.MM.YYYY', () => {
      const date = '2023-10-05';
      const formattedDate = getDateInDDMMYYYY(date);
      expect(formattedDate).toBe('05.10.2023');
    });
  });

  describe('getTimestampFromString', () => {
    it('should return the correct timestamp for a given date string', () => {
      const dateString = '2023-10-05T00:00:00Z';
      const timestamp = getTimestampFromString(dateString);
      expect(timestamp).toBe(new Date(dateString).getTime());
    });
  });

  describe('getIsDateBeforeAnother', () => {
    it('should return true if the first date is before the second date', () => {
      const oneDate = '2023-10-05T00:00:00Z';
      const anotherDate = '2023-10-06T00:00:00Z';
      const result = getIsDateBeforeAnother(oneDate, anotherDate);
      expect(result).toBe(true);
    });

    it('should return false if the first date is not before the second date', () => {
      const oneDate = '2023-10-06T00:00:00Z';
      const anotherDate = '2023-10-05T00:00:00Z';
      const result = getIsDateBeforeAnother(oneDate, anotherDate);
      expect(result).toBe(false);
    });
  });

  describe('convertUTCDateToLocalDate', () => {
    it('should convert UTC date to local date', () => {
      const utcDate = new Date('2023-10-05T00:00:00Z');
      const localDate = convertUTCDateToLocalDate(utcDate);
      const expectedDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60 * 1000);
      const offset = utcDate.getTimezoneOffset() / 60;
      expectedDate.setHours(utcDate.getHours() - offset);
      expect(localDate).toEqual(expectedDate);
    });
  });
});
