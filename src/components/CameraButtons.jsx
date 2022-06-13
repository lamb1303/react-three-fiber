import React from "react";
import { state } from "../state";

const style = {
  position: "absolute",
  bottom: "30vh",
  zIndex: 1,
  height: "30px",
  width: "30px",
  background: "white",
  textAlign: "center",
  borderRadius: "100%",
  fontSize: 20,
  fontWeight: "bold",
  opacity: 0.7,
  border: "1px solid black",
  cursor: "pointer",
};
export const CameraButtons = ({}) => {
    const sets = {
        1: {
            cameraPos: [9,2,4],
            target: [4,0,0],
            name: 'Obj3d66-806492-66-78_Obj3d66-806492-66-78_mtl_0'
        },
        2: {
            cameraPos: [1,2,5],
            target: [-4,0,0],
            name: "Capot001_CAR_PAINT_0"
        }
    }
  const handleClick = (number) => {
      state.cameraPos.set(...sets[number].cameraPos)
      state.target.set(...sets[number].target)
      state.activeMeshName = sets[number].name
      state.shouldUpdate = true
  };
  return (
    <>
      <button onClick={() => handleClick(1)} style={{ ...style, left: "40vw" }}>
        {"<"}
      </button>
      <button
        onClick={() => handleClick(2)}
        style={{ ...style, right: "40vw" }}
      >
        {">"}
      </button>
    </>
  );
};
