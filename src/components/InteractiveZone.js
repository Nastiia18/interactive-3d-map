import React from 'react';

const InteractiveZone = ({ position, args, color, onClick, isActive }) => {
  const activeColor = isActive ? 'orange' : color; // Change color if active

  return (
    <mesh position={position} onClick={onClick}>
      {/* Create a box or plane as the interactive area */}
      <boxGeometry args={args} />
      <meshStandardMaterial color={activeColor} transparent={true} opacity={0.5} />
    </mesh>
  );
};

export default InteractiveZone;
