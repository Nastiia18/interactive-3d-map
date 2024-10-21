import React, { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import BillboardText from './BillboardText'; // Import BillboardText component

const InteractiveZone = ({ position, args, color, onClick, isActive, label }) => {
  const [opacity, setOpacity] = useState(1); // Start fully opaque
  const [fadeDirection, setFadeDirection] = useState(-0.01); // Start fading out
  const [isHovered, setIsHovered] = useState(false); // Hover state

  useEffect(() => {
    if (isActive) {
      const fade = () => {
        setOpacity((prev) => {
          const newOpacity = prev + fadeDirection;
          if (newOpacity >= 0.9 || newOpacity <= 0.6) {
            setFadeDirection(-fadeDirection); // Reverse direction
          }
          return Math.min(Math.max(newOpacity, 0.6), 0.9); // Clamp opacity between 0.6 and 0.9
        });
        requestAnimationFrame(fade);
      };
      fade(); // Start fading when active
    } else {
      setOpacity(1); // Reset to fully opaque when not active
    }
  }, [isActive]);

  return (
    <mesh
      position={position}
      onClick={onClick}
      onPointerOver={() => setIsHovered(true)}  // Set hover to true when mouse is over
      onPointerOut={() => setIsHovered(false)}  // Set hover to false when mouse leaves
    >
      <boxGeometry args={args} />
      <meshStandardMaterial
        color={isActive ? 'red' : color} // Change color when active
        transparent
        opacity={opacity}
      />

      {/* Render BillboardText on hover OR if the element is active (sidebar open) */}
      {(isHovered || isActive) && (
        <BillboardText text={label} position={[0, 0.8, 0]} />  // Adjust text position if needed
      )}
    </mesh>
  );
};

export default InteractiveZone;
