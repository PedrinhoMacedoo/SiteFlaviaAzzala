import React from 'react';
import { SovereignButton } from './SovereignButton';
import flaviaImg from '../assets/flavia-car.webp';

const ACCENT = '#F5D060';

const checkpoints = [
    'Estruturou operações que movimentaram múltiplos milhões no digital',
    'Desenvolveu modelos focados em ticket alto e margem real',
    'Ajudou operadores a saírem de mercados saturados e escalarem em moeda forte',
    'Participou da base estratégica de resultados que hoje se tornaram cases públicos no mercado',
];

export const Autoridade: React.FC = () => {
    return (
        <section
            id="autoridade-section"
            className="relative w-full py-[var(--section-py-mobile)] md:py-[var(--section-py)] px-4 sm:px-8 flex justify-center overflow-hidden z-20"
            style={{
                backgroundColor: '#000',
            }}
        >
            {/* Ambient glows */}
            <div
                className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full blur-[250px] opacity-[0.04] pointer-events-none"
                style={{ backgroundColor: ACCENT }}
            />
            <div
                className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-[0.03] pointer-events-none"
                style={{ backgroundColor: ACCENT }}
            />

            <div className="max-w-[1100px] w-full flex flex-col items-center gap-6 sm:gap-8 relative z-10">

                {/* Main Content Card */}
                <div
                    className="w-full rounded-[2rem] p-6 sm:p-12 md:p-16 scroll-top delay-200 relative overflow-hidden"
                    style={{
                        backgroundColor: '#0a0a0a',
                        border: `1px solid ${ACCENT}20`,
                    }}
                >
                    {/* Inner Content */}
                    <div className="flex flex-col gap-6 sm:gap-8 items-center relative z-10">

                        {/* Section Header (Now inside the card) */}
                        <div className="flex flex-col items-center gap-4 text-center w-full">
                            <h2
                                className="text-[1.75rem] sm:text-4xl md:text-5xl font-bold text-white leading-tight uppercase italic"
                                style={{ fontFamily: 'var(--title-font)' }}
                            >
                                QUEM ESTÁ POR <br />
                                TRÁS DA <span style={{ color: ACCENT }}>ESTRATÉGIA</span>
                            </h2>

                            <div className="inline-flex items-center self-center px-5 py-1.5 rounded-full border border-white/10 mt-1" style={{ backgroundColor: '#111' }}>
                                <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: ACCENT }} />
                                <span
                                    className="text-white/80 text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
                                    style={{ fontFamily: 'var(--subtitle-font)' }}
                                >
                                    ESTRATEGISTA DIGITAL
                                </span>
                            </div>
                        </div>

                        {/* Middle: Photo & Details Row */}
                        <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-center md:items-start w-full">

                            {/* Left: Photo with floating name */}
                            <div className="flex-shrink-0 flex flex-col items-center w-full md:w-auto relative mt-4 md:mt-6">
                                {/* Floating Name Badge */}
                                <div
                                    className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap"
                                    style={{
                                        backgroundColor: '#222',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        borderRadius: '8px',
                                        padding: '6px 20px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                                    }}
                                >
                                    <span
                                        className="text-white font-black italic tracking-widest text-lg sm:text-xl md:text-2xl uppercase"
                                        style={{ fontFamily: 'var(--title-font)' }}
                                    >
                                        FLAVIA ZAALA
                                    </span>
                                </div>

                                <div
                                    className="relative rounded-[20px] overflow-hidden w-full max-w-[360px] md:max-w-none md:w-[320px]"
                                    style={{
                                        border: `1px solid ${ACCENT}40`,
                                        boxShadow: `0 0 20px ${ACCENT}10`,
                                    }}
                                >
                                    <img
                                        src={flaviaImg}
                                        alt="Flavia Zaala"
                                        className="w-full h-auto aspect-[4/5] sm:aspect-auto object-cover sm:h-[400px] md:w-[320px] md:h-[420px]"
                                    />
                                    {/* Gradient overlay at bottom to blend car if needed, removed for exact match */}
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="flex-1 flex flex-col gap-8 items-center md:items-start text-center md:text-left mt-4 md:mt-10">

                                {/* Divider - removed top title from here */}
                                <div
                                    className="h-px w-16 md:w-20"
                                    style={{
                                        background: `linear-gradient(90deg, ${ACCENT}60, transparent)`,
                                    }}
                                />

                                <p
                                    className="text-sm sm:text-base md:text-lg leading-relaxed"
                                    style={{
                                        fontFamily: 'var(--subtitle-font)',
                                        color: 'rgba(255,255,255,0.6)',
                                    }}
                                >
                                    A Estratégia{' '}
                                    <strong className="text-white font-semibold">Mapa do Dólar</strong> foi construída por{' '}
                                    <strong style={{ color: ACCENT }} className="font-semibold">
                                        Flavia Zaala
                                    </strong>
                                    , estrategista digital especializada em estruturação e escala de operações no mercado internacional.
                                </p>

                                {/* Subtitle */}
                                <p
                                    className="text-xs sm:text-sm tracking-wider uppercase font-semibold"
                                    style={{
                                        fontFamily: 'var(--subtitle-font)',
                                        color: 'rgba(255,255,255,0.3)',
                                    }}
                                >
                                    Ao longo dos últimos anos:
                                </p>

                                {/* Checkpoints */}
                                <div className="flex flex-col gap-4 items-center md:items-start">
                                    {checkpoints.map((text, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center sm:items-start gap-3 w-full max-w-[500px]"
                                        >
                                            {/* Check icon */}
                                            <div
                                                className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center mt-0.5"
                                                style={{
                                                    backgroundColor: `${ACCENT}12`,
                                                    border: `1px solid ${ACCENT}25`,
                                                }}
                                            >
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke={ACCENT}
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                            <p
                                                className="text-base sm:text-lg leading-relaxed text-left sm:text-center md:text-left"
                                                style={{
                                                    fontFamily: 'var(--subtitle-font)',
                                                    color: 'rgba(255,255,255,0.5)',
                                                }}
                                            >
                                                {text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom closing statement */}
                        <div
                            className="pt-4 w-full"
                            style={{
                                borderTop: '1px solid rgba(255,255,255,0.06)',
                            }}
                        >
                            <p
                                className="text-base sm:text-lg md:text-xl font-semibold text-center mb-6"
                                style={{
                                    fontFamily: 'var(--title-font)',
                                    color: 'rgba(255,255,255,0.8)',
                                    lineHeight: 1.5,
                                }}
                            >
                                O foco nunca foi aparecer.<br className="hidden sm:block" />
                                <span style={{ color: ACCENT }}>
                                    Sempre foi estruturar operações que escalam.
                                </span>
                                <br className="hidden sm:block" />
                                <span className="text-white">
                                    E é exatamente essa visão estratégica que será aplicada na sua análise.
                                </span>
                            </p>

                            <div className="flex justify-center">
                                <SovereignButton>
                                    🔘 CLIQUE AGORA PARA AGENDAR SUA REUNIÃO
                                </SovereignButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
