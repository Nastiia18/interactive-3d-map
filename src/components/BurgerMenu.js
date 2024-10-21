import React, { useState } from 'react';

const BurgerMenu = ({ rooms, onRoomClick }) => {
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <>
      {/* Burger Menu Icon */}
      <div style={burgerStyles} onClick={toggleMenu}>
        <div style={burgerLineStyles}></div>
        <div style={burgerLineStyles}></div>
        <div style={burgerLineStyles}></div>
      </div>

      {/* Room List */}
      {isOpen && (
        <div style={menuStyles}>
          <h3>Rooms</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {rooms.map((room, index) => (
              <li key={index} style={menuItemStyles} onClick={() => onRoomClick(room)}>
                {room}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

// Inline styles for the burger menu and sidebar
const burgerStyles = {
  position: 'fixed',
  top: '20px',
  left: '20px',
  width: '30px',
  height: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  cursor: 'pointer',
  zIndex: 1001
};

const burgerLineStyles = {
  width: '100%',
  height: '4px',
  backgroundColor: '#333'
};

const menuStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '200px',
  height: '100%',
  background: '#333',
  color: '#fff',
  padding: '20px',
  zIndex: 1000,
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px'
};

const menuItemStyles = {
  marginBottom: '10px',
  cursor: 'pointer',
  color: '#fff',
  fontSize: '18px',
};

export default BurgerMenu;
