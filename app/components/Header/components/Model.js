'use client'
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Model() {
  const { scene } = useGLTF('/model.glb');
  const modelRef = useRef();

  // Automatyczne obracanie modelu w osi Y
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001; // Możesz dostosować prędkość obrotu
    }
  });

  return <primitive ref={modelRef} object={scene} scale={[1, 1, 1]} />;
}
