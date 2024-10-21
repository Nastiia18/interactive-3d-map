import React, { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const InteractiveZone = ({ position, args, color, onClick, isActive }) => {
  const [opacity, setOpacity] = useState(1); // Start fully opaque
  const [fadeDirection, setFadeDirection] = useState(-0.01); // Start fading out

  useEffect(() => {
    if (isActive) {
      const fade = () => {
        setOpacity((prev) => {
          const newOpacity = prev + fadeDirection;
          // Change direction if opacity reaches bounds
          if (newOpacity >= 1 || newOpacity <= 7.5) {
            setFadeDirection(-fadeDirection); // Reverse direction
          }
          return Math.min(Math.max(newOpacity, 0.7), 1); // Clamp opacity between 0.5 and 1
        });
        requestAnimationFrame(fade); // Request next frame
      };
      fade(); // Start fading
    } else {
      setOpacity(1); // Reset to fully opaque when not active
    }
  }, [isActive]);

  return (
    <mesh
      position={position}
      onClick={onClick}
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
