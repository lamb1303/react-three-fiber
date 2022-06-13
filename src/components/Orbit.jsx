import React from "react";
import { useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

export const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls attach='orbitControls' args={[camera, gl.domElement]} />;
};
