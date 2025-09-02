import "./../styles/components/TodoItem.scss"

type Props = {
  id: string;
  title: string;
  content: string;
}

export const ToolItem = (props: Props) => {
  return (
    <>
      <div className="todo-item">
        <div className="todo-item__title"><h4>{props.title}</h4></div>
        <div className="todo-item__content"><p>{props.content}</p></div>
      </div>
    </>
  )
}