import AsyncStorage from '@react-native-async-storage/async-storage';

import { TaskScheme } from './tasks.types';
import { tasksGetAll } from './tasksGetAll';
import { TASK_COLLECTION } from '../storageConfig';

const tasksCompleteById = async (id: string): Promise<void> => {
  try {
    const storage = await tasksGetAll();
    const task = storage.find(tasks => tasks.id === id);

    if (!task) {
      return Promise.reject(new Error('Não foi possível localizar a task'));
    }

    const filteredStorage = storage.filter(task => task.id !== id);
    const updatedTask: TaskScheme = {
      ...task,
      isCompleted: true,
    };

    const toStorage = JSON.stringify([...filteredStorage, updatedTask]);

    await AsyncStorage.setItem(TASK_COLLECTION, toStorage);
  } catch (error) {
    console.log('[Storage Error] -> ', error);
    throw error;
  }
};

export { tasksCompleteById };
