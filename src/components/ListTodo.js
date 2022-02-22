import { useSelector } from 'react-redux';
import { todoRemainingSelectior } from '../redux/selectors';
import { toggleCompletedTodoAction } from '../redux/actions';
import { useDispatch } from 'react-redux';

function ListTodo() {
  const dispatch = useDispatch();
  const todoList = useSelector(todoRemainingSelectior);
  const handleCompletedTodo = (todoId) => {
    dispatch(toggleCompletedTodoAction(todoId));
  };
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            style={{ display: 'flex', alignItems: 'center' }}
            className={todo.completed ? 'line-through' : ''}
          >
            <label htmlFor={todo.id}>
              <h4>{todo.name}</h4>
            </label>
            <input
              type='checkbox'
              checked={todo.completed}
              id={todo.id}
              onChange={() => {
                handleCompletedTodo(todo.id);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTodo;
