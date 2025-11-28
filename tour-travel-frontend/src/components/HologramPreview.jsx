import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ src }) {
  const gltf = useGLTF(src);
  return <primitive object={gltf.scene} scale={2} />;
}

const HologramViewer = ({ modelPath }) => {
  return (
    <div className="w-full h-[350px] flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />
        <OrbitControls enableZoom enableRotate />
        <Model src={modelPath} />
      </Canvas>
    </div>
  );
};

export default HologramViewer;
