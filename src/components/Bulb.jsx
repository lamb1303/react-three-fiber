import React from "react";

export const Bulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight 
      castShadow 
      shadow-mapSize-height={2 ** 10} 
      shadow-mapSize-width={2 ** 10} 
      shadow-radius={10}
      />
      <sphereGeometry args={[0.2]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};
