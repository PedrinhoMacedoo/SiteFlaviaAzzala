import React from 'react';

const ACCENT = '#F5D060';

const steps = [
    {
        number: '01',
        title: 'Múltiplos Upsells',
        text: 'Permite múltiplos upsells estruturados dentro do mesmo funil de vendas.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Trabalha com Pacotes',
        text: 'Modelos de venda baseados em multi-frascos para elevar o ticket da compra imediata.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Recompra e Assinatura',
        text: 'Possui forte cultura de recompra recorrente e assinaturas automáticas mensais.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Aumento do LTV',
        text: 'Aumenta significativamente o LTV (Lifetime Value) do cliente no médio e longo prazo.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
];

export const NutraCarousel: React.FC = () => {
    return (
        <section
            id="nutra-section"
            className="relative w-full py-4 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden z-20"
            style={{ backgroundColor: '#000' }}
        >
            {/* Mesh Gradients for background depth */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[120px] pointer-events-none"
                style={{ backgroundColor: ACCENT, background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)` }}
            />
            <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.02] blur-[100px] pointer-events-none"
                style={{ backgroundColor: ACCENT, background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)` }}
            />

            {/* HEADER */}
            <div className="flex flex-col items-center gap-6 text-center mb-8 sm:mb-10 relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md shadow-2xl">
                    <span className="text-white/80 text-[10px] sm:text-[0.8rem] font-bold tracking-[0.1em] uppercase" style={{ fontFamily: 'var(--subtitle-font)' }}>
                        — POR QUE NUTRA É A CATEGORIA IDEAL NOS EUA
                    </span>
                </div>

                <h2 className="text-[length:var(--mobile-title-size)] sm:text-[length:var(--desktop-title-size)] font-bold text-white leading-[1.2] max-w-4xl tracking-tight text-center uppercase" style={{ fontFamily: 'var(--title-font)' }}>
                    Dentro do mercado americano,<br /> <span style={{ color: ACCENT, position: 'relative' }}>
                        Nutra
                        <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                        </svg>
                    </span> é a categoria mais escalável
                </h2>

                {/* Frase de Impacto Principal - Hierarquia Clara */}
                <style>{`
                    .impact-text-white {
                        font-family: var(--title-font) !important;
                        font-size: clamp(1.25rem, 3.5vw, 2.25rem) !important;
                        line-height: 1.1 !important;
                        text-align: center !important;
                        margin-bottom: 0px !important;
                        display: block !important;
                    }
                    .impact-text-gold {
                        font-family: var(--title-font) !important;
                        font-size: clamp(1.25rem, 3.5vw, 2.25rem) !important;
                        line-height: 1.1 !important;
                        text-align: center !important;
                        text-shadow: 0 4px 16px rgba(245,208,96,0.3) !important;
                        display: block !important;
                    }
                `}</style>
                <div className="mt-4 sm:mt-6 flex flex-col items-center gap-0 max-w-5xl">
                    <p className="text-white font-black tracking-tighter uppercase impact-text-white">
                        Não é apenas vender em dólar.
                    </p>
                    <p className="text-[#F5D060] font-black tracking-tighter uppercase mt-0 sm:mt-1 impact-text-gold">
                        É vender dentro da <span className="underline decoration-[#F5D060]/50 underline-offset-[12px]">categoria certa</span>.
                    </p>
                    <p className="text-[#a0a8b8] text-base sm:text-lg font-light mt-4 sm:mt-5 opacity-90 uppercase tracking-widest text-center" style={{ fontFamily: 'var(--subtitle-font)' }}>
                        Porque ela permite uma estrutura agressiva e lucrativa desde o primeiro dia:
                    </p>
                </div>
            </div>

            {/* GRID LAYOUT - Replaces Carousel */}
            <div className="relative w-full max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 z-10 px-4 sm:px-6">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="relative group p-8 sm:p-10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:scale-[1.01]"
                        style={{
                            backgroundColor: 'rgba(10, 10, 10, 0.6)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                        }}
                    >
                        {/* Hover Border Shine */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                            style={{
                                background: `linear-gradient(135deg, ${ACCENT}15 0%, transparent 40%, transparent 60%, ${ACCENT}15 100%)`,
                                border: `1px solid ${ACCENT}30`,
                                borderRadius: 'inherit'
                            }}
                        />

                        <div className="relative z-10 flex flex-col items-start gap-6 h-full">
                            {/* Icon with glow */}
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center flex-shrink-0"
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                <div className="absolute inset-0 rounded-3xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity" style={{ backgroundColor: ACCENT }} />
                                {React.cloneElement(step.icon as React.ReactElement<any>, {
                                    width: 32,
                                    height: 32,
                                    strokeWidth: 1.5
                                })}
                            </div>

                            <div className="flex flex-col gap-3 flex-1 overflow-hidden relative">

                                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight break-words" style={{ fontFamily: 'var(--title-font)' }}>
                                    {step.title}
                                </h3>
                                <p className="text-[#a0a8b8] text-sm sm:text-base font-light leading-relaxed max-w-full" style={{ fontFamily: 'var(--subtitle-font)' }}>
                                    {step.text}
                                </p>
                            </div>

                            {/* Ghost Number (ajustado para ficar discreto no grid) */}
                            <span className="absolute top-4 right-6 text-6xl sm:text-8xl font-black opacity-10 pointer-events-none select-none tracking-tighter" style={{ fontFamily: 'var(--title-font)', color: ACCENT }}>
                                {step.number}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Final Statement Tags - Refined */}
            <div className="flex flex-col items-center gap-8 text-center mt-20 sm:mt-28 relative z-10 w-full max-w-4xl px-4">
                <p className="text-white/60 text-sm sm:text-base font-medium tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--subtitle-font)' }}>
                    Diferente de infoproduto… Aqui você tem:
                </p>

                <div className="relative flex overflow-x-hidden w-full max-w-[100vw] mt-4 w-screen -ml-4 sm:ml-0 sm:w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                    <div className="flex animate-ticker whitespace-nowrap gap-4 sm:gap-6">
                        {[
                            "Mais faturamento por cliente",
                            "Mais margem para tráfego",
                            "Mais previsibilidade de escala",
                            "Mais faturamento por cliente",
                            "Mais margem para tráfego",
                            "Mais previsibilidade de escala",
                        ].map((tag, idx) => (
                            <div key={idx} className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-sm shadow-lg hover:border-[#F5D060]/30 transition-all duration-300">
                                <span className="w-1.5 h-1.5 rounded-full shadow-[0_0_10px_rgba(245,208,96,0.6)]" style={{ backgroundColor: ACCENT }} />
                                <span className="text-[#e2e8f0] text-[0.85rem] sm:text-[0.95rem] font-medium tracking-wide">{tag}</span>
                            </div>
                        ))}
                    </div>

                    {/* Secondary list for seamless loop */}
                    <div className="absolute top-0 flex animate-ticker2 whitespace-nowrap gap-4 sm:gap-6 min-w-full">
                        {[
                            "Mais faturamento por cliente",
                            "Mais margem para tráfego",
                            "Mais previsibilidade de escala",
                            "Mais faturamento por cliente",
                            "Mais margem para tráfego",
                            "Mais previsibilidade de escala",
                        ].map((tag, idx) => (
                            <div key={`dup-${idx}`} className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-sm shadow-lg hover:border-[#F5D060]/30 transition-all duration-300">
                                <span className="w-1.5 h-1.5 rounded-full shadow-[0_0_10px_rgba(245,208,96,0.6)]" style={{ backgroundColor: ACCENT }} />
                                <span className="text-[#e2e8f0] text-[0.85rem] sm:text-[0.95rem] font-medium tracking-wide">{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-100% - 1rem)); }
                }
                @keyframes ticker2 {
                    0% { transform: translateX(calc(100% + 1rem)); }
                    100% { transform: translateX(0); }
                }
                .animate-ticker {
                    animation: ticker 30s linear infinite;
                }
                .animate-ticker2 {
                    animation: ticker2 30s linear infinite;
                }
                @media (min-width: 640px) {
                    @keyframes ticker {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-100% - 1.5rem)); }
                    }
                    @keyframes ticker2 {
                        0% { transform: translateX(calc(100% + 1.5rem)); }
                        100% { transform: translateX(0); }
                    }
                }
            `}</style>
        </section>
    );
};
