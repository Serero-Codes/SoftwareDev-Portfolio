import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function Particles() {
  const ref = useRef();
  const count = 2000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#915eff"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

const ContactCanvas = () => (
  <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true }}>
    <Suspense fallback={null}>
      <Particles />
    </Suspense>
  </Canvas>
);

export default ContactCanvas;
