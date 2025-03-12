import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';

export function TaskCube({ position, text }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time) * 0.2;
    meshRef.current.rotation.y = Math.cos(time) * 0.2;
    meshRef.current.position.y = Math.sin(time) * 0.2 + position[1];
  });

  return (
    <group position={position}>
      <Box
        ref={meshRef}
        args={[1, 1, 1]}
        scale={[1, 1, 0.2]}
      >
        <meshStandardMaterial
          color="#4f46e5"
          metalness={0.5}
          roughness={0.2}
        />
      </Box>
      <Text
        position={[0, 0, 0.15]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
}
