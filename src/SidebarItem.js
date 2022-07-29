import * as React from 'react';

export const SidebarItem = ({ active }) => {
  return (
    <button className={`sidebar-item ${active && 'active'}`}>Sidebar Item</button>
  )
};