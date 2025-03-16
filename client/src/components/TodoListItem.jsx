import styles from './TodoListItem.module.css';


export default function TodoListItem({
  _id,
  text,
  isCompleted,
  onStatusChange,
}) {
  const todoClassNames = [styles['todo']];
  if (isCompleted){
    todoClassNames.push(styles['is-completed'])
  }
  return (
    <>
      <tr className={todoClassNames.join(' ')}>
        <td>{text}</td>
        <td>{isCompleted ? 'Complete' : 'Incomplete'}</td>
        <td className="todo-action">
          <button className="btn todo-btn" onClick={() => onStatusChange(_id)}>Change status</button>
        </td>
      </tr>
    </>
  );
}
