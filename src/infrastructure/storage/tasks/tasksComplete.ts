import AsyncStorage from '@react-native-async-storage/async-storage';

import { TaskScheme, TaskUpdateListingType } from './tasks.types';
import { tasksGetAll } from './tasksGetAll';
import { TASK_COLLECTION } from '../storageConfig';

const tasksToggleCompleteById = async (
  id: string
): Promise<TaskUpdateListingType> => {
  try {
    const { completed, open } = await tasksGetAll();

    const isCompleted = completed.find(tasks => tasks.id === id);
    const isOpen = open.find(tasks => tasks.id === id);

    if (!isCompleted && !isOpen) {
      return Promise.reject(new Error('Não foi possível localizar a task'));
    }

    if (isOpen) {
      const filteredOpens = open.filter(task => task.id !== id);
      const updatedTask: TaskScheme = {
        ...isOpen,
        isCompleted: true,
      };

      const tasks = [...filteredOpens, updatedTask, ...completed];
      const toStorage = JSON.stringify(tasks);
      await AsyncStorage.setItem(TASK_COLLECTION, toStorage);
      return {
        completedAmount: completed.length + 1,
        openAmount: open.length - 1,
        tasks,
      };
    }

    if (isCompleted) {
      const filteredCompleted = completed.filter(task => task.id !== id);
      const updatedTask: TaskScheme = {
        ...isCompleted,
        isCompleted: false,
      };

      const tasks = [...open, updatedTask, ...filteredCompleted];
      const toStorage = JSON.stringify(tasks);
      await AsyncStorage.setItem(TASK_COLLECTION, toStorage);
      return {
        completedAmount: completed.length - 1,
        openAmount: open.length + 1,
        tasks,
      };
    }

    return {
      completedAmount: 0,
      openAmount: 0,
      tasks: [],
    };
  } catch (error) {
    console.log('[Storage Error] -> ', error);
    throw error;
  }
};

export { tasksToggleCompleteById };
