import React from 'react';
import { redirect } from './Router';

const Link = ({ to, children }) => {
  const handleClick = (event) => {
    event.preventDefault();
    redirect(to);
  };

  return (
    <a href={`#${to}`} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;