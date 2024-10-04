import * as Keychain from 'react-native-keychain';

import keychainManager from '@managers/keychainManager';

describe('keychainManager', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getItem', () => {
    it('should return null if no credentials are found', async () => {
      (Keychain.getInternetCredentials as jest.Mock).mockResolvedValue(false);
      const result = await keychainManager.getItem('testKey');
      expect(result).toBeNull();
    });

    it('should return null if password is "null"', async () => {
      (Keychain.getInternetCredentials as jest.Mock).mockResolvedValue({ password: 'null' });
      const result = await keychainManager.getItem('testKey');
      expect(result).toBeNull();
    });

    it('should return the password if credentials are found', async () => {
      (Keychain.getInternetCredentials as jest.Mock).mockResolvedValue({
        password: 'testPassword',
      });
      const result = await keychainManager.getItem('testKey');
      expect(result).toBe('testPassword');
    });

    it('should reject with an error if getInternetCredentials fails', async () => {
      const error = new Error('Failed to get credentials');
      (Keychain.getInternetCredentials as jest.Mock).mockRejectedValue(error);
      await expect(keychainManager.getItem('testKey')).rejects.toThrow(error);
    });
  });

  describe('setItem', () => {
    it('should resolve if credentials are set successfully', async () => {
      (Keychain.setInternetCredentials as jest.Mock).mockResolvedValue(undefined);
      await expect(
        keychainManager.setItem('testKey', 'testItem', 'testUser'),
      ).resolves.toBeUndefined();
    });

    it('should reject with an error if setInternetCredentials fails', async () => {
      const error = new Error('Failed to set credentials');
      (Keychain.setInternetCredentials as jest.Mock).mockRejectedValue(error);
      await expect(keychainManager.setItem('testKey', 'testItem', 'testUser')).rejects.toThrow(
        error,
      );
    });
  });

  describe('removeItem', () => {
    it('should resolve if credentials are removed successfully', async () => {
      (Keychain.resetInternetCredentials as jest.Mock).mockResolvedValue(undefined);
      await expect(keychainManager.removeItem('testKey')).resolves.toBeUndefined();
    });

    it('should reject with an error if resetInternetCredentials fails', async () => {
      const error = new Error('Failed to remove credentials');
      (Keychain.resetInternetCredentials as jest.Mock).mockRejectedValue(error);
      await expect(keychainManager.removeItem('testKey')).rejects.toThrow(error);
    });
  });
});
