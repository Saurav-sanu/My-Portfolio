import React, { Suspense, use } from 'react';
import { Canvas } from '@react-three/fiber';
import HeroText from '../components/HeroText';
import ParallaxBackground from '../components/ParallaxBackground';
import { Astronaut } from '../components/Astronaut';
import { useMediaQuery } from 'react-responsive';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import Loader from "../components/Loader";



const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: 853});
  return (
    <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
      <HeroText />
      <ParallaxBackground />
      
      <figure 
        className='absolute inset-0'
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
          <Float>
            <Suspense fallback={<Loader/>}>
              <Astronaut 
                scale={isMobile ? 0.16 : 0.27} 
                position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]} 
              />
            </Suspense>
          </Float>
         
          <Rig />

        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
