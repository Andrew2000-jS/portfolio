import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Button,
  CanvasLoader,
  Cube,
  HackerRoom,
  HeroCamera,
  ReactLogo,
  Rings,
  Target,
} from "../../components";
import { Suspense, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../../lib";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full flex flex-col relative"
      id="home"
    >
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I’m Andrés Arévalo <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          {isVisible && (
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />
              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  scale={sizes.deskScale}
                  position={sizes.deskPosition}
                  rotation={[0.1, -Math.PI, 0]}
                />
              </HeroCamera>
              <group>
                <Target
                  position={sizes.targetPosition as [number, number, number]}
                />
                <ReactLogo
                  position={sizes.reactLogoPosition as [number, number, number]}
                />
                <Rings
                  position={sizes.ringPosition as [number, number, number]}
                />
                <Cube
                  position={sizes.cubePosition as [number, number, number]}
                />
              </group>
              <ambientLight intensity={1} />
              <directionalLight
                position={[10, 10, 10]}
                intensity={0.5}
                castShadow={false}
              />
            </Suspense>
          )}
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
