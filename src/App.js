import './App.css';
import Control from './components/Control';
import Filter from './components/Filter';
import ListTodo from './components/ListTodo';

function App() {
  return (
    <div style={{ width: '400px', textAlign: 'center', margin: 'auto' }}>
      <Filter />
      <ListTodo />
      <Control />
    </div>
  );
}

export default App;
