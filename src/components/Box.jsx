import React, { useState, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";

export const Box = (props) => {
  const [mesh, api] = useBox(()=> ({
    ...props,
    mass: 1
  }))
  //const mesh = useRef();
  const [active, setActive] = useState(false);
  // useFrame(
  //   (state, delta) => (
  //     (mesh.current.rotation.x += 0.01), (mesh.current.rotation.y += 0.01)
  //   )
  // );

  const handlePointerDown = (e) => {
    console.log("handlePointerDown(e): ", e);
    e.object.active = true;

    if (window.activeMesh) {
      onScaleDown(window.activeMesh);
      window.activeMesh.active = false;
    }
    window.activeMesh = e.object;
  };

  const handlePointerEnter = (e) => {
    console.log("handlePointerEnter(e): ", e);
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
  };

  const handlePointerLeave = (e) => {
    console.log("handlePointerLeave(e): ", e);
    if (!e.object.active) {
      onScaleDown(e.object);
    }
  };

  const onScaleDown = (object) => {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  };

  const texture = useLoader(THREE.TextureLoader, "./coast_sand_rocks_02.jpg");
  return (
    <mesh
      {...props}
      ref={mesh}
      api={api}
      castShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <boxBufferGeometry arg={[1, 1, 1]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
};
