import React, { useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = ({ rooms, onRoomClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage burger menu visibility
  const [isFirstAccordionOpen, setFirstAccordionOpen] = useState(false);
  const [isSecondAccordionOpen, setSecondAccordionOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Function to toggle the burger menu
  const toggleFirstAccordion = () => setFirstAccordionOpen(!isFirstAccordionOpen);
  const toggleSecondAccordion = () => setSecondAccordionOpen(!isSecondAccordionOpen);

  return (
    <div>
      {/* Button to toggle the burger menu */}
      <button className="burger-toggle" onClick={toggleMenu}>
        {isMenuOpen ? 'Закрити навігацію' : 'Навігація'}
      </button>

      {/* Conditional rendering of the burger menu */}
      {isMenuOpen && (
        <div className="burger-menu">

        

          {/* First Accordion */}
      <div className="accordion">
        <button className="accordion-toggle" onClick={toggleFirstAccordion}>
          Економічний факультет
        </button>
        {isFirstAccordionOpen && (
          <div className="accordion-content">
            <button className="room-btn" onClick={() => onRoomClick('EMMIT')}>
              Кафедра ЕММІТ
            </button>
            <button className="room-btn" onClick={() => onRoomClick('Room 2')}>
              Декан Економічного факультету
            </button>
            <button className="room-btn" onClick={() => onRoomClick('Room 3')}>
              Деканат економічного факультету
            </button>
          </div>
        )}
      </div>

      {/* Second Accordion */}
      <div className="accordion">
        <button className="accordion-toggle" onClick={toggleSecondAccordion}>
          Аудиторії
        </button>
        {isSecondAccordionOpen && (
          <div className="accordion-content">
            <button className="room-btn" onClick={() => onRoomClick('Rector')}>
              Ректор
            </button>
            
          </div>
        )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
