export type TaskScheme = {
  id: string;
  description: string;
  isCompleted: boolean;
};

export type TaskHistoryType = {
  open: TaskScheme[];
  completed: TaskScheme[];
};

export type TaskUpdateListingType = {
  completedAmount: number;
  openAmount: number;
  tasks: TaskScheme[];
};
