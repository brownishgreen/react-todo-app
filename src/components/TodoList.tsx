import "./../styles/components/TodoList.scss";
import { ToolItem } from "./TodoItem";

export const TodoList = () => (
  <>
    <div className="section-high">
      <h3 className="section-title">High Priority</h3>
      <div className="display-tool-item">
        <ToolItem id="1" title="Read book" content="Harry Potter All." />
        <ToolItem id="1" title="Read book" content="Harry Potter All." />
        <ToolItem id="1" title="Read book" content="Harry Potter All." />
      </div>
    </div>
    <div className="section-medium">
      <h3 className="section-title">Medium Priority</h3>
      <div className="display-tool-item">
        <ToolItem id="1" title="Read book" content="Harry Potter All." />
        <ToolItem id="1" title="Read book" content="Harry Potter All." />
        <ToolItem id="1" title="Read book" content="Harry Potter All." />
      </div>
    </div>
    <div className="section-low">
      <h3 className="section-title">Low Priority</h3>
      <div className="display-tool-item">
        <ToolItem id="1" title="Read book" content="Harry Potter All." />
        <ToolItem id="1" title="Read book" content="Harry Potter All." />
        <ToolItem id="1" title="Read book" content="Harry Potter All." />
      </div>
    </div>
  </>
);
