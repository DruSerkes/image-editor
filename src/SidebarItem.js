import * as React from 'react';

export const SidebarItem = ({ active, name, selectOption }) => {
  const handleClick = () => selectOption(name)
  return (
    <button className={`sidebar-item ${active && 'active'}`} onClick={handleClick}>
      {name}
    </button>
  )
};