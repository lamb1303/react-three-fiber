import React from "react";
import * as THREE from "three";
import {state} from '../state'
export const ColorPicker = ({}) => {
  const handleClick = (e) => {
    if (!state.activeMesh) return;
    state.activeMesh.material.color = new THREE.Color(
      e.target.style.background
    );
  };
  return (
    <div style={{ 
        position: "absolute", 
        zIndex: 1,
        left:0,
        right:0,
        margin: 'auto',
        width: 'fit-content',
        display: 'flex',
        top: '20px' 
        }}>
      <div
        onClick={handleClick}
        style={{
          background: "lightblue",
          height: 50,
          width: 50,
        }}
      ></div>
      <div
        onClick={handleClick}
        style={{
          background: "orange",
          height: 50,
          width: 50,
        }}
      ></div>
      <div
        onClick={handleClick}
        style={{
          background: "black",
          height: 50,
          width: 50,
        }}
      ></div>
    </div>
  );
};
