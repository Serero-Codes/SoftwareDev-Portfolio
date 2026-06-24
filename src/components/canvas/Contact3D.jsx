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
      const elapsed = clock.getElapsedTime();
      ref.current.rotation.y = elapsed * 0.05;

      const blend = (Math.sin(elapsed * 0.2) + 1) / 2;
      ref.current.material.color.lerpColors(colorA, colorB, blend);

      const flicker = Math.max(0.05, Math.sin(elapsed * 4) * 0.5 + 0.5);
      ref.current.material.opacity = 0.15 + flicker * 0.55;
      ref.current.material.size = 0.02 + flicker * 0.015;
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
