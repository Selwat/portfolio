"use client"
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion"

function Cube() {
  const meshRef = useRef()

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#ff5722" />
    </mesh>
  )
}

const RotatingCube = () => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Canvas
        className="w-full h-full"
        camera={{ position: [5, 5, 5], fov: 30 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Cube />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </motion.div>
  )
}

export default RotatingCube
