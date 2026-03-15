import Link from 'next/link';

interface CTAProps {
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export default function CTA({ title, description, primaryCta, secondaryCta }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0E17] to-[#111827] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0066FF]/5 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
          {title}
        </h2>
        <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white font-semibold shadow-lg shadow-[#0066FF]/20 hover:shadow-[#0066FF]/40 transition-all duration-200 hover:-translate-y-1"
            >
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center px-8 py-4 rounded-xl border border-[#3D4A5C] text-[#F8FAFC] font-semibold hover:border-[#0066FF] hover:text-[#0066FF] transition-all duration-200"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
