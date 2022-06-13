import React from 'react'

export function Sphere(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame(
      (state, delta) => (
        (mesh.current.rotation.x += 0.01), (mesh.current.rotation.y += 0.01)
      )
    );
    // Return view, these are regular three.js elements expressed in JSX
    // Textures
    const texture = useLoader(THREE.TextureLoader, "./coast_sand_rocks_02.jpg");
    return (
      <mesh
        {...props}
        castShadow
        //receiveShadow
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <sphereBufferGeometry args={[1, 100, 100]} />
        <meshPhysicalMaterial
          // transparent
          // roughness={0}
          // clearcoat={1}
          // transmission={0.5}
          // reflectivity
          // side={THREE.DoubleSide}
          // color={hovered ? "lightblue" : "orange"}
          map={texture}
        />
      </mesh>
    );
  }