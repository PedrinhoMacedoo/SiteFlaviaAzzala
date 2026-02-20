import React, { useEffect, useRef, useState } from 'react';

const ACCENT = '#F5D060';
const CARD_BG = '#080808';

const steps = [
    {
        number: '01',
        title: 'Ticket Médio Explosivo',
        text: 'Trabalhamos com pacotes (multi-frascos). Um único cliente gasta $200 a $500.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Funil de Upsell',
        text: 'Permite múltiplas vendas na mesma transação. Cada clique vale mais.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'LTV e Recorrência',
        text: 'Alta taxa de recompra e assinatura. Clientes voltam sozinhos, mês após mês.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Previsibilidade',
        text: 'Mais margem para tráfego significa escala segura. Sem sustos no caixa.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
];

export const NutraCarousel: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionHeight = sectionRef.current.offsetHeight;
            const viewportH = window.innerHeight;

            const scrolled = -rect.top;
            const scrollableRange = sectionHeight - viewportH;
            const rawProgress = Math.max(0, Math.min(0.999, scrolled / scrollableRange));

            const idx = Math.floor(rawProgress * steps.length);
            setActiveIndex(Math.min(idx, steps.length - 1));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="nutra-section"
            className="relative w-full z-20"
            style={{
                backgroundColor: '#000',
                height: `${steps.length * 80}vh`,
            }}
        >
            {/* Sticky container */}
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                {/* Background glow */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[180px] opacity-[0.04] pointer-events-none"
                    style={{ backgroundColor: ACCENT }}
                />

                {/* ─── HEADER ─── */}
                <div className="flex-shrink-0 pt-4 sm:pt-10 pb-8 sm:pb-6 flex flex-col items-center gap-1.5 sm:gap-3 text-center px-5 sm:px-8 relative z-10">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
                        <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: ACCENT }} />
                        <span
                            className="text-white/70 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase"
                            style={{ fontFamily: 'var(--subtitle-font)' }}
                        >
                            POR QUE NUTRA
                        </span>
                    </div>

                    <h2
                        className="text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight max-w-3xl"
                        style={{ fontFamily: 'var(--title-font)' }}
                    >
                        Por que Nutra é a categoria mais{' '}
                        <span style={{ color: ACCENT }}>lucrativa</span> nos EUA?
                    </h2>
                </div>

                {/* ─── TIMELINE DOTS ─── */}
                <div className="flex-shrink-0 w-full max-w-[500px] mx-auto px-8 sm:px-8 pb-10 sm:pb-8 relative z-10">
                    <div className="relative flex items-center justify-between">
                        {/* Track bg */}
                        <div className="absolute left-4 right-4 sm:left-5 sm:right-5 top-1/2 h-px -translate-y-1/2" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
                        {/* Active track */}
                        <div
                            className="absolute left-4 sm:left-5 top-1/2 h-px -translate-y-1/2 rounded-full"
                            style={{
                                width: `calc(${(activeIndex / (steps.length - 1)) * 100}% - ${activeIndex === 0 ? 0 : 20}px)`,
                                background: ACCENT,
                                transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                        />

                        {steps.map((step, i) => {
                            const isCurrent = i === activeIndex;
                            const isPassed = i < activeIndex;
                            return (
                                <div
                                    key={i}
                                    className="relative z-10"
                                    style={{
                                        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        transform: isCurrent ? 'scale(1.2)' : 'scale(1)',
                                    }}
                                >
                                    <div
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
                                        style={{
                                            backgroundColor: isCurrent ? ACCENT : isPassed ? `${ACCENT}18` : '#0c0c0c',
                                            border: `1.5px solid ${isCurrent ? ACCENT : isPassed ? `${ACCENT}50` : 'rgba(255,255,255,0.08)'}`,
                                            boxShadow: isCurrent ? `0 0 16px ${ACCENT}35` : 'none',
                                            transition: 'all 0.4s ease',
                                        }}
                                    >
                                        <span
                                            className="text-[9px] sm:text-[11px] font-bold"
                                            style={{
                                                color: isCurrent ? '#000' : isPassed ? ACCENT : 'rgba(255,255,255,0.2)',
                                                fontFamily: 'var(--subtitle-font)',
                                                transition: 'color 0.3s ease',
                                            }}
                                        >
                                            {step.number}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ─── CARD AREA ─── */}
                <div className="flex-shrink-0 flex items-center justify-center px-3 sm:px-8 relative z-10 overflow-hidden">
                    <div className="relative w-full max-w-[620px] min-h-[220px] sm:min-h-[280px] md:min-h-[300px]">
                        {steps.map((step, i) => {
                            const isActive = i === activeIndex;
                            const isPast = i < activeIndex;

                            return (
                                <div
                                    key={i}
                                    className="absolute inset-0"
                                    style={{
                                        opacity: isActive ? 1 : 0,
                                        transform: isActive
                                            ? 'translateY(0)'
                                            : isPast
                                                ? 'translateY(-20px)'
                                                : 'translateY(20px)',
                                        transition: 'opacity 0.45s ease, transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                                        pointerEvents: isActive ? 'auto' : 'none',
                                    }}
                                >
                                    <div
                                        className="relative w-full overflow-hidden"
                                        style={{
                                            backgroundColor: CARD_BG,
                                            border: '1px solid rgba(255, 255, 255, 0.08)',
                                            borderRadius: '1.25rem',
                                            padding: 'clamp(1.2rem, 3vw, 2rem) clamp(1.2rem, 3vw, 2rem) clamp(1.4rem, 3vw, 2.2rem)',
                                            boxShadow: '0 0 0 1px rgba(0,0,0,1), 0 20px 40px -10px rgba(0,0,0,0.8)',
                                        }}
                                    >
                                        {/* Number ghost */}
                                        <span
                                            className="absolute top-4 right-5 text-6xl font-black opacity-[0.03] pointer-events-none select-none"
                                            style={{ fontFamily: 'var(--title-font)' }}
                                        >
                                            {step.number}
                                        </span>

                                        <div className="relative z-10 flex flex-col gap-3">
                                            <div
                                                className="w-11 h-11 rounded-lg flex items-center justify-center"
                                                style={{
                                                    backgroundColor: `${ACCENT}08`,
                                                    border: `1px solid ${ACCENT}12`,
                                                }}
                                            >
                                                {step.icon}
                                            </div>

                                            <h3
                                                className="text-xl sm:text-2xl font-bold text-white"
                                                style={{ fontFamily: 'var(--title-font)' }}
                                            >
                                                {step.title}
                                            </h3>

                                            <div className="w-8 h-[2px] rounded-full" style={{ backgroundColor: ACCENT }} />

                                            <p
                                                className="text-[#a0a8b8] text-sm sm:text-base leading-relaxed max-w-md"
                                                style={{ fontFamily: 'var(--subtitle-font)' }}
                                            >
                                                {step.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ─── FOOTER ─── */}
                <div className="flex-shrink-0 pt-16 sm:pt-0 py-4 sm:py-6 flex justify-center px-5 relative z-20">
                    <p
                        className="text-center text-[#a0a8b8] text-[11px] sm:text-sm max-w-lg"
                        style={{ fontFamily: 'var(--subtitle-font)' }}
                    >
                        Diferente de infoproduto de ticket único, aqui você tem{' '}
                        <span className="text-white font-semibold">mais faturamento por cliente</span> e{' '}
                        <span className="text-white font-semibold">mais lucro no bolso</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};
