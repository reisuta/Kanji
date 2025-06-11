'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

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
      
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(
          Math.random() < 0.7 ? 0.0 : 0.1, // 赤色系がメイン
          0.9,
          0.2 + Math.random() * 0.3
        ),
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

      // 血の色調
      const color = new THREE.Color();
      color.setHSL(0.0, 0.9, 0.1 + Math.random() * 0.3);
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

      // 恐ろしいアニメーション
      kanjiShapes.forEach((shape, index) => {
        // 不規則な回転
        shape.rotation.x += 0.01 * (index % 3 === 0 ? 1 : -1) * (1 + Math.sin(time + index) * 0.5);
        shape.rotation.y += 0.008 * (index % 2 === 0 ? 1 : -1) * (1 + Math.cos(time * 0.7 + index) * 0.3);
        shape.rotation.z += 0.005 * Math.sin(time * 1.2 + index);
        
        // 恐怖的な浮遊
        shape.position.x += Math.sin(time * 0.3 + index) * 0.05;
        shape.position.y += Math.cos(time * 0.4 + index * 0.7) * 0.03;
        shape.position.z += Math.sin(time * 0.2 + index * 1.3) * 0.04;

        // ランダムなスケール変化
        const scale = 1 + Math.sin(time * 2 + index) * 0.2;
        shape.scale.setScalar(scale);
      });

      // 血のパーティクル回転
      bloodParticleSystem.rotation.x += 0.002;
      bloodParticleSystem.rotation.y += 0.003;

      // ライトの不気味な動き
      pointLight.position.x = Math.sin(time * 0.5) * 15;
      pointLight.position.y = Math.cos(time * 0.3) * 10;
      pointLight.intensity = 1.5 + Math.sin(time * 3) * 0.5;

      pointLight2.position.x = Math.cos(time * 0.4) * -12;
      pointLight2.position.z = Math.sin(time * 0.6) * 8;

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