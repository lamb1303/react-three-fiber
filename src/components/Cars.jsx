import React, { Suspense } from "react";
import { Model } from "./Model.jsx";
import { Dragable } from "./Dragable.jsx";
import { BoundingBox } from "./BoundingBox.jsx";

export const Cars = ({}) => {
  return (
    <Suspense fallback={null}>
      <Dragable transformGroup>
        <BoundingBox
          //visible
          dims={[3, 1.3, 6]}
          position={[4, 2, 0]}
          offset={[0, -0.7, 0]}
          rotation={[0, 1.9, 0]}
        >
          <Model
            scale={new Array(3).fill(15)}
            path="/tesla/scene.gltf"
            rotation={[0, 1.9, 0]}
          />
        </BoundingBox>
      </Dragable>
      <Dragable transformGroup>
        <BoundingBox
          //visible
          dims={[3, 2, 6.3]}
          position={[-4, 2, 0]}
          offset={[0, -0.45, 0]}
        >
          <Model
            position={[0, 0, 1]}
            scale={new Array(3).fill(0.01)}
            path="/tesla_model_3/scene.gltf"
          />
        </BoundingBox>
      </Dragable>
      <Dragable transformGroup>
      <group rotation={[0,Math.PI,0]}>
        <Model
          // position={[0, 0, 1]}
          scale={new Array(3).fill(6)}
          path="/mech_drone/scene.gltf"
        />
      </group>
        </Dragable>
     
    </Suspense>
  );
};
