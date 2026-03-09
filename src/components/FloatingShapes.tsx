import { useEffect, useState } from "react";

const FloatingShapes = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large purple orb */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(265, 90%, 65% / 0.15), transparent 70%)',
          top: '10%',
          left: '-10%',
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      {/* Blue orb */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(200, 100%, 55% / 0.12), transparent 70%)',
          top: '40%',
          right: '-8%',
          transform: `translateY(${scrollY * 0.15}px)`,
          animationDelay: '1.5s',
        }}
      />
      {/* Pink orb */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(330, 85%, 60% / 0.1), transparent 70%)',
          top: '70%',
          left: '20%',
          transform: `translateY(${scrollY * 0.08}px)`,
          animationDelay: '3s',
        }}
      />
      {/* Small floating geometric shapes */}
      <div
        className="absolute w-4 h-4 border border-primary/30 rotate-45 animate-float"
        style={{ top: '20%', left: '15%', animationDelay: '0s' }}
      />
      <div
        className="absolute w-3 h-3 bg-secondary/20 rounded-full animate-float"
        style={{ top: '35%', right: '20%', animationDelay: '2s' }}
      />
      <div
        className="absolute w-5 h-5 border border-accent/20 rounded-full animate-float-slow"
        style={{ top: '55%', left: '8%', animationDelay: '1s' }}
      />
      <div
        className="absolute w-2 h-2 bg-primary/30 rotate-45 animate-float"
        style={{ top: '75%', right: '12%', animationDelay: '4s' }}
      />
      <div
        className="absolute w-6 h-6 border border-secondary/15 rotate-12 animate-float-slow"
        style={{ top: '85%', left: '45%', animationDelay: '2.5s' }}
      />
    </div>
  );
};

export default FloatingShapes;
