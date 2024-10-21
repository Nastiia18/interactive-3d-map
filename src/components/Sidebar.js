import React from 'react';

const Sidebar = ({ room, closeSidebar }) => {
  if (!room) return null; // Don't render if no room is selected

  return (
    <div style={sidebarStyles}>
      <button onClick={closeSidebar} style={{ marginBottom: '10px' }}>Close</button>
      <h2>{room} Information</h2>
      <p>
        {/* Display room-specific information here */}
        This is some info about {room}.
      </p>
    </div>
  );
};

// Inline styles for the sidebar (positioned on the right)
const sidebarStyles = {
  position: 'fixed',
  right: 0,
  top: 0,
  width: '300px',
  height: '100%',
  background: '#f4f4f4',
  padding: '20px',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px',
  zIndex: 1000
};

export default Sidebar;
