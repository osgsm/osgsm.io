"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function GradientMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Specify the type of shader material
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        vec2 p = vUv * 2.0 - 1.0;

        float t = uTime * 0.1;
        vec3 color1 = vec3(0.3, 0.0745, 0.4);
        vec3 color2 = vec3(0.0745, 0.0745, 0.118);

        // Create wave patterns by combining two sine waves
        float wave1 = sin(p.x * 3.0 + t) * 0.5;
        float wave2 = sin(p.y * 2.0 - t * 1.5) * 0.5;
        float waves = wave1 + wave2;

        vec3 color = mix(
          color1,
          color2,
          smoothstep(-0.75, 0.75, waves)
        );

        gl_FragColor = vec4(color, 0.1);
      }
    `,
    transparent: true,
  }) as THREE.ShaderMaterial;

  useFrame((state) => {
    if (
      !meshRef.current ||
      !(meshRef.current.material instanceof THREE.ShaderMaterial)
    )
      return;

    // Update the time
    meshRef.current.material.uniforms.uTime.value += 0.01;
  });

  return (
    <mesh ref={meshRef} material={material}>
      <planeGeometry args={[2, 2]} />
    </mesh>
  );
}

export const GradientBackground = () => {
  return (
    <div className="-z-10 pointer-events-none fixed inset-0">
      <Canvas camera={{ position: [0, 0, 1] }} orthographic>
        <GradientMesh />
      </Canvas>
    </div>
  );
};
