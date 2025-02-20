"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import Model from "./Model"

const ModelView = () => {
  return (
    <Canvas
      camera={{ position: [5, 0, 7], fov: 78 }}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 7, 5]} intensity={5} />
        <pointLight position={[0, 5, 5]} intensity={2} />
        <Model />
        <OrbitControls enableRotate={true} enableZoom={true} />
      </Suspense>
    </Canvas>
  )
}

export default ModelView
