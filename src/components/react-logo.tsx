import { Float, useGLTF } from "@react-three/drei";
import { Material, Mesh } from "three";
import { GLTF } from "three/examples/jsm/Addons.js";

type GLTFResult = GLTF & {
  nodes: {
    "React-Logo_Material002_0": Mesh;
  };
  materials: {
    "Material.002": Material;
  };
};

const ReactLogo = ({ position }: { position: [number, number, number] }) => {
  const { nodes, materials } = useGLTF(
    "models/react.glb"
  ) as unknown as GLTFResult;

  return (
    <Float floatIntensity={1}>
      <group position={position} scale={0.4} dispose={null}>
        <mesh
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("models/react.glb");

export default ReactLogo;
