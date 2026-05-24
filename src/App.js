import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingScreen from "./components/loading/LoadingScreen";
import Footer from "./components/layout/Footer";
import Scene from "./components/scene/Scene";
import Sidebar from "./components/sidebar/Sidebar";
import BurgerMenu from "./components/layout/BurgerMenu";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeRoom, setActiveRoom] = useState(null);
  const [activeFloor, setActiveFloor] = useState(1); // Додаємо стан активного поверху
  const [route, setRoute] = useState(null);
  const [routeFrom, setRouteFrom] = useState(null);
  const [routeTo, setRouteTo] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const closeSidebar = () => setActiveRoom(null);

  const rooms = ["EMMIT", "Room 2", "Room 3"];

  const handleRoomSelect = (room) => {
    setActiveRoom(room);
  };

  const handleFloorChange = (floor) => {
    setActiveFloor(floor);
  };

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <BurgerMenu
                onRoomClick={setActiveRoom}
                onCreateRoute={(from, to) => {
                  setRouteFrom(from);
                  setRouteTo(to);
                }}
            />
            <Scene
                setActiveRoom={setActiveRoom}
                activeRoom={activeRoom}
                activeFloor={activeFloor}
                onFloorChange={setActiveFloor}
                routeFrom={routeFrom}
                routeTo={routeTo}
            />
            <Sidebar room={activeRoom} closeSidebar={closeSidebar} />
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
