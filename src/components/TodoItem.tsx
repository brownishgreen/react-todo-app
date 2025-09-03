import "./../styles/components/TodoItem.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import type { TodoItemProps } from '../types/todo';


export const TodoItem = (props: TodoItemProps) => {
  return (
    <>
      <div className={`todo-item ${props.resolved ? 'item-resolved' : ''}`.trim()}>
        <div className="todo-item__title"><h4>{props.title}</h4></div>
        <div className="todo-item__content"><p>{props.content}</p></div>
        <div className="todo-item__actions">
          <button onClick={() => props.onToggle(props.id)}><FontAwesomeIcon icon={faCheck} /></button>
          <button onClick={() => props.onEdit?.(props.id)}><FontAwesomeIcon icon={faPen} /></button>
          <button onClick={() => props.onDelete(props.id)}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      </div>
      
    </>
  )
};