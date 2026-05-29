'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { miniShapeFrame, miniLightFrame } from './ThreeAnimations.res.mjs';
import { miniShapeColor, miniBloodColor } from './ThreeColors.res.mjs';

interface MiniThreeVisualizationProps {
  width?: number;
  height?: number;
}

export default function MiniThreeVisualization({ 
  width = 300, 
  height = 200 
}: MiniThreeVisualizationProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // 恐怖の漢字形状を作成
    const kanjiShapes: THREE.Mesh[] = [];
    
    // より複雑で恐ろしい形状
    for (let i = 0; i < 12; i++) {
      let geometry;
      const shapeType = Math.random();
      
      if (shapeType < 0.3) {
        // 鋭利な三角錐（刃物のような）
        geometry = new THREE.ConeGeometry(
          Math.random() * 3 + 1,
          Math.random() * 8 + 4,
          4
        );
      } else if (shapeType < 0.6) {
        // 歪んだ直方体
        geometry = new THREE.BoxGeometry(
          Math.random() * 4 + 1,
          Math.random() * 6 + 2,
          Math.random() * 1 + 0.2
        );
      } else {
        // 不気味な球体
        geometry = new THREE.SphereGeometry(
          Math.random() * 2 + 0.5,
          6,
          6
        );
      }
      
      const hsl = miniShapeColor(Math.random(), Math.random());
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(hsl.hue, hsl.saturation, hsl.lightness),
        transparent: true,
        opacity: 0.6 + Math.random() * 0.4,
        wireframe: Math.random() < 0.4,
      });

      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      scene.add(shape);
      kanjiShapes.push(shape);
    }

    // 血のようなパーティクル
    const bloodParticles = new THREE.BufferGeometry();
    const bloodParticleCount = 200;
    const bloodPositions = new Float32Array(bloodParticleCount * 3);
    const bloodColors = new Float32Array(bloodParticleCount * 3);

    for (let i = 0; i < bloodParticleCount * 3; i += 3) {
      bloodPositions[i] = (Math.random() - 0.5) * 40;
      bloodPositions[i + 1] = (Math.random() - 0.5) * 30;
      bloodPositions[i + 2] = (Math.random() - 0.5) * 30;

      const bloodHsl = miniBloodColor(Math.random());
      const color = new THREE.Color();
      color.setHSL(bloodHsl.hue, bloodHsl.saturation, bloodHsl.lightness);
      bloodColors[i] = color.r;
      bloodColors[i + 1] = color.g;
      bloodColors[i + 2] = color.b;
    }

    bloodParticles.setAttribute('position', new THREE.BufferAttribute(bloodPositions, 3));
    bloodParticles.setAttribute('color', new THREE.BufferAttribute(bloodColors, 3));

    const bloodMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
    });

    const bloodParticleSystem = new THREE.Points(bloodParticles, bloodMaterial);
    scene.add(bloodParticleSystem);

    // 悪魔的なライト
    const pointLight = new THREE.PointLight(0xff0000, 2, 50);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x660000, 1, 30);
    pointLight2.position.set(-10, -10, 5);
    scene.add(pointLight2);

    camera.position.set(15, 10, 25);
    camera.lookAt(0, 0, 0);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      kanjiShapes.forEach((shape, index) => {
        const f = miniShapeFrame(time, index);
        shape.rotation.x += f.rotationDeltaX;
        shape.rotation.y += f.rotationDeltaY;
        shape.rotation.z += f.rotationDeltaZ;
        shape.position.x += f.positionDeltaX;
        shape.position.y += f.positionDeltaY;
        shape.position.z += f.positionDeltaZ;
        shape.scale.setScalar(f.scale);
      });

      bloodParticleSystem.rotation.x += 0.002;
      bloodParticleSystem.rotation.y += 0.003;

      const lights = miniLightFrame(time);
      pointLight.position.x = lights.light1X;
      pointLight.position.y = lights.light1Y;
      pointLight.intensity = lights.light1Intensity;
      pointLight2.position.x = lights.light2X;
      pointLight2.position.z = lights.light2Z;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [width, height]);

  return (
    <div
      ref={mountRef}
      className="relative overflow-hidden rounded-lg border border-red-900/50 shadow-2xl shadow-red-900/30"
      style={{ width, height }}
    />
  );
}