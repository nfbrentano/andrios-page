import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import styles from './HeroScene.module.css';

const HeroScene = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    // --- Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 8); // Slightly elevated view

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // --- Colors ---
    const accentColor = 0xffd166; // Golden accent
    const mutedColor = 0x444444;
    const lightColor = 0xffffff;

    // --- Content Groups ---
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Technical Soundstage Floor
    // Instead of a simple grid, a floor with 'tape markers' and technical data
    const grid = new THREE.GridHelper(40, 40, accentColor, 0x222222);
    grid.position.y = -2;
    grid.material.transparent = true;
    grid.material.opacity = 0.1;
    scene.add(grid);

    // 2. Set Fragments (Instead of random boxes)
    // Create structures that look like wall layouts or architectural segments
    const createSetFragment = (x, z, scale = 1, rotation = 0) => {
      const fragment = new THREE.Group();
      
      // Wall segment
      const wallGeo = new THREE.BoxGeometry(2, 3, 0.1);
      const wallMat = new THREE.MeshBasicMaterial({ 
        color: lightColor, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.1 
      });
      const wall = new THREE.Mesh(wallGeo, wallMat);
      fragment.add(wall);

      // Floor segment for the wall
      const floorGeo = new THREE.PlaneGeometry(2, 2);
      const floor = new THREE.Mesh(floorGeo, wallMat);
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -1.5;
      fragment.add(floor);

      // Accent lines (corners/guides)
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-1, -1.5, 0),
        new THREE.Vector3(-1, 1.5, 0),
        new THREE.Vector3(1, 1.5, 0),
      ]);
      const lineMat = new THREE.LineBasicMaterial({ color: accentColor, transparent: true, opacity: 0.4 });
      const lines = new THREE.Line(lineGeo, lineMat);
      fragment.add(lines);

      fragment.position.set(x, 0, z);
      fragment.rotation.y = rotation;
      fragment.scale.set(scale, scale, scale);
      
      return fragment;
    };

    const fragmentsCount = window.innerWidth < 768 ? 4 : 8;
    for (let i = 0; i < fragmentsCount; i++) {
      const frag = createSetFragment(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        Math.random() * 0.5 + 0.5,
        Math.random() * Math.PI
      );
      mainGroup.add(frag);
    }

    // 3. Camera Frustums (Representing cinematic camera views)
    const createCameraFrustum = (x, y, z) => {
      const frustumGroup = new THREE.Group();
      
      // The pyramid shape
      const geo = new THREE.ConeGeometry(1, 2, 4);
      const mat = new THREE.MeshBasicMaterial({ 
        color: accentColor, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.2 
      });
      const frustum = new THREE.Mesh(geo, mat);
      frustum.rotation.x = -Math.PI / 2;
      frustumGroup.add(frustum);

      // "Camera" body
      const bodyGeo = new THREE.BoxGeometry(0.4, 0.4, 0.6);
      const body = new THREE.Mesh(bodyGeo, mat);
      body.position.z = -1;
      frustumGroup.add(body);

      frustumGroup.position.set(x, y, z);
      frustumGroup.lookAt(0, 0, 0); // Point towards center
      
      return frustumGroup;
    };

    const cameras = [];
    const camCount = 3;
    for (let i = 0; i < camCount; i++) {
      const cam = createCameraFrustum(
        (Math.random() - 0.5) * 10,
        Math.random() * 4 + 1,
        (Math.random() - 0.5) * 6
      );
      cameras.push(cam);
      scene.add(cam);
    }

    // 4. Moving Technical Lights
    const spotlightGroup = new THREE.Group();
    scene.add(spotlightGroup);

    const createSpotlightBeam = () => {
      const geometry = new THREE.CylinderGeometry(0, 1.5, 10, 32);
      const material = new THREE.MeshBasicMaterial({
        color: accentColor,
        transparent: true,
        opacity: 0.03,
      });
      const beam = new THREE.Mesh(geometry, material);
      beam.rotation.x = Math.PI / 2;
      beam.position.z = 5;
      
      const lightSource = new THREE.Group();
      lightSource.add(beam);
      return lightSource;
    };

    const beams = [];
    for (let i = 0; i < 2; i++) {
      const beam = createSpotlightBeam();
      beam.position.set((Math.random() - 0.5) * 10, 5, -5);
      beams.push(beam);
      spotlightGroup.add(beam);
    }

    // --- Interaction & Animation ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 200;
      mouseY = (event.clientY - window.innerHeight / 2) / 200;
    };

    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', onMouseMove);
    }

    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Smooth parallax
      targetX += (mouseX - targetX) * 0.02;
      targetY += (mouseY - targetY) * 0.02;
      
      mainGroup.rotation.y = targetX;
      mainGroup.rotation.x = -targetY * 0.5;

      // Animate beams (scanning effect)
      beams.forEach((beam, i) => {
        const time = Date.now() * 0.0005;
        beam.rotation.y = Math.sin(time + i) * 0.5;
        beam.rotation.x = Math.cos(time * 0.8 + i) * 0.2;
      });

      // Subtle float for fragments
      mainGroup.children.forEach((frag, i) => {
        const time = Date.now() * 0.0005;
        frag.position.y = Math.sin(time + i) * 0.2;
      });

      // Rotate cameras slightly
      cameras.forEach((cam, i) => {
        cam.position.x += Math.sin(Date.now() * 0.0001 + i) * 0.005;
      });

      renderer.render(scene, camera);
    };

    animate();

    const timer = setTimeout(() => setIsVisible(true), 100);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(timer);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      className={`${styles.canvasContainer} ${isVisible ? styles.visible : ''}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};

export default HeroScene;
