import AsyncStorage from '@react-native-async-storage/async-storage';

import { tasksGetAll } from './tasksGetAll';
import { TASK_COLLECTION } from '../storageConfig';

const tasksRemoveById = async (id: string): Promise<void> => {
  try {
    const storage = await tasksGetAll();
    const filtered = storage.filter(tasks => tasks.id !== id);
    const toStorage = JSON.stringify(filtered);

    await AsyncStorage.setItem(TASK_COLLECTION, toStorage);
  } catch (error) {
    console.log('[Storage Error] -> ', error);
    throw error;
  }
};

export { tasksRemoveById };
