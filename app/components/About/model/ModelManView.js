"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import ModelMan from "./ModelMan"
import { motion } from "framer-motion"

const ModelManView = () => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 2, 5], fov: 30 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <ModelMan />
        </Suspense>
        <OrbitControls
          target={[0, 1, 0]}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </motion.div>
  )
}

export default ModelManView
