import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Particles
function FloatingParticles() {
  const pointsRef = useRef(null);

  // Generate random particles
  const [positions, mathRef] = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20; // x
      positions[i * 3 + 1] = Math.random() * 10; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
    }
    return [positions, { time: 0 }];
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      mathRef.time += delta * 0.1;
      pointsRef.current.rotation.y = mathRef.time * 0.5;
      pointsRef.current.position.y = Math.sin(mathRef.time) * 0.5;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

// Camera parallax rig
function CameraRig({ mousePosition }) {
  useFrame((state, delta) => {
    const targetX = mousePosition.x * 2;
    const targetY = mousePosition.y * 1 + 2; // Offset Y to look slightly down

    state.camera.position.x += (targetX - state.camera.position.x) * delta * 2;
    state.camera.position.y += (targetY - state.camera.position.y) * delta * 2;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function CanvasBackground({ mousePosition }) {
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
      <color attach="background" args={['#020202']} />
      <fog attach="fog" args={['#020202', 5, 25]} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <FloatingParticles />
      
      <Grid
        position={[0, -1, 0]}
        args={[30, 30]}
        cellSize={1}
        cellThickness={1}
        cellColor="#0a192f"
        sectionSize={5}
        sectionThickness={1.5}
        sectionColor="#1a365d"
        fadeDistance={25}
        fadeStrength={1.5}
      />
      
      <CameraRig mousePosition={mousePosition} />
    </Canvas>
  );
}
