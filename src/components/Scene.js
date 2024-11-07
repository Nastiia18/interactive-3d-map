import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import InteractiveZone from './InteractiveZone';
import { useGLTF } from '@react-three/drei';

const FloorModel = () => {
  const { scene } = useGLTF('../models/floor1.glb');
  return <primitive object={scene} scale={0.05} />;
};

const Scene = ({ setActiveRoom, activeRoom }) => {
  const handleZoneClick = (roomName) => {
    setActiveRoom(roomName);
  };

  return (
    <Canvas style={{ height: '100vh' }}>
      <color attach="background" args={['#d1cbc3']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />

      <FloorModel />

      <InteractiveZone
        modelPath="../models/emmit.glb" 
        position={[0, 0, 0]}
        color="#111a68"
        onClick={() => handleZoneClick('EMMIT')}
        isActive={activeRoom === 'EMMIT'}
      />
      <InteractiveZone
        modelPath="../models/dekan_economic.glb" 
        position={[0, 0, 0]}
        color="#111a68"
        onClick={() => handleZoneClick('Room 2')}
        isActive={activeRoom === 'Room 2'}
      />
      <InteractiveZone
        modelPath="../models/dekanat_economic.glb" 
        position={[0, 0, 0]}
        color="#111a68"
        onClick={() => handleZoneClick('Room 3')}
        isActive={activeRoom === 'Room 3'}
      />
      <InteractiveZone
        modelPath="../models/rector.glb" 
        position={[0, 0, 0]}
        color="#111a68"
        onClick={() => handleZoneClick('Rector')}
        isActive={activeRoom === 'Rector'}
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
