import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function StarField() {
  const ref = useRef();

  // Generate random star positions in a sphere
  const positions = new Float32Array(6000);
  for (let i = 0; i < 6000; i++) {
    const r = 1.2;
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    positions[i] = r * Math.sin(phi) * Math.cos(theta) * (0.5 + Math.random() * 0.5);
    positions[i] += (Math.random() - 0.5) * 1.5;
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#e8d5ff"
          size={0.003}
          sizeAttenuation
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

const StarsCanvas = () => (
  <div className="w-full h-full absolute inset-0 z-[-1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarField />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
