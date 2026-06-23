import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function FloatingSphere() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#915eff"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

function Ring() {
  const ringRef = useRef();
  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
      ringRef.current.rotation.z = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3.2, 0.08, 16, 100]} />
      <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.3} metalness={0.9} roughness={0.1} />
    </mesh>
  );
}

function Ring2() {
  const ringRef = useRef();
  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 4;
      ringRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });
  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[4, 0.04, 16, 100]} />
      <meshStandardMaterial color="#915eff" emissive="#915eff" emissiveIntensity={0.2} metalness={0.9} roughness={0.1} />
    </mesh>
  );
}

function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="canvas-loader" />
    </div>
  );
}

const HeroCanvas = () => (
  <Canvas
    camera={{ position: [0, 0, 8], fov: 45 }}
    gl={{ antialias: true, alpha: true }}
    dpr={[1, 1.5]}
  >
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} color="#915eff" intensity={2} />
      <pointLight position={[5, 5, 5]} color="#00d4ff" intensity={1.5} />
      <FloatingSphere />
      <Ring />
      <Ring2 />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Suspense>
  </Canvas>
);

export default HeroCanvas;
