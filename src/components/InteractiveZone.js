import React, { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const InteractiveZone = ({ position, args, color, onClick, isActive }) => {
  const [opacity, setOpacity] = useState(0); // Start fully transparent

  useEffect(() => {
    if (isActive) {
      setOpacity(0.9); // Set opacity to 0.9 when active
      const fadeInterval = setInterval(() => {
        setOpacity((prev) => {
          if (prev <= 0.6) {
            return 0.9; // Reset to 0.9 when reaching the lower limit
          }
          return prev - 0.02; // Fade down
        });
      }, 100); // Adjust timing as needed

      return () => clearInterval(fadeInterval); // Clear interval on unmount or when inactive
    } else {
      setOpacity(0); // Set to fully transparent when not active
    }
  }, [isActive]);

  return (
    <mesh
      position={position}
      onClick={onClick}
      visible={opacity > 0} // Ensure the mesh is visible only when opacity is greater than 0
    >
      <boxGeometry args={args} />
      <meshStandardMaterial
        color={isActive ? 'red' : color} // Change color when active
        transparent // Enable transparency
        opacity={opacity} // Set opacity
      />
    </mesh>
  );
};

export default InteractiveZone;
