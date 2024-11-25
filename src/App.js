import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';
import Scene from './components/Scene';
import Sidebar from './components/Sidebar';
import BurgerMenu from './components/BurgerMenu';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeRoom, setActiveRoom] = useState(null); 

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  const closeSidebar = () => setActiveRoom(null); 

  
  const rooms = ['EMMIT', 'Room 2', 'Room 3'];

  
  const handleRoomSelect = (room) => {
    setActiveRoom(room); 
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
