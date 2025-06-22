import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Profile3D = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const ringRef = useRef(null);
  const particlesRef = useRef(null);
  const lightsRef = useRef([]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create rotating ring
    const ringGeometry = new THREE.TorusGeometry(1.5, 0.1, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x8c00b0,
      transparent: true,
      opacity: 0.8
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ringRef.current = ring;
    scene.add(ring);

    // Create particle system
    const particleCount = 50;
    const particles = new THREE.Group();
    particlesRef.current = particles;

    for (let i = 0; i < particleCount; i++) {
      const particleGeometry = new THREE.SphereGeometry(0.02, 8, 8);
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.8, 0.6),
        transparent: true,
        opacity: 0.7
      });
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      
      // Random position around the ring
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.5 + Math.random() * 0.5;
      particle.position.x = Math.cos(angle) * radius;
      particle.position.y = Math.sin(angle) * radius;
      particle.position.z = (Math.random() - 0.5) * 0.5;
      
      particle.userData = {
        originalPosition: particle.position.clone(),
        speed: Math.random() * 0.02 + 0.01,
        angle: angle
      };
      
      particles.add(particle);
    }
    scene.add(particles);

    // Create dynamic lights
    const lights = [];
    const lightColors = [0xff00ff, 0x00ffff, 0xffff00]; // magenta, cyan, yellow
    
    for (let i = 0; i < 3; i++) {
      const light = new THREE.PointLight(lightColors[i], 1, 10);
      light.position.set(
        Math.cos(i * Math.PI * 2 / 3) * 2,
        Math.sin(i * Math.PI * 2 / 3) * 2,
        1
      );
      lights.push(light);
      scene.add(light);
    }
    lightsRef.current = lights;

    // Mouse/touch interaction
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const handleMouseMove = (event) => {
      if (!isHovering) return;
      
      const rect = mountRef.current.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      mouseX = 0;
      mouseY = 0;
    };

    const handleTouchMove = (event) => {
      if (!isHovering) return;
      
      const rect = mountRef.current.getBoundingClientRect();
      const touch = event.touches[0];
      mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
    };

    mountRef.current.addEventListener('mousemove', handleMouseMove);
    mountRef.current.addEventListener('mouseenter', handleMouseEnter);
    mountRef.current.addEventListener('mouseleave', handleMouseLeave);
    mountRef.current.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.016;

      // Rotate ring
      if (ringRef.current) {
        ringRef.current.rotation.x += 0.01;
        ringRef.current.rotation.y += 0.015;
        
        // Interactive rotation based on mouse
        ringRef.current.rotation.x += mouseY * 0.1;
        ringRef.current.rotation.y += mouseX * 0.1;
      }

      // Animate particles
      if (particlesRef.current) {
        particlesRef.current.children.forEach((particle, index) => {
          const userData = particle.userData;
          
          // Rotate around the ring
          userData.angle += userData.speed;
          const radius = 1.5 + Math.sin(time + index) * 0.2;
          
          particle.position.x = Math.cos(userData.angle) * radius;
          particle.position.y = Math.sin(userData.angle) * radius;
          particle.position.z = Math.sin(time * 2 + index) * 0.3;
          
          // React to mouse movement
          if (isHovering) {
            particle.position.x += mouseX * 0.1;
            particle.position.y += mouseY * 0.1;
          }
        });
      }

      // Animate lights
      lightsRef.current.forEach((light, index) => {
        const angle = time * 0.5 + (index * Math.PI * 2 / 3);
        const radius = 2 + Math.sin(time + index) * 0.5;
        
        light.position.x = Math.cos(angle) * radius;
        light.position.y = Math.sin(angle) * radius;
        light.position.z = Math.sin(time * 2 + index) * 0.5 + 1;
        
        // Interactive light movement
        if (isHovering) {
          light.position.x += mouseX * 0.5;
          light.position.y += mouseY * 0.5;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeEventListener('mousemove', handleMouseMove);
      mountRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      mountRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      mountRef.current?.removeEventListener('touchmove', handleTouchMove);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      if (rendererRef.current) rendererRef.current.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer'
      }}
    />
  );
};

export default Profile3D; 