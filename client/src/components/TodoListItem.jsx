import styles from './TodoListItem.module.css';


export default function TodoListItem({
  text,
  isCompleted,
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
          <button className="btn todo-btn">Change status</button>
        </td>
      </tr>
    </>
  );
}
