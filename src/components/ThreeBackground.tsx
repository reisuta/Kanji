'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // 書道的なパーティクルシステム
    const inkParticles = new THREE.BufferGeometry();
    const inkParticleCount = 800;
    const inkPositions = new Float32Array(inkParticleCount * 3);
    const inkColors = new Float32Array(inkParticleCount * 3);
    const inkSizes = new Float32Array(inkParticleCount);

    for (let i = 0; i < inkParticleCount * 3; i += 3) {
      // より重厚感のある配置
      const radius = Math.random() * 120 + 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      inkPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      inkPositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      inkPositions[i + 2] = radius * Math.cos(phi);

      // 深い色調
      const colorChoice = Math.random();
      const color = new THREE.Color();
      if (colorChoice < 0.4) {
        // 金色系
        color.setHSL(0.1 + Math.random() * 0.1, 0.8, 0.3 + Math.random() * 0.3);
      } else if (colorChoice < 0.7) {
        // 赤色系
        color.setHSL(0.0 + Math.random() * 0.05, 0.9, 0.2 + Math.random() * 0.3);
      } else {
        // 深い紫系
        color.setHSL(0.8 + Math.random() * 0.1, 0.7, 0.15 + Math.random() * 0.2);
      }
      
      inkColors[i] = color.r;
      inkColors[i + 1] = color.g;
      inkColors[i + 2] = color.b;
      
      inkSizes[i / 3] = Math.random() * 3 + 1;
    }

    inkParticles.setAttribute('position', new THREE.BufferAttribute(inkPositions, 3));
    inkParticles.setAttribute('color', new THREE.BufferAttribute(inkColors, 3));
    inkParticles.setAttribute('size', new THREE.BufferAttribute(inkSizes, 1));

    const inkMaterial = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });

    const inkParticleSystem = new THREE.Points(inkParticles, inkMaterial);
    scene.add(inkParticleSystem);

    // 漢字を模したジオメトリ
    const kanjiShapes: THREE.Mesh[] = [];
    
    // より複雑な形状を作成
    for (let i = 0; i < 8; i++) {
      const geometry = new THREE.BoxGeometry(
        Math.random() * 15 + 5,
        Math.random() * 15 + 5,
        Math.random() * 2 + 0.5
      );
      
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(
          Math.random() < 0.5 ? 0.1 : 0.0, // 金色か赤色
          0.8,
          0.3
        ),
        transparent: true,
        opacity: 0.15,
        wireframe: Math.random() < 0.3,
      });

      const kanjiShape = new THREE.Mesh(geometry, material);
      kanjiShape.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 100
      );
      kanjiShape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      scene.add(kanjiShape);
      kanjiShapes.push(kanjiShape);
    }

    // 筆線を模したライン
    const lineGeometry = new THREE.BufferGeometry();
    const linePoints = [];
    for (let i = 0; i < 50; i++) {
      const t = i / 49;
      const x = Math.sin(t * Math.PI * 4) * 30;
      const y = Math.cos(t * Math.PI * 2) * 20;
      const z = t * 40 - 20;
      linePoints.push(new THREE.Vector3(x, y, z));
    }
    lineGeometry.setFromPoints(linePoints);
    
    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(0.8, 0.4, 0.2),
      transparent: true,
      opacity: 0.3,
    });
    
    const brushStroke = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(brushStroke);

    camera.position.set(0, 0, 80);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // パーティクルの回転（より荘厳に）
      inkParticleSystem.rotation.x += 0.0005;
      inkParticleSystem.rotation.y += 0.001;

      // 漢字形状のアニメーション
      kanjiShapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 * (index % 2 === 0 ? 1 : -1);
        shape.rotation.y += 0.003 * (index % 3 === 0 ? 1 : -1);
        shape.position.x += Math.sin(time * 0.5 + index) * 0.02;
        shape.position.y += Math.cos(time * 0.3 + index) * 0.015;
      });

      // 筆線のアニメーション
      brushStroke.rotation.z += 0.002;
      brushStroke.position.x = Math.sin(time * 0.2) * 10;

      // カメラの微細な動き
      camera.position.x = Math.sin(time * 0.1) * 2;
      camera.position.y = Math.cos(time * 0.15) * 1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
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
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ zIndex: -1 }}
    />
  );
}