import type { JSX } from "react";
import type { MeshStandardMaterialProperties } from "three";

type BoxProps = {
  meshProps?: JSX.IntrinsicElements["mesh"];
  materialProps?: Partial<MeshStandardMaterialProperties>;
};

export function Box({ meshProps = {}, materialProps = {} }: BoxProps) {
  return (
    <mesh {...meshProps}>
      <boxGeometry args={[1, 1, 1]}></boxGeometry>
      <meshStandardMaterial {...materialProps}></meshStandardMaterial>
    </mesh>
  );
}
