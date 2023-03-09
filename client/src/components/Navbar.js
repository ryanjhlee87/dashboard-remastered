import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { themeChange } from 'theme-change';
import { toggleTheme } from '../features/layoutSlice';

const Navbar = () => {
  const theme = useSelector(state => state.layout.isDarkMode);
  const isSidebarOpen = useSelector(state => state.layout.isSidebarOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    themeChange(theme);
  }, []);

  return (
    <div className="navbar bg-base-300 h-24">
      <div className="lg:hidden">
        <h1>haha</h1>
      </div>

      <button
        onClick={() => dispatch(toggleTheme())}
        data-set-theme={theme ? 'dracula' : 'aqua'}
        data-act-class="ACTIVECLASS"
        className="btn btn-primary m-4"
      >
        Toggle
      </button>
    </div>
  );
};

export default Navbar;
