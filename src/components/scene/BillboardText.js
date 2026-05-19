import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const BillboardText = ({ text, position }) => {
  const ref = React.useRef();

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
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
};

export default BillboardText;
