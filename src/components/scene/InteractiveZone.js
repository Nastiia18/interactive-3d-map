import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const InteractiveZone = ({ modelPath, position, onClick, isActive, color }) => {
  const { scene } = useGLTF(modelPath);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (isActive) {
      setOpacity(0.9);
      const fadeInterval = setInterval(() => {
        setOpacity((prev) => {
          if (prev <= 0.6) {
            return 0.9;
          }
          return prev - 0.1;
        });
      }, 100);

      return () => clearInterval(fadeInterval);
    } else {
      setOpacity(0);
    }
  }, [isActive]);

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: color,
        transparent: true,
        opacity: opacity,
      });
    }
  });

  return (
    <primitive
      object={scene}
      position={position}
      scale={[0.05, 0.05, 0.05]}
      onClick={onClick}
    />
  );
};

export default InteractiveZone;
