/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Gregory Khodyrev (https://sketchfab.com/gmaaailgrisha)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/concerto-c8f9ff8fd8fd404b8432ba0982c40034
Title: Concerto
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import concertoScene from '../assets/3d/concerto.glb'

const Concerto = ({isRotating, setIsRotating, ...props}) => {
  const concertoRef = useRef();

  const {gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(concertoScene)

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingfactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopProgation();
    e.prevntDefault();
    setIsRotating(true);

    const clientX = e.touches 
    ? e.touches[0].clientX 
    : e.clientX;

    lastX.current = clientX;
  }
  const handlePointerUp = (e) => {
    e.stopProgation();
    e.prevntDefault();
    setIsRotating(false);

    const clientX = e.touches 
    ? e.touches[0].clientX 
    : e.clientX;

    const delta = (clientX - lastX.current) / viewport.width;

  concertoRef.current.rotation.y += delta * 0.01 * Math.PI;
  lastX.current = clientX;
  rotationSpeed.current = delta * 0.01 * Math.PI;

  }
  const handlePointerMove = (e) => {
    e.stopProgation();
    e.prevntDefault();

    if(isRotating) {
      handlePointerUp(e)
    }
  }
  return (
    <a.group ref={ concertoRef } {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.466}>
        <group position={[0, 0, 0.625]} rotation={[0, 0, -0.635]}>
          <mesh
            geometry={nodes.Roundcube_0.geometry}
            material={materials.Head}
          />
          <mesh
            geometry={nodes.Roundcube_1.geometry}
            material={materials.Bill}
          />
          <mesh
            geometry={nodes.Roundcube_2.geometry}
            material={materials.material_3}
          />
          <mesh
            geometry={nodes.Roundcube_3.geometry}
            material={materials.pale_white}
          />
          <mesh
            geometry={nodes.Roundcube_4.geometry}
            material={materials.Bill2}
          />
        </group>
        <group position={[-1.5, -1.603, 0.456]} rotation={[-0.135, -0.252, -0.5]}>
          <mesh
            geometry={nodes.Frog_Body_0.geometry}
            material={materials.Head}
          />
          <mesh
            geometry={nodes.Frog_Body_1.geometry}
            material={materials.material_3}
          />
          <mesh
            geometry={nodes.Frog_Body_2.geometry}
            material={materials.Viola}
          />
          <mesh
            geometry={nodes.Frog_Body_3.geometry}
            material={materials.Frog}
          />
          <mesh
            geometry={nodes.Frog_Body_4.geometry}
            material={materials.Frog_2}
          />
          <mesh
            geometry={nodes.Frog_Body_5.geometry}
            material={materials.material}
          />
        </group>
        <group position={[-1.805, -0.409, -4.583]} rotation={[-Math.PI / 2, 1.433, Math.PI / 2]}>
          <mesh
            geometry={nodes.Circle007_0.geometry}
            material={materials.Leaf}
          />
          <mesh
            geometry={nodes.Circle007_0_1.geometry}
            material={materials.Leaf}
          />
        </group>
        <group position={[0, 0, -1.185]} rotation={[0, 0, -0.635]}>
          <mesh
            geometry={nodes.Roundcube001_0.geometry}
            material={materials.Head}
          />
          <mesh
            geometry={nodes.Roundcube001_1.geometry}
            material={materials.Bill}
          />
          <mesh
            geometry={nodes.Roundcube001_2.geometry}
            material={materials.material_3}
          />
          <mesh
            geometry={nodes.Roundcube001_3.geometry}
            material={materials.pale_white}
          />
          <mesh
            geometry={nodes.Roundcube001_4.geometry}
            material={materials.Bill2}
          />
        </group>
        <mesh
          geometry={nodes.Plane_0.geometry}
          material={materials.Water}
        />
        <mesh
          geometry={nodes.Plane001_0.geometry}
          material={materials.Water}
          position={[0, 0, -2.033]}
          rotation={[0, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.Vert_0.geometry}
          material={materials.material}
          position={[-1.621, -1.661, 0.632]}
        />
      </group>
    </a.group>
  )
}

useGLTF.preload('/concerto.glb')

export default Concerto;
