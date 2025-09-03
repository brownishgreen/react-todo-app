import "./../styles/components/TodoList.scss";
import { TodoItem } from "./TodoItem";

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
        <TodoItem
          id="1"
          title="Read book"
          content="Harry Potter All."
          priority="HIGH"
          resolved={false}
          onToggle={handleToggle}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      </div>
    </div>
    <div className="section-medium">
      <h3 className="section-title">Medium Priority</h3>
      <div className="display-tool-item">
        <TodoItem
          id="1"
          title="Read book"
          content="Harry Potter All."
          priority="HIGH"
          resolved={false}
          onToggle={handleToggle}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      </div>
    </div>
    <div className="section-low">
      <h3 className="section-title">Low Priority</h3>
      <div className="display-tool-item">
        <TodoItem
          id="1"
          title="Read book"
          content="Harry Potter All."
          priority="HIGH"
          resolved={false}
          onToggle={handleToggle}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      </div>
    </div>
  </div>
);
