import { TaskScheme } from '@infrastructure/storage/tasks/tasks.types';

export type TaskCardProps = TaskScheme & {
  handleRemoveTask: (id: string) => void;
  handleCompleteTask: (id: string) => void;
};
