import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Ball({ color }) {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
    </Float>
  );
}

const BallCanvas = ({ color }) => (
  <Canvas
    dpr={[1, 1.5]}
    gl={{ preserveDrawingBuffer: false }}
    frameloop="demand"
  >
    <Suspense fallback={null}>
      <OrbitControls enableZoom={false} />
      <Ball color={color} />
    </Suspense>
  </Canvas>
);

export default BallCanvas;
