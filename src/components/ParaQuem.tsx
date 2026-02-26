import React, { useState } from 'react';
import { SovereignButton } from './SovereignButton';

const ACCENT = '#F5D060';
const BG = '#000000';
const CARD_BG = '#080808';

export const ParaQuem: React.FC = () => {
    const items = [
        { bold: 'Infoprodutores e Afiliados', text: 'Pessoas que já rodaram infoproduto ou afiliado no Brasil, e travaram na escala' },
        { bold: 'Ticket Baixo', text: 'Quem já vende na internet, mas percebeu que ticket baixo exige volume absurdo' },
        { bold: 'Alta Renda', text: 'Profissionais de alta renda como médicos, dentistas, corretores, empresários e executivos…' },
        { bold: 'Transição de CLT', text: 'Pessoas que trabalham na CLT e não aceitam mais vender sua hora por um valor fixo enquanto veem o custo de vida subir e o poder de compra cair' },
        { bold: 'Moeda Forte', text: 'Quem quer sair da faixa dos R$10k–R$30k/mês e jogar em moeda forte' },
        { bold: 'Dropshipping', text: 'Operadores de DropShipping que já entenderam tráfego, mas estão cansados de margem espremida, bloqueios e logística' },
        { bold: 'Low Profile', text: 'Quem quer operar no digital sem precisar aparecer, criar conteúdo ou depender de audiência' },
        { bold: 'Gestores de Tráfego', text: 'Gestores de tráfego local que já sabem gerar vendas para outros negócios, mas querem estruturar uma operação própria com margem real' }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section
            id="para-quem-section"
            className="relative w-full py-10 sm:py-28 px-4 sm:px-8 flex justify-center overflow-hidden z-20"
            style={{ backgroundColor: BG }}
        >
            {/* Background glow */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-[0.06] pointer-events-none"
                style={{ backgroundColor: ACCENT }}
            />

            <div className="max-w-[1100px] w-full flex flex-col items-center gap-12 relative z-10">

                {/* Section Header - Centered & Responsive Title */}
                <div className="flex flex-col items-center text-center w-full">
                    <style>{`
                        @keyframes flame-flicker {
                            0%, 100% { transform: scale(1) rotate(-2deg); filter: drop-shadow(0 0 5px rgba(255,165,0,0.6)); }
                            20% { transform: scale(1.1) rotate(2deg); filter: drop-shadow(0 0 10px rgba(255,69,0,0.8)); }
                            40% { transform: scale(0.95) rotate(-3deg); filter: drop-shadow(0 0 4px rgba(255,140,0,0.4)); }
                            60% { transform: scale(1.05) rotate(3deg); filter: drop-shadow(0 0 12px rgba(255,69,0,0.7)); }
                            80% { transform: scale(0.98) rotate(-1deg); filter: drop-shadow(0 0 6px rgba(255,165,0,0.5)); }
                        }
                        .animate-flame {
                            display: inline-block;
                            animation: flame-flicker 1.8s infinite ease-in-out;
                            filter: drop-shadow(0 0 8px rgba(255,100,0,0.4));
                            transform-origin: bottom center;
                        }
                    `}</style>
                    <h2
                        className="text-[length:var(--mobile-title-size)] sm:text-[length:var(--desktop-title-size)] font-bold text-white leading-tight uppercase mb-4"
                        style={{
                            fontFamily: 'var(--title-font)'
                        }}
                    >
                        <span className="animate-flame">🔥</span> Para quem é indicada essa <span style={{ color: ACCENT }}>reunião estratégica</span>?
                    </h2>
                    <p
                        className="text-[#a0a8b8] text-lg sm:text-xl font-medium mt-2"
                        style={{ fontFamily: 'var(--subtitle-font)' }}
                    >
                        Essa análise é para:
                    </p>
                </div>

                {/* Card Container */}
                <div className="w-full max-w-[1000px]">
                    <div className="group relative" style={{ perspective: '1200px', cursor: 'default' }}>
                        <div
                            className="relative flex flex-col items-center overflow-hidden transition-all duration-500"
                            style={{
                                backgroundColor: CARD_BG,
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '1.5rem',
                                padding: '3rem 2rem',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                            }}
                        >
                            {/* Ambient light effect */}
                            <div
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-44 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at 50% 0%, ${ACCENT}08, transparent 70%)`,
                                }}
                            />

                            {/* Buttons Grid - 2 columns on desktop to fill the width */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 w-full mb-12">
                                {items.map((item, i) => {
                                    const isActive = activeIndex === i;
                                    return (
                                        <button
                                            key={i}
                                            onClick={() => setActiveIndex(isActive ? null : i)}
                                            className="relative w-full px-5 py-5 rounded-xl text-sm sm:text-[15px] font-semibold transition-all duration-400 cursor-pointer select-none text-left"
                                            style={{
                                                fontFamily: 'var(--subtitle-font)',
                                                color: isActive ? '#000' : '#fff',
                                                backgroundColor: isActive ? ACCENT : 'rgba(255,255,255,0.04)',
                                                border: `1px solid ${isActive ? ACCENT : 'rgba(255,255,255,0.08)'}`,
                                                boxShadow: isActive
                                                    ? `0 10px 25px ${ACCENT}25, 0 4px 12px rgba(0,0,0,0.4)`
                                                    : '0 2px 8px rgba(0,0,0,0.1)',
                                                transform: isActive ? 'scale(1.02)' : 'scale(1)',
                                            }}
                                        >
                                            <span
                                                className="inline-block w-2.5 h-2.5 rounded-full mr-4 transition-all duration-300"
                                                style={{
                                                    backgroundColor: isActive ? '#000' : ACCENT,
                                                    opacity: isActive ? 0.7 : 0.5,
                                                }}
                                            />
                                            {item.bold}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Center Description Area - Fills the empty space below grid */}
                            <div
                                className="relative z-10 w-full flex flex-col items-center justify-start transition-all duration-500 ease-out"
                                style={{
                                    minHeight: activeIndex !== null ? '120px' : '0px',
                                    opacity: activeIndex !== null ? 1 : 0,
                                }}
                            >
                                {activeIndex !== null ? (
                                    <div
                                        className="w-full max-w-3xl text-center bg-white/[0.02] border border-white/5 p-8 rounded-2xl animate-in fade-in zoom-in-95 duration-500"
                                    >
                                        <div
                                            className="w-12 h-[3px] rounded-full mb-6 mx-auto"
                                            style={{
                                                backgroundColor: ACCENT,
                                                boxShadow: `0 0 15px ${ACCENT}40`
                                            }}
                                        />
                                        <p
                                            className="text-[#c0c8d8] text-lg sm:text-xl leading-relaxed font-medium"
                                            style={{
                                                fontFamily: 'var(--subtitle-font)',
                                            }}
                                        >
                                            ✔ {items[activeIndex].text}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-6 opacity-30">
                                        <p className="text-[#a0a8b8] italic text-sm" style={{ fontFamily: 'var(--subtitle-font)' }}>
                                            Clique em um dos perfis acima para ver os detalhes
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="flex flex-col items-center gap-8 text-center mt-4">
                    <p
                        className="text-[#a0a8b8] text-base sm:text-lg max-w-3xl leading-relaxed italic"
                        style={{ fontFamily: 'var(--subtitle-font)' }}
                    >
                        "Se você já entendeu que o jogo não é trabalhar mais — é escolher o mercado certo — <span className="text-white not-italic font-bold">essa reunião pode ser o próximo passo.</span>"
                    </p>
                    <SovereignButton>
                        🔘 CLIQUE AGORA PARA AGENDAR SUA REUNIÃO
                    </SovereignButton>
                </div>
            </div>
        </section>
    );
};
