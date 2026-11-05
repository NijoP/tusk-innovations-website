import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  dark?: boolean;
}

export function Section({ id, className = '', children, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b transition-colors ${
        dark
          ? 'bg-[#121417] text-white border-neutral-800'
          : 'bg-[#faf9f6] text-[#121316] border-[#e6e5e0]'
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
  align = 'left',
}: SectionHeaderProps) {
  const isCenter = align === 'center';
  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-mono font-medium uppercase tracking-wider mb-3 px-2 py-0.5 rounded-sm ${
            dark
              ? 'text-[#ff5500] bg-[#ff5500]/10 border border-[#ff5500]/20'
              : 'text-[#ff5500] bg-[#ff5500]/10 border border-[#ff5500]/20'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-[#121316]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-neutral-400' : 'text-[#585c65]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
