import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { TaskScheme } from './tasks.types';
import { tasksGetAll } from './tasksGetAll';
import { TASK_COLLECTION } from '../storageConfig';

const tasksCreate = async (task: string): Promise<TaskScheme[]> => {
  try {
    const { completed, open } = await tasksGetAll();

    const newTask: TaskScheme = {
      id: uuid.v4().toString(),
      description: task,
      isCompleted: false,
    };

    const tasks = [...open, newTask, ...completed];

    const toStorage = JSON.stringify([...tasks]);

    await AsyncStorage.setItem(TASK_COLLECTION, toStorage);
    return tasks;
  } catch (error) {
    console.log('[Storage Error] -> ', error);
    throw error;
  }
};

export { tasksCreate };
