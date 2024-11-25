import React, { useEffect, useState } from 'react';
import './LoadingScreen.css'; 

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <img
        src="/path/to/your/logo.svg"
        alt="Loading..."
        className="loading-image"
        style={{ filter: `hue-rotate(${(progress / 100) * 240}deg)` }}
      />
      <p>Loading... {progress}%</p>
    </div>
  );
};

export default LoadingScreen;
