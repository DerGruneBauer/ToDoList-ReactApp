import React, { useState } from 'react';
import './App.css';
import TodoContainer from './components/todoContainer';
import './themes.css';

const App = () => {

  const[theme, setTheme] = useState("lightTheme");

  const toggleTheme = () => {
    let value = theme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
    setTheme(value);
  }

  return (
    <div className={`App ${theme}`}>
      <div className="banner"></div>
      <TodoContainer toggleTheme={toggleTheme}></TodoContainer>
      <div className="note">Drag and drop to reorder list</div>
    </div>
  );
}

export default App;
