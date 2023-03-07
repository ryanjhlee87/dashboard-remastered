import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { themeChange } from 'theme-change';
import { getCurrentTheme } from '../features/themeSlice';

const Navbar = () => {
  const theme = useSelector(state => state.theme.isDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    themeChange();
  }, []);

  return <div>Navbar</div>;
};

export default Navbar;
