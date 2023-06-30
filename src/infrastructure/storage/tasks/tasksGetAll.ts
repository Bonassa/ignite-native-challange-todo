import AsyncStorage from '@react-native-async-storage/async-storage';

import { TaskScheme } from './tasks.types';
import { TASK_COLLECTION } from '../storageConfig';

const tasksGetAll = async (): Promise<TaskScheme[]> => {
  try {
    const storage = await AsyncStorage.getItem(TASK_COLLECTION);

    if (storage) {
      return JSON.parse(storage);
    }

    return [];
  } catch (error) {
    console.log('[Storage Error] -> ', error);
    throw error;
  }
};

export { tasksGetAll };
