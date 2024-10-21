import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import InteractiveZone from './InteractiveZone'; // Import InteractiveZone component

const Scene = ({ setActiveRoom, activeRoom }) => {
  const handleZoneClick = (roomName) => {
    setActiveRoom(roomName); // Trigger sidebar when zone is clicked
  };

  return (
    <Canvas style={{ height: '100vh' }}>
      <color attach="background" args={['white']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />

      {/* Main Cube */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      {/* Interactive Zones */}
      <InteractiveZone
        position={[-2, 0, 0]} // Room 1
        args={[1, 1, 1]}
        color="red"
        label="Room 1"
        onClick={() => handleZoneClick('Room 1')}
        isActive={activeRoom === 'Room 1'} // Highlight if active
      />
      <InteractiveZone
        position={[2, 0, 0]} // Room 2
        args={[1, 1, 1]}
        color="green"
        label="Room 2"
        onClick={() => handleZoneClick('Room 2')}
        isActive={activeRoom === 'Room 2'} // Highlight if active
      />
      <InteractiveZone
        position={[0, 2, 0]} // Room 3
        args={[1, 1, 1]}
        color="yellow"
        label="Room 3"
        onClick={() => handleZoneClick('Room 3')}
        isActive={activeRoom === 'Room 3'} // Highlight if active
      />

      <OrbitControls
        enablePan={true}
        enableZoom={true}
        minPolarAngle={Math.PI / 48}
        maxPolarAngle={Math.PI / 3}
        enableDamping={true}
        dampingFactor={0.1}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default Scene;
