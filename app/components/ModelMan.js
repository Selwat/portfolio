"use client"
import { useGLTF, useAnimations } from "@react-three/drei"
import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"

export default function ModelMan() {
  const group = useRef()
  const { scene, animations } = useGLTF("/model-man.glb")
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].play()
      actions["Take 001"].timeScale = 0.5
    }
  }, [actions])

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.0008
    }
  })

  return (
    <primitive
      ref={group}
      object={scene}
      scale={[1, 1, 1]}
      position={[0, 0, 0]}
    />
  )
}
