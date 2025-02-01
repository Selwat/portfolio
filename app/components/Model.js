'use client'
import { useGLTF } from '@react-three/drei';

export default function Model() {
  const { scene } = useGLTF('/model.glb');
  return <primitive object={scene} scale={[1.5, 1.5, 1.5]} />
  
}
