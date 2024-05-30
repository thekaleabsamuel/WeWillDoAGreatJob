import React, { useEffect, useRef } from 'react';
import './Hero.css';

const HeroSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    let swingAngle = 0;
    const swingRadius = 5;

    const animateText = () => {
      swingAngle += 0.05;

      const x = Math.cos(swingAngle) * swingRadius;
      const y = Math.sin(swingAngle) * swingRadius;

      if (textRef.current) {
        textRef.current.style.textShadow = `
          ${-x}px ${-y}px 0 green,
          ${x}px ${-y}px 0 yellow,
          ${-x}px ${y}px 0 orange,
          ${x}px ${y}px 0 purple
        `;
      }

      requestAnimationFrame(animateText);
    };

    animateText();
  }, []);

  return (
    <div className="hero-section">
      <h1 ref={textRef}>We will do a great job!</h1>
    </div>
  );
};

export default HeroSection;