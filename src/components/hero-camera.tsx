import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import { Group } from "three";

const HeroCamera = ({
  children,
  isMobile,
}: {
  children: JSX.Element;
  isMobile: boolean;
}) => {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    if (!isMobile) {
      easing.dampE(
        groupRef.current!.rotation,
        [-state.pointer.y / 3, state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;
