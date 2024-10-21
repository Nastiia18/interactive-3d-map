import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const BillboardText = ({ text, position }) => {
  const ref = React.useRef();

  // Make the text face the camera
  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.lookAt(camera.position);
    }
  });

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={0.5}
      color="black"
      anchorX="center" // Center the text
      anchorY="middle" // Center the text
    >
      {text}
    </Text>
  );
};

export default BillboardText;
