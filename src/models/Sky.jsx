import { useGLTF } from '@react-three/drei'
import React from 'react'

import skyScene from '../assets/3d/sky.glb'
export const Sky = () => {
    const Sky = useGLTF(skyScene);
  return (
    <mesh>
        <primitive object={Sky.scene}/>
    </mesh>
  )
}

export default Sky