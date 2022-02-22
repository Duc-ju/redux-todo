import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';

function Control() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    dispatch(
      addTodoAction({
        id: uuidv4(),
        name: todo,
        completed: false,
      })
    );
    setTodo('');
  };
  return (
    <div style={{ border: '1px solid black' }}>
      <input
        placeholder='Nhập công việc'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddButtonClick}>Thêm</button>
    </div>
  );
}

export default Control;
