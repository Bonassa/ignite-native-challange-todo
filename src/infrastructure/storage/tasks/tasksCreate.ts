import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { TaskScheme } from './tasks.types';
import { tasksGetAll } from './tasksGetAll';
import { TASK_COLLECTION } from '../storageConfig';

const tasksCreate = async (task: string): Promise<void> => {
  try {
    const storage = await tasksGetAll();

    const newTask: TaskScheme = {
      id: uuid.v4().toString(),
      description: task,
      isCompleted: false,
    };

    const toStorage = JSON.stringify([...storage, newTask]);

    await AsyncStorage.setItem(TASK_COLLECTION, toStorage);
  } catch (error) {
    console.log('[Storage Error] -> ', error);
    throw error;
  }
};

export { tasksCreate };
