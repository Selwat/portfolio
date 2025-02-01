"use client"
import Image from "next/image"
import { Canvas } from "@react-three/fiber"
import { Center, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import Model from "./components/Model"

export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw] bg-gray-900 text-white flex flex-col items-center justify-center">
      <Canvas
        camera={{ position: [5, 0, 7], fov: 100 }}
        className="w-[100vw] h-[100vh]"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[0, 5, 5]} intensity={2} />
          <Center>
          <Model />
          </Center>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}
