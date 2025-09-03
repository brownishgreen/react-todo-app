import type { TodoItem, Priority } from '../types/todo';
import { faker } from '@faker-js/faker';

const priorities: Priority[] = ['HIGH', 'MEDIUM', 'LOW'];

export const getMockTodos = (n: number): TodoItem[] => {
  const now = new Date();

  return Array.from({ length: n }, (_, i) => {
    const id = `${i + 1}`;
    const priority = priorities[i % 3];
    return {
      id,
      title: faker.lorem.words(3),
      content: faker.lorem.sentences(1),
      priority,
      resolved: Math.random() < 0.5,
      createdAt: now,
      updatedAt: now,
    };
  });
};
