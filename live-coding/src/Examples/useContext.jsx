import { createContext, useContext, useState } from 'react';

// Створюємо контекст
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  // Використовуємо контекст (без пропсів!)
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <div>
      <p>Тема: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Змінити тему
      </button>
    </div>
  );
}