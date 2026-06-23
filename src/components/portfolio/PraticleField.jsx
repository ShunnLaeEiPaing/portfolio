import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 200 }) {
  const pointsRef = useRef();

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  const material = useMemo(() => new THREE.PointsMaterial({
    size: 0.04,
    color: '#6366F1',
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  }), []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}

function FloatingGeometry() {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
  });

  return (
    <mesh ref={meshRef} position={[2, 0, -3]}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshStandardMaterial color="#6366F1" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

function FloatingTorus() {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.08;
    meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.2) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[-3, 1, -5]}>
      <torusGeometry args={[1, 0.3, 16, 32]} />
      <meshStandardMaterial color="#06B6D4" wireframe transparent opacity={0.1} />
    </mesh>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0" aria-label="Interactive 3D particle background">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#6366F1" />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#06B6D4" />
        <Particles />
        <FloatingGeometry />
        <FloatingTorus />
      </Canvas>
    </div>
  );
}