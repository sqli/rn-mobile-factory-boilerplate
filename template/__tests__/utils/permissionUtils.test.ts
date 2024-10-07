import { Platform } from 'react-native';

import { check, request, RESULTS } from 'react-native-permissions';

import { checkIosAndAndroidPermission } from '@utils/permissionUtils';

describe('permissionUtils', () => {
  const iosPermission = 'ios.permission.CAMERA';
  const androidPermission = 'android.permission.CAMERA';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('checkPermission', () => {
    it('should resolve if permission is granted', async () => {
      (check as jest.Mock).mockResolvedValue(RESULTS.GRANTED);

      await expect(
        checkIosAndAndroidPermission(iosPermission, androidPermission),
      ).resolves.toBeUndefined();
    });

    it('should request permission if denied and resolve if granted', async () => {
      (check as jest.Mock).mockResolvedValue(RESULTS.DENIED);
      (request as jest.Mock).mockResolvedValue(RESULTS.GRANTED);

      await expect(
        checkIosAndAndroidPermission(iosPermission, androidPermission),
      ).resolves.toBeUndefined();
    });

    it('should reject if permission is denied after request', async () => {
      (check as jest.Mock).mockResolvedValue(RESULTS.DENIED);
      (request as jest.Mock).mockResolvedValue(RESULTS.DENIED);

      await expect(checkIosAndAndroidPermission(iosPermission, androidPermission)).rejects.toThrow(
        'denied',
      );
    });

    it('should reject if check throws an error', async () => {
      const error = new Error('check error');
      (check as jest.Mock).mockRejectedValue(error);

      await expect(checkIosAndAndroidPermission(iosPermission, androidPermission)).rejects.toThrow(
        'check error',
      );
    });

    it('should reject if request throws an error', async () => {
      (check as jest.Mock).mockResolvedValue(RESULTS.DENIED);
      const error = new Error('request error');
      (request as jest.Mock).mockRejectedValue(error);

      await expect(checkIosAndAndroidPermission(iosPermission, androidPermission)).rejects.toThrow(
        'request error',
      );
    });
  });

  describe('checkIosAndAndroidPermission', () => {
    it('should call checkPermission with iosPermission on iOS', async () => {
      Platform.OS = 'ios';
      (check as jest.Mock).mockResolvedValue(RESULTS.GRANTED);

      await checkIosAndAndroidPermission(iosPermission, androidPermission);

      expect(check).toHaveBeenCalledWith(iosPermission);
    });

    it('should call checkPermission with androidPermission on Android', async () => {
      Platform.OS = 'android';
      (check as jest.Mock).mockResolvedValue(RESULTS.GRANTED);

      await checkIosAndAndroidPermission(iosPermission, androidPermission);

      expect(check).toHaveBeenCalledWith(androidPermission);
    });
  });
});
