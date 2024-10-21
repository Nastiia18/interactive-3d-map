import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three'; // Import THREE.js

const InteractiveZone = ({ modelPath, position, onClick, isActive, color }) => {
  const { scene } = useGLTF(modelPath); // Load the 3D model
  const [opacity, setOpacity] = useState(0); // Start fully transparent

  useEffect(() => {
    if (isActive) {
      setOpacity(0.9); // Set opacity to 0.9 when active
      const fadeInterval = setInterval(() => {
        setOpacity((prev) => {
          if (prev <= 0.6) {
            return 0.9; // Reset to 0.9 when reaching the lower limit
          }
          return prev - 0.1; // Fade down
        });
      }, 100); // Adjust timing as needed

      return () => clearInterval(fadeInterval); // Clear interval on unmount or when inactive
    } else {
      setOpacity(0); // Set to fully transparent when not active
    }
  }, [isActive]);

  // Apply custom material to the model
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: color, // Apply the passed color
        transparent: true,
        opacity: opacity, // Control opacity for transparency effect
      });
    }
  });

  return (
    <primitive
      object={scene}
      position={position}
      scale={[0.05, 0.05, 0.05]} // Adjust the scale of the model as needed
      onClick={onClick}
    />
  );
};

export default InteractiveZone;
