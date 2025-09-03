export const Priority = {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW',
} as const;

export type Priority = typeof Priority[keyof typeof Priority];

export interface TodoItem {
  id: string;
  title: string;
  content: string;
  priority: Priority;
  resolved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoItemProps extends TodoItem {
  onToggle(id: string): void;
  onEdit?(id: string): void;
  onDelete(id: string): void;
}