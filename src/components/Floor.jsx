import React from "react";
import { useBox } from "@react-three/cannon";

export const Floor = (props) => {
  const [ref, api] = useBox(()=> ({
    ...props,
    args: [20, 1, 20]
  }))
  return (
    <mesh ref={ref} {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 20]} />
      <meshPhysicalMaterial transparent opacity={0.2}/>
    </mesh>
  );
};
