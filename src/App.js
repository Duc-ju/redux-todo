import './App.css';
import Control from './components/Control';
import Filter from './components/Filter';
import ListTodo from './components/ListTodo';

function App() {
  return (
    <div style={{ padding: '40px' }}>
      <Filter />
      <ListTodo />
      <Control />
    </div>
  );
}

export default App;
