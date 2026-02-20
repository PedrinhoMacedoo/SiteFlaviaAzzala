import React, { useState } from 'react';

const ACCENT = '#F5D060';
const BG = '#000000';
const CARD_BG = '#080808';

export const ParaQuem: React.FC = () => {
    const items = [
        { bold: 'Empreendedores Digitais', text: 'Que já rodaram infoproduto ou afiliado no Brasil e travaram na escala.' },
        { bold: 'Operadores de DropShipping', text: 'Que dominam tráfego, mas cansaram de margem espremida, bloqueios e logística ruim.' },
        { bold: 'Gestores de Tráfego', text: 'Que sabem gerar vendas para outros e querem estruturar uma operação própria com lucro real.' },
        { bold: 'Profissionais de Alta Renda', text: 'Médicos, empresários e executivos que querem diversificar capital.' },
        { bold: 'Inconformados com o CLT', text: 'Quem não aceita mais vender a hora por valor fixo enquanto o poder de compra cai.' },
        { bold: 'Quem busca moeda forte', text: 'Pessoas que querem sair da faixa dos R$10k–R$30k/mês para jogar em Dólar.' },
        { bold: 'Perfil "Low Profile"', text: 'Para quem quer operar no digital sem precisar aparecer ou criar conteúdo.' },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section
            id="para-quem-section"
            className="relative w-full py-20 sm:py-28 px-4 sm:px-8 flex justify-center overflow-hidden z-20"
            style={{ backgroundColor: BG }}
        >
            {/* Background glow */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-[0.06] pointer-events-none"
                style={{ backgroundColor: ACCENT }}
            />

            <div className="max-w-[1300px] w-full flex flex-col items-center gap-16 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col items-center gap-5 text-center scroll-top delay-200">
                    <div className="inline-flex items-center self-center px-4 py-2 rounded-full border border-white/10 bg-white/5">
                        <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: ACCENT }} />
                        <span
                            className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase"
                            style={{ fontFamily: 'var(--subtitle-font)' }}
                        >
                            PARA QUEM É
                        </span>
                    </div>

                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
                        style={{ fontFamily: 'var(--title-font)' }}
                    >
                        Para quem é indicada a{' '}
                        <span style={{ color: ACCENT }}>Reunião Estratégica</span>?
                    </h2>

                    <p
                        className="text-[#a0a8b8] text-base sm:text-lg max-w-2xl"
                        style={{ fontFamily: 'var(--subtitle-font)' }}
                    >
                        Se você for selecionado, criaremos um plano personalizado. Mas essa análise é exclusiva para:
                    </p>
                </div>

                {/* Dollar Icon */}
                <div className="scroll-top delay-400 flex justify-center">
                    <div
                        className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110"
                        style={{
                            backgroundColor: `${ACCENT}10`,
                            border: `2px solid ${ACCENT}30`,
                        }}
                    >
                        <div
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{
                                boxShadow: `0 0 25px 5px ${ACCENT}40, 0 0 60px 10px ${ACCENT}20, inset 0 0 20px 2px ${ACCENT}15`,
                            }}
                        />
                        <div
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
                            style={{
                                animation: 'dollarPulse 1.5s ease-out infinite',
                                border: `2px solid ${ACCENT}`,
                            }}
                        />
                        <span
                            className="text-3xl sm:text-4xl font-bold transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(245,208,96,0.8)]"
                            style={{
                                color: ACCENT,
                                fontFamily: 'var(--title-font)',
                            }}
                        >
                            $
                        </span>
                    </div>
                    <style>{`
                        @keyframes dollarPulse {
                            0% { transform: scale(1); opacity: 0.6; }
                            100% { transform: scale(1.6); opacity: 0; }
                        }
                    `}</style>
                </div>

                {/* Card */}
                <div className="w-full scroll-top delay-600">
                    <div className="group relative" style={{ perspective: '1200px', cursor: 'default' }}>
                        <div
                            className="absolute opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none"
                            style={{
                                inset: '10%',
                                borderRadius: '3rem',
                                background: ACCENT,
                                filter: 'blur(50px)',
                                zIndex: -1,
                            }}
                        />

                        <div
                            className="relative flex flex-col items-center overflow-hidden transition-all duration-500"
                            style={{
                                backgroundColor: CARD_BG,
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '1.25rem',
                                padding: '2.5rem 2rem 3rem 2rem',
                                boxShadow: '0 0 0 1px rgba(0,0,0,1), 0 20px 40px -10px rgba(0,0,0,0.8)',
                            }}
                        >
                            {/* Subtle gradient at top */}
                            <div
                                className="absolute top-0 left-0 w-full h-44 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at 50% 0%, ${ACCENT}08, transparent 70%)`,
                                }}
                            />

                            {/* Titles — centered pills */}
                            <div className="flex flex-wrap justify-center gap-3 relative z-10 w-full">
                                {items.map((item, i) => {
                                    const isActive = activeIndex === i;
                                    return (
                                        <button
                                            key={i}
                                            onClick={() => setActiveIndex(isActive ? null : i)}
                                            className="relative px-5 py-3 rounded-lg text-sm sm:text-[15px] font-semibold transition-all duration-400 cursor-pointer select-none"
                                            style={{
                                                fontFamily: 'var(--subtitle-font)',
                                                color: isActive ? '#000' : '#fff',
                                                backgroundColor: isActive ? ACCENT : 'rgba(255,255,255,0.04)',
                                                border: `1px solid ${isActive ? ACCENT : 'rgba(255,255,255,0.08)'}`,
                                                boxShadow: isActive
                                                    ? `0 0 20px ${ACCENT}30, 0 4px 12px rgba(0,0,0,0.4)`
                                                    : '0 2px 8px rgba(0,0,0,0.3)',
                                                transform: isActive ? 'scale(1.03)' : 'scale(1)',
                                            }}
                                        >
                                            {/* Active dot */}
                                            <span
                                                className="inline-block w-2 h-2 rounded-full mr-2 transition-all duration-300"
                                                style={{
                                                    backgroundColor: isActive ? '#000' : ACCENT,
                                                    opacity: isActive ? 0.6 : 0.5,
                                                    transform: isActive ? 'scale(1.2)' : 'scale(1)',
                                                }}
                                            />
                                            {item.bold}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Description area */}
                            <div
                                className="relative z-10 w-full flex justify-center overflow-hidden transition-all duration-500 ease-out"
                                style={{
                                    maxHeight: activeIndex !== null ? '140px' : '0px',
                                    marginTop: activeIndex !== null ? '2rem' : '0',
                                    opacity: activeIndex !== null ? 1 : 0,
                                }}
                            >
                                <div
                                    className="text-center max-w-xl px-4"
                                    style={{
                                        transition: 'transform 0.4s ease, opacity 0.4s ease',
                                    }}
                                >
                                    {/* Top line accent */}
                                    <div
                                        className="w-10 h-[2px] rounded-full mx-auto mb-4 transition-all duration-500"
                                        style={{
                                            backgroundColor: ACCENT,
                                            opacity: activeIndex !== null ? 0.6 : 0,
                                        }}
                                    />
                                    <p
                                        className="text-[#c0c8d8] text-base sm:text-lg leading-relaxed"
                                        style={{ fontFamily: 'var(--subtitle-font)' }}
                                    >
                                        {activeIndex !== null ? items[activeIndex].text : ''}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button — Same liquid style as Hero */}
                <div className="scroll-top delay-600 flex justify-center">
                    <button className="liquid-btn">
                        <div className="border-layer"></div>
                        <div className="glass-body">
                            <span className="text-content">VERIFICAR DISPONIBILIDADE DE AGENDA</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-arrow">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};
