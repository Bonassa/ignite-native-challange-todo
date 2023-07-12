import AsyncStorage from '@react-native-async-storage/async-storage';

import { TaskHistoryType, TaskScheme } from './tasks.types';
import { TASK_COLLECTION } from '../storageConfig';

const tasksGetAll = async (): Promise<TaskHistoryType> => {
  try {
    const storage = await AsyncStorage.getItem(TASK_COLLECTION);

    if (storage) {
      const parsed = JSON.parse(storage) as TaskScheme[];
      return parsed.reduce(
        (info, current) => {
          if (current.isCompleted) {
            info.completed.push(current);
          } else {
            info.open.push(current);
          }

          return info;
        },
        {
          completed: [] as TaskScheme[],
          open: [] as TaskScheme[],
        }
      );
    }

    return {
      open: [],
      completed: [],
    };
  } catch (error) {
    console.log('[Storage Error] -> ', error);
    throw error;
  }
};

export { tasksGetAll };
