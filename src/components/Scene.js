import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import InteractiveZone from './InteractiveZone';
import { useGLTF } from '@react-three/drei';

const FloorModel = () => {
  const { scene } = useGLTF('../models/floor1.glb'); // Replace with the actual path to your GLB model
  return <primitive object={scene} scale={0.05} />;
};

const Scene = ({ setActiveRoom, activeRoom }) => {
  const handleZoneClick = (roomName) => {
    setActiveRoom(roomName); // Trigger sidebar when zone is clicked
  };

  return (
    <Canvas style={{ height: '100vh' }}>
      <color attach="background" args={['white']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />

      {/* Load the floor model */}
      <FloorModel />

      {/* Interactive Zones with 3D models and different colors */}
      <InteractiveZone
        modelPath="../models/emmit.glb" // Path to 3D model for Room 1
        position={[0, 0, 0]}
        color="red" // Assign color
        onClick={() => handleZoneClick('EMMIT')}
        isActive={activeRoom === 'EMMIT'}
      />
      <InteractiveZone
        modelPath="../models/dekan_economic.glb" // Path to 3D model for Room 2
        position={[0, 0, 0]}
        color="red" // Assign color
        onClick={() => handleZoneClick('Room 2')}
        isActive={activeRoom === 'Room 2'}
      />
      <InteractiveZone
        modelPath="../models/dekanat_economic.glb" // Path to 3D model for Room 3
        position={[0, 0, 0]}
        color="red" // Assign color
        onClick={() => handleZoneClick('Room 3')}
        isActive={activeRoom === 'Room 3'}
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
