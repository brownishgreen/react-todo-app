import "./../styles/components/TodoItem.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Priority = {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
} as const;

export type Priority = typeof Priority[keyof typeof Priority];


export interface Props {
  id: string;
  title: string;
  content: string;
  priority: Priority;
  resolved: boolean;
  onToggle(id: string): void      //check
  onEdit?(id: string): void       //edit
  onDelete(id: string): void      //delete
};

export const TodoItem = (props: Props) => {
  return (
    <>
      <div className="todo-item">
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