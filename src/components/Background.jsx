import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

const AnimatedStars = () => {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0002;
      starsRef.current.rotation.x += 0.0001;
    }
  });

  return (
    <>
      <Stars
        ref={starsRef}
        radius={500}
        depth={250}
        count={8000}
        factor={20}
        saturation={0.9}
        fade
        speed={1.5}
      />
      <Stars
        radius={300}
        depth={150}
        count={4000}
        factor={15}
        saturation={0.8}
        fade
        speed={1}
      />
      <Stars
        radius={200}
        depth={100}
        count={2000}
        factor={10}
        saturation={0.7}
        fade
        speed={0.8}
      />
    </>
  );
};

const TwinklingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStars = () => {
      const newStars = Array.from({ length: 300 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 60 + 180}, 100%, 80%)`
      }));
      setStars(newStars);
    };

    createStars();
    const interval = setInterval(createStars, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}
    </div>
  );
};

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = Array.from({ length: 100 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.1,
        color: `hsl(${Math.random() * 60 + 180}, 100%, 80%)`
      }));
      setParticles(newParticles);
    };

    createParticles();
    const interval = setInterval(createParticles, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            opacity: particle.opacity
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: particle.speed * 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const MouseFollowingStars = ({ mousePosition }) => {
  const starsRef = useRef();
  const [stars, setStars] = useState([]);
  const animationFrameRef = useRef();

  useEffect(() => {
    const initialStars = Array.from({ length: 300 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.8 + 0.2,
      opacity: Math.random() * 0.6 + 0.4,
      color: `hsl(${Math.random() * 60 + 180}, 100%, 80%)`
    }));
    setStars(initialStars);

    const animate = () => {
      setStars(prevStars => 
        prevStars.map(star => ({
          ...star,
          x: star.x + (mousePosition.x * star.speed),
          y: star.y + (mousePosition.y * star.speed)
        }))
      );
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div ref={starsRef} className="absolute inset-0 pointer-events-none">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
            opacity: star.opacity
          }}
        />
      ))}
    </div>
  );
};

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full max-w-[1920px] mx-auto">
      {/* Darker Space Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0a0f2e] via-30% via-[#0f1b3d] via-60% via-[#0a0f2e] to-[#050816]" />

      {/* 3D Stars */}
      <div className="absolute inset-0">
        <Canvas>
          <AnimatedStars />
        </Canvas>
      </div>

      {/* Twinkling Stars */}
      <TwinklingStars />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Mouse Following Stars */}
      <MouseFollowingStars mousePosition={mousePosition} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5" />
      
      {/* Enhanced Mouse Follow Effect */}
      <div 
        className="absolute w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] rounded-full bg-gradient-to-r from-[#b3cfff]/5 via-[#274690]/5 to-[#1976d2]/5 blur-3xl pointer-events-none transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 300}px, ${mousePosition.y * 300}px)`,
          left: '50%',
          top: '50%',
          marginLeft: '-400px',
          marginTop: '-400px'
        }}
      />

      {/* Space Nebula Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-gradient-to-r from-[#b3cfff]/5 to-[#274690]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-gradient-to-r from-[#1976d2]/5 to-[#0a1447]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-r from-[#b3cfff]/5 to-[#1976d2]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 right-1/3 w-[500px] md:w-[900px] h-[500px] md:h-[900px] bg-gradient-to-r from-[#274690]/5 to-[#0a1447]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-1/3 w-[700px] md:w-[1100px] h-[700px] md:h-[1100px] bg-gradient-to-r from-[#1976d2]/5 to-[#0a1447]/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Enhanced Depth Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050816]/90 to-[#050816]" />

      {/* Star Field Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#050816] opacity-80" />
    </div>
  );
} 