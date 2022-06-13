import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Orbit } from "./components/Orbit.jsx";
import { Floor } from "./components/Floor.jsx";
import { Background } from "./components/Background.jsx";
import { Cars } from "./components/Cars.jsx";
import { Lights } from "./components/Lights.jsx";
import { CameraButtons } from "./components/CameraButtons.jsx";
import { CameraControls } from "./components/CameraControls.jsx";
import { ColorPicker } from "./components/ColorPicker.jsx";
import { Physics } from "@react-three/cannon";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
} from "@react-three/postprocessing";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas
        shadows
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
      >
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <CameraControls />
        <Lights />
        <Orbit />
        {/* <axesHelper args={[5]} /> */}

        <Physics>
          <Cars />
          <Floor position={[0, -0.5, 0]} />
        </Physics>
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.03}
            bokehScale={2}
            height={480}
          >
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300}/>
          </DepthOfField>
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default App;
