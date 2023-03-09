import { useState, useEffect } from 'react';
import { themeChange } from 'theme-change';
import { Navbar, Sidebar } from './components/';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="app">
      <div className="flex h-screen">
        <Sidebar />
        <Navbar />
      </div>
    </div>
  );
};

export default App;
