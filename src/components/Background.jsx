import React, { useMemo } from "react";
import { useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three";
export const Background = (props) => {
  const texture = useLoader(THREE.TextureLoader, "/autoshop_01.jpg");
  const { gl } = useThree();

  const formmated = useMemo(
    () =>
      new THREE.WebGLCubeRenderTarget(
        texture.image.height
      ).fromEquirectangularTexture(gl, texture),
    []
  );

  return <primitive attach="background" object={texture} />;
};
