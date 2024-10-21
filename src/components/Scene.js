import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import InteractiveZone from './InteractiveZone';

const FloorModel = () => {
  const { scene } = useGLTF('../models/floor1.glb'); // Replace with the actual path to your GLB model
  return <primitive object={scene} scale={0.1} />;
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

      {/* Load the floor model instead of a cube */}
      <FloorModel />

      {/* Interactive Zones */}
      <InteractiveZone
        position={[-2, 0, 0]} // Room 1
        args={[1, 1, 1]}
        color="red"
        onClick={() => handleZoneClick('Room 1')}
        isActive={activeRoom === 'Room 1'} // Highlight if active
      />
      <InteractiveZone
        position={[25, 0.65, -7.4]} // Room 2
        args={[3, 1, 2]}
        color="#ffffff"
        onClick={() => handleZoneClick('Room 2')}
        isActive={activeRoom === 'Room 2'} // Highlight if active
      />
      <InteractiveZone
        position={[0, 1, 0]} // Room 3
        args={[1, 1, 1]}
        color="yellow"
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
