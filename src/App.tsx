import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import recipes from '../mock/test-data';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        flex: 1,
      }}
    >
      {recipes.map((recipe) => (
        <a href="">{recipe.name}</a>
      ))}
    </div>
  );
}

export default App;
