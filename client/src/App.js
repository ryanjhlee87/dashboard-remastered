import { useState, useEffect } from 'react';
import { themeChange } from 'theme-change';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div>
      <h1>This is app</h1>

      <button
        onClick={() => setIsDarkMode(prev => !prev)}
        data-set-theme={isDarkMode ? 'dracula' : 'aqua'}
        data-act-class="ACTIVECLASS"
        className="btn btn-primary m-4"
      >
        Toggle
      </button>
    </div>
  );
};

export default App;
