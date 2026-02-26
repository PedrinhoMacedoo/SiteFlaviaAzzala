import React from 'react';
import { SovereignButton } from './SovereignButton';
import flaviaImg from '../assets/3eeda1ff02e6cf2c4adbd6efaf62e9b79bd59771.png';

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
            className="relative w-full py-10 sm:py-24 px-4 sm:px-8 flex justify-center overflow-hidden z-20"
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

            <div className="max-w-[1100px] w-full flex flex-col items-center gap-14 relative z-10">

                {/* Section Tag */}
                <div className="flex flex-col items-center gap-5 text-center scroll-top delay-200">
                    <div className="inline-flex items-center self-center px-4 py-2 rounded-full border border-white/10 bg-white/5">
                        <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: ACCENT }} />
                        <span
                            className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase"
                            style={{ fontFamily: 'var(--subtitle-font)' }}
                        >
                            QUEM FAZ
                        </span>
                    </div>
                </div>

                {/* Main Content — Photo + Text */}
                <div
                    className="w-full rounded-3xl p-8 sm:p-12 md:p-16 scroll-top delay-200 relative overflow-hidden"
                    style={{
                        backgroundColor: '#080808',
                        border: '1px solid rgba(255,255,255,0.06)',
                    }}
                >
                    {/* Corner accent */}
                    <div
                        className="absolute top-0 left-0 w-40 h-40 opacity-10 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at top left, ${ACCENT}40, transparent 70%)`,
                        }}
                    />

                    <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center md:items-start relative z-10">

                        {/* Left: Photo */}
                        <div className="flex-shrink-0 flex flex-col items-center gap-4 w-full md:w-auto">
                            <div
                                className="relative rounded-2xl overflow-hidden"
                                style={{
                                    border: `2px solid ${ACCENT}30`,
                                    boxShadow: `0 0 40px ${ACCENT}10, 0 20px 60px rgba(0,0,0,0.5)`,
                                }}
                            >
                                <img
                                    src={flaviaImg}
                                    alt="Flavia Zaala"
                                    className="w-[200px] h-[260px] sm:w-[240px] sm:h-[310px] md:w-[280px] md:h-[360px] object-cover"
                                />
                                {/* Gradient overlay at bottom */}
                                <div
                                    className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(to top, #080808, transparent)',
                                    }}
                                />
                            </div>

                            {/* Name label under photo */}
                            <div className="text-center">
                                <p
                                    className="text-base sm:text-lg font-bold text-white"
                                    style={{ fontFamily: 'var(--title-font)' }}
                                >
                                    Flavia Zaala
                                </p>
                                <p
                                    className="text-xs sm:text-sm mt-1"
                                    style={{
                                        fontFamily: 'var(--subtitle-font)',
                                        color: ACCENT,
                                        opacity: 0.8,
                                    }}
                                >
                                    Estrategista Digital
                                </p>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="flex-1 flex flex-col gap-8 items-center md:items-start text-center md:text-left">

                            {/* Title */}
                            <h2
                                className="text-[length:var(--mobile-title-size)] sm:text-[length:var(--desktop-title-size)] font-bold text-white leading-tight"
                                style={{ fontFamily: 'var(--title-font)', lineHeight: 1.3 }}
                            >
                                QUEM ESTÁ POR TRÁS DA{' '}
                                <span style={{ color: ACCENT }}>ESTRATÉGIA</span>
                            </h2>

                            {/* Divider */}
                            <div
                                className="h-px w-20"
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
                                            className="text-sm sm:text-base leading-relaxed text-left sm:text-center md:text-left"
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
                        className="mt-10 pt-8"
                        style={{
                            borderTop: '1px solid rgba(255,255,255,0.06)',
                        }}
                    >
                        <p
                            className="text-base sm:text-lg md:text-xl font-semibold text-center mb-8"
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
        </section>
    );
};
