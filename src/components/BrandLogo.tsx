import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  theme?: 'light' | 'dark';
}

export function BrandLogo({
  className = '',
  size = 36,
  showText = true,
  theme = 'light',
}: BrandLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div 
        className="relative overflow-hidden rounded-md border border-neutral-200/60 shadow-xs flex items-center justify-center bg-white"
        style={{ width: size, height: size }}
      >
        <Image
          src="/brand/tusk-logo.jpg"
          alt="TUSK Innovations Official Logo"
          width={size}
          height={size}
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col text-left leading-none">
          <span className={`text-[15px] font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#121316]'}`}>
            TUSK <span className="font-medium text-[#ff5500]">INNOVATIONS</span>
          </span>
          <span className={`text-[9px] font-mono uppercase tracking-widest mt-0.5 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
            Global Private Limited
          </span>
        </div>
      )}
    </div>
  );
}
