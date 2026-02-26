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
                            className="relative w-full flex flex-col items-center overflow-hidden transition-all duration-500"
                            style={{
                                backgroundColor: CARD_BG,
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '1.5rem',
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

                            {/* Content Grid */}
                            <div className="w-full relative z-10 p-5 sm:p-10 mb-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                                    {items.map((item, i) => {
                                        const isActive = activeIndex === i;
                                        return (
                                            <div key={i} className="flex flex-col w-full">
                                                <button
                                                    onClick={() => setActiveIndex(isActive ? null : i)}
                                                    className="relative w-full px-5 py-5 rounded-xl text-sm sm:text-[15px] font-semibold transition-all duration-400 cursor-pointer select-none text-left flex items-center"
                                                    style={{
                                                        fontFamily: 'var(--subtitle-font)',
                                                        color: isActive ? '#000' : '#fff',
                                                        backgroundColor: isActive ? ACCENT : 'rgba(255,255,255,0.04)',
                                                        border: `1px solid ${isActive ? ACCENT : 'rgba(255,255,255,0.08)'}`,
                                                        boxShadow: isActive
                                                            ? `0 10px 25px ${ACCENT}25, 0 4px 12px rgba(0,0,0,0.4)`
                                                            : '0 2px 8px rgba(0,0,0,0.1)',
                                                        transform: isActive ? 'scale(1.02)' : 'scale(1)',
                                                        zIndex: isActive ? 10 : 1,
                                                    }}
                                                >
                                                    <span
                                                        className="inline-block w-2.5 h-2.5 rounded-full mr-4 transition-all duration-300 flex-shrink-0"
                                                        style={{
                                                            backgroundColor: isActive ? '#000' : ACCENT,
                                                            opacity: isActive ? 0.7 : 0.5,
                                                        }}
                                                    />
                                                    {item.bold}
                                                </button>

                                                {/* Expandable Text directly below card */}
                                                <div
                                                    className={`transition-all duration-500 overflow-hidden ${isActive ? 'opacity-100 mt-3' : 'opacity-0 h-0 mt-0'}`}
                                                    style={{
                                                        maxHeight: isActive ? '200px' : '0px',
                                                    }}
                                                >
                                                    <div
                                                        className="px-5 py-4 rounded-xl"
                                                        style={{
                                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                                            border: `1px solid rgba(255,255,255,0.05)`,
                                                            transform: isActive ? 'translateY(0)' : 'translateY(-10px)',
                                                            transition: 'transform 0.5s ease-out'
                                                        }}
                                                    >
                                                        <p
                                                            className="text-[#a0a8b8] text-sm sm:text-[15px] leading-relaxed"
                                                            style={{ fontFamily: 'var(--subtitle-font)' }}
                                                        >
                                                            {item.text}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
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
