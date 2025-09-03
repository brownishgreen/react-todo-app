import "./../styles/components/TodoList.scss";
import { getMockTodos } from '../utils/mockTodos';
import { TodoItem as TodoItemComponent } from './TodoItem';
import type{ TodoItem } from '../types/todo';

const todos: TodoItem[] = getMockTodos(14);

const high = todos.filter(todo => todo.priority === 'HIGH');
const medium = todos.filter(todo => todo.priority === 'MEDIUM');
const low = todos.filter(todo => todo.priority === 'LOW');

const handleToggle = (id: string) => {
  console.log("Checked", id);
};

const handleDelete = (id: string) => {
  console.log("Delete this todo:", id);
};

const handleEdit = (id: string) => {
  console.log("Edit this todo:", id);
};

export const TodoList = () => (
  <div className="section-container">
    <div className="section-high">
      <h3 className="section-title">High Priority</h3>
      <div className="display-tool-item">
        {high.map(todo => 
          <TodoItemComponent
            key={todo.id}
            {...todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />)}
      </div>
    </div>
    <div className="section-medium">
      <h3 className="section-title">Medium Priority</h3>
      <div className="display-tool-item">
        {medium.map(todo =>
          <TodoItemComponent
            key={todo.id}
            {...todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />)}
      </div>
    </div>
    <div className="section-low">
      <h3 className="section-title">Low Priority</h3>
      <div className="display-tool-item">
        {low.map(todo =>
          <TodoItemComponent
            key={todo.id}
            {...todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />)}
      </div>
    </div>
  </div>
);
