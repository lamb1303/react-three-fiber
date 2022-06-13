import React, { useState, useRef, useEffect } from "react";
import { extend, useThree } from "@react-three/fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls";
extend({ DragControls });

export const Dragable = (props) => {
  const groupRef = useRef();
  const controlsRef = useRef();
  const [childs, setChilds] = useState([]);
  const { camera, gl, scene } = useThree();

  useEffect(() => {
    setChilds(groupRef.current.children);
  }, []);

  useEffect(() => {
    controlsRef.current.addEventListener('hoveron', (e)=> scene.orbitControls.enabled = false)
    controlsRef.current.addEventListener('hoveroff', (e)=> scene.orbitControls.enabled = true)
    controlsRef.current.addEventListener('dragstart', (e)=> {e.object.api?.mass.set(0)})
    controlsRef.current.addEventListener('dragend', (e)=> e.object.api?.mass.set(1))
    controlsRef.current.addEventListener('drag', (e)=> {
      e.object.api?.position.copy(e.object.position)
      e.object.api?.velocity.set(0,0,0)
    })
  }, [childs]);

  return (
    <group ref={groupRef}>
      <dragControls 
      transformGroup={props.transformGroup}
      ref={controlsRef}
      args={[childs, camera, gl.domElement]} />
      {props.children}
    </group>
  );
};
