import { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Color } from "three";

const seededRandom = (seed) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

function Particles() {
  const ref = useRef();
  const colorA = useMemo(() => new Color("#FF3131"), []);
  const colorB = useMemo(() => new Color("#B3CFE5"), []);
  const positions = useMemo(() => {
    const count = 2000;
    const points = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      points[i] = (seededRandom(i + 1) - 0.5) * 10;
    }
    return points;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#FF3131"
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
