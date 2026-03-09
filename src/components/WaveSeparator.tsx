interface WaveSeparatorProps {
  variant?: 'purple' | 'blue' | 'pink';
  flip?: boolean;
}

const WaveSeparator = ({ variant = 'purple', flip = false }: WaveSeparatorProps) => {
  const colors = {
    purple: { from: 'hsl(265, 90%, 65%)', to: 'hsl(200, 100%, 55%)' },
    blue: { from: 'hsl(200, 100%, 55%)', to: 'hsl(150, 100%, 50%)' },
    pink: { from: 'hsl(330, 85%, 60%)', to: 'hsl(265, 90%, 65%)' },
  };

  const { from, to } = colors[variant];
  const gradientId = `wave-gradient-${variant}-${flip ? 'flip' : 'normal'}`;

  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={from} stopOpacity="0.3" />
            <stop offset="50%" stopColor={to} stopOpacity="0.15" />
            <stop offset="100%" stopColor={from} stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,40 1440,50 L1440,120 L0,120 Z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="M0,60 C240,20 480,80 720,40 C960,0 1200,80 1440,30 L1440,120 L0,120 Z"
          fill={`url(#${gradientId})`}
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default WaveSeparator;
