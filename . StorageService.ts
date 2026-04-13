import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageService = {
  // Save script data
  saveData: async (key: string, value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@ScriptFlow_${key}`, jsonValue);
    } catch (e) {
      console.error("Storage Error:", e);
    }
  },

  // Retrieve script data
  getData: async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@ScriptFlow_${key}`);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error("Fetch Error:", e);
    }
  },

  // List all keys (Crucial for the Logic Runner profile)
  getAllKeys: async () => {
    let keys: string[] = [];
    try {
      keys = await AsyncStorage.getAllKeys();
      return keys.filter(k => k.startsWith('@ScriptFlow_'));
    } catch (e) {
      return [];
    }
  }
};
