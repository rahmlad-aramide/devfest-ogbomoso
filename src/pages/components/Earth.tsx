import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Sphere ref={earthRef} args={[1, 64, 64]}>
      <meshStandardMaterial
        map={new THREE.TextureLoader().load('/earth-map.jpg')}
        normalMap={new THREE.TextureLoader().load('/earth-normal.jpg')}
        roughnessMap={new THREE.TextureLoader().load('/earth-roughness.jpg')}
      />
    </Sphere>
  );
}