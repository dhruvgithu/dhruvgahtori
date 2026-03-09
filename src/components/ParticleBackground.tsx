import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = [
      'hsl(265, 90%, 65%)',   // purple
      'hsl(200, 100%, 55%)',  // blue
      'hsl(330, 85%, 60%)',   // pink
      'hsl(270, 100%, 70%)',  // neon purple
      'hsl(185, 100%, 55%)',  // cyan
      'hsl(150, 100%, 50%)',  // green
    ];

    const initParticles = () => {
      const particleCount = 120;
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2.5 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.3,
        });
      }
    };
    initParticles();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 180) {
          const force = (180 - distance) / 180;
          particle.vx += (dx / distance) * force * 0.015;
          particle.vy += (dy / distance) * force * 0.015;
        }

        particle.vx *= 0.99;
        particle.vy *= 0.99;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        const glowColor = particle.color.replace(')', `, ${particle.alpha * 0.2})`).replace('hsl', 'hsla');
        ctx.fillStyle = glowColor;
        ctx.fill();

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        const particleColor = particle.color.replace(')', `, ${particle.alpha})`).replace('hsl', 'hsla');
        ctx.fillStyle = particleColor;
        ctx.fill();

        // Draw connections
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index >= otherIndex) return;

          const cdx = particle.x - otherParticle.x;
          const cdy = particle.y - otherParticle.y;
          const cdistance = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdistance < 130) {
            const opacity = 0.15 * (1 - cdistance / 130);
            ctx.beginPath();
            const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y);
            gradient.addColorStop(0, particle.color.replace(')', `, ${opacity})`).replace('hsl', 'hsla'));
            gradient.addColorStop(1, otherParticle.color.replace(')', `, ${opacity})`).replace('hsl', 'hsla'));
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
};

export default ParticleBackground;
