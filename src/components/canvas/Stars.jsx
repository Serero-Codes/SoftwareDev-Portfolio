import { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Color } from "three";

const seededRandom = (seed) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

function StarField() {
  const ref = useRef();
  const colorA = useMemo(() => new Color("#FF3131"), []);
  const colorB = useMemo(() => new Color("#B3CFE5"), []);
  const positions = useMemo(() => {
    const points = new Float32Array(6000);
    for (let i = 0; i < 6000; i++) {
      const r = 1.2;
      const u = seededRandom(i + 1);
      const v = seededRandom(i + 2001);
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      points[i] = r * Math.sin(phi) * Math.cos(theta) * (0.5 + seededRandom(i + 4001) * 0.5);
      points[i] += (seededRandom(i + 6001) - 0.5) * 1.5;
    }
    return points;
  }, []);

  useFrame(({ clock }, delta) => {
    if (ref.current) {
      const elapsed = clock.getElapsedTime();
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;

      const blend = (Math.sin(elapsed * 0.2) + 1) / 2;
      ref.current.material.color.lerpColors(colorA, colorB, blend);

      const flicker = Math.max(0.05, Math.sin(elapsed * 4) * 0.5 + 0.5);
      ref.current.material.opacity = 0.2 + flicker * 0.6;
      ref.current.material.size = 0.003 + flicker * 0.0015;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#FF3131"
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
