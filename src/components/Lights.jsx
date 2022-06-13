import React from "react";
import { Bulb } from "./Bulb.jsx";
export const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={10}
        position={[6, 3, 0]}
        intensity={2}
        castShadow
      />
      <Bulb position={[0, 9, 0]} />
    </>
  );
};
