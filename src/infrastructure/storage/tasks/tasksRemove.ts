import AsyncStorage from '@react-native-async-storage/async-storage';

import { TaskUpdateListingType } from './tasks.types';
import { tasksGetAll } from './tasksGetAll';
import { TASK_COLLECTION } from '../storageConfig';

const tasksRemoveById = async (id: string): Promise<TaskUpdateListingType> => {
  try {
    const { completed, open } = await tasksGetAll();

    const filteredOpens = open.filter(tasks => tasks.id !== id);
    const filteredCompleted = completed.filter(tasks => tasks.id !== id);
    const tasks = [...filteredOpens, ...filteredCompleted];

    const toStorage = JSON.stringify(tasks);
    await AsyncStorage.setItem(TASK_COLLECTION, toStorage);
    return {
      completedAmount: filteredCompleted.length,
      openAmount: filteredOpens.length,
      tasks,
    };
  } catch (error) {
    console.log('[Storage Error] -> ', error);
    throw error;
  }
};

export { tasksRemoveById };
