import * as Device from 'expo-device';

/**
 * Get device information as a formatted string
 * @returns {Promise<string>} Device information string
 */
export async function getDeviceInfo() {
  try {
    const deviceInfo = {
      brand: Device.brand || 'Unknown',
      modelName: Device.modelName || 'Unknown',
      deviceName: Device.deviceName || 'Unknown',
      osName: Device.osName || 'Unknown',
      osVersion: Device.osVersion || 'Unknown',
      platform: Device.platform || 'Unknown',
    };

    // Format device info string
    // Priority: modelName > deviceName > brand
    const deviceModel = deviceInfo.modelName !== 'Unknown' 
      ? deviceInfo.modelName 
      : deviceInfo.deviceName !== 'Unknown' 
        ? deviceInfo.deviceName 
        : `${deviceInfo.brand} Device`;

    const infoString = `${deviceModel} (${deviceInfo.osName} ${deviceInfo.osVersion})`;
    
    return infoString;
  } catch (error) {
    console.error('Error getting device info:', error);
    return 'Unknown Device';
  }
}

/**
 * Get detailed device information object
 * @returns {Promise<object>} Device information object
 */
export async function getDeviceInfoDetailed() {
  try {
    return {
      brand: Device.brand || 'Unknown',
      modelName: Device.modelName || 'Unknown',
      deviceName: Device.deviceName || 'Unknown',
      osName: Device.osName || 'Unknown',
      osVersion: Device.osVersion || 'Unknown',
      platform: Device.platform || 'Unknown',
      deviceType: Device.deviceType || 'Unknown',
      totalMemory: Device.totalMemory || null,
    };
  } catch (error) {
    console.error('Error getting detailed device info:', error);
    return {
      brand: 'Unknown',
      modelName: 'Unknown',
      deviceName: 'Unknown',
      osName: 'Unknown',
      osVersion: 'Unknown',
      platform: 'Unknown',
    };
  }
}

