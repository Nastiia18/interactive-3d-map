import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';
import Scene from './components/Scene';
import Sidebar from './components/Sidebar';
import BurgerMenu from './components/BurgerMenu';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeRoom, setActiveRoom] = useState(null); // State for the active room

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  const closeSidebar = () => setActiveRoom(null); // Function to close the sidebar

  // Define rooms in an array
  const rooms = ['Room 1', 'Room 2', 'Room 3'];

  // Handle room selection from the burger menu
  const handleRoomSelect = (room) => {
    setActiveRoom(room); // Open sidebar for selected room
  };

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <BurgerMenu rooms={rooms} onRoomClick={handleRoomSelect} />
            <Scene setActiveRoom={setActiveRoom} activeRoom={activeRoom} /> {/* Pass activeRoom to Cube */}
            <Sidebar room={activeRoom} closeSidebar={closeSidebar} />
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
