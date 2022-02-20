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
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center' }}>
            <h2>{todo.name}</h2>
            <p>{todo.completed ? 'Đã hoàn thành' : 'Chưa hoàn thành'}</p>
            <input
              type='checkbox'
              checked={todo.completed}
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
