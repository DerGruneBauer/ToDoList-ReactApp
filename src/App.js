import './App.css';
import TodoContainer from './components/todoContainer';

function App() {
  return (
    <div className="App">
      <div className="banner"></div>
    <TodoContainer></TodoContainer>
    <div className="note">Drag and drop to reorder list</div>
    </div>
  );
}

export default App;
