import React from 'react';
import { SovereignButton } from './SovereignButton';
import { CheckCircle2 } from 'lucide-react';

const ACCENT = '#F5D060';
const BG = '#000000';

export const ParaQuem: React.FC = () => {
    const items = [
        { text: 'Pessoas que já rodaram infoproduto ou afiliado no Brasil, e travaram na escala' },
        { text: 'Quem já vende na internet, mas percebeu que ticket baixo exige volume absurdo' },
        { text: 'Profissionais de alta renda como médicos, dentistas, corretores, empresários e executivos…' },
        { text: 'Pessoas que trabalham na CLT e não aceitam mais vender sua hora por um valor fixo enquanto veem o custo de vida subir e o poder de compra cair' },
        { text: 'Quem quer sair da faixa dos R$10k–R$30k/mês e jogar em moeda forte' },
        { text: 'Operadores de DropShipping que já entenderam tráfego, mas estão cansados de margem espremida, bloqueios e logística' },
        { text: 'Quem quer operar no digital sem precisar aparecer, criar conteúdo ou depender de audiência' },
        { text: 'Gestores de tráfego local que já sabem gerar vendas para outros negócios, mas querem estruturar uma operação própria com margem real' },
    ];

    return (
        <section
            id="para-quem-section"
            className="relative w-full py-[var(--section-py-mobile)] md:py-[var(--section-py)] px-4 sm:px-8 flex justify-center overflow-hidden z-20"
            style={{ backgroundColor: BG }}
        >
            {/* Background glow */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-[0.06] pointer-events-none"
                style={{ backgroundColor: ACCENT }}
            />

            <div className="max-w-[1100px] w-full flex flex-col items-center gap-6 relative z-10">

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
                        id="para-quem-title"
                        className="text-[length:var(--mobile-title-size)] sm:text-[length:var(--desktop-title-size)] font-bold text-white leading-tight uppercase mb-0 sm:mb-2"
                        style={{ fontFamily: 'var(--title-font)' }}
                    >
                        <span className="line1"><span className="animate-flame">🔥</span> Para quem é indicada essa </span>
                        <span className="line2" style={{ color: ACCENT }}>reunião estratégica?</span>
                    </h2>
                    <style>{`
                        @media (max-width: 768px) {
                            #para-quem-title {
                                font-size: clamp(1rem, 5.25vw, 2.5rem) !important;
                                display: flex !important;
                                flex-direction: column !important;
                                align-items: center !important;
                                width: 100% !important;
                                line-height: 1.2 !important;
                                letter-spacing: 0.02em !important;
                                padding: 0 10px !important;
                            }
                            #para-quem-title .line1 {
                                display: block !important;
                                white-space: nowrap !important;
                            }
                            #para-quem-title .line2 {
                                display: block !important;
                                white-space: nowrap !important;
                            }
                        }
                    `}</style>
                    <p
                        id="target-essa-analise"
                        className="font-bold mt-4 mb-4 text-[#a0a8b8]"
                        style={{ fontFamily: 'var(--subtitle-font)', fontSize: '26px', lineHeight: '1.2' }}
                    >
                        Essa análise é para:
                    </p>
                    <style>{`
                        @media (max-width: 768px) {
                            #target-essa-analise {
                                font-size: 26px !important;
                                font-weight: 700 !important;
                                display: block !important;
                                color: #a0a8b8 !important;
                            }
                        }
                    `}</style>
                </div>

                {/* Grid Container for Desktop / Stack for Mobile */}
                <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="group relative flex flex-row items-center gap-4 p-5 sm:p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] cursor-default"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                            }}
                        >
                            {/* Hover Shine Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                                style={{
                                    background: `linear-gradient(135deg, ${ACCENT}08 0%, transparent 100%)`,
                                    border: `1px solid ${ACCENT}20`,
                                }}
                            />

                            <div className="flex-shrink-0 relative z-10">
                                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/[0.03] border border-white/5 transition-all duration-500 group-hover:border-[#F5D060]/30 group-hover:bg-[#F5D060]/10" style={{ color: ACCENT }}>
                                    <CheckCircle2 size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                                </div>
                            </div>

                            <p
                                className="text-[#e2e8f0] text-sm sm:text-[15px] leading-snug relative z-10 font-medium opa80 group-hover:opacity-100 transition-opacity"
                                style={{ fontFamily: 'var(--subtitle-font)' }}
                            >
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="flex flex-col items-center gap-6 text-center mt-0 sm:mt-2">
                    <p
                        className="text-[#a0a8b8] text-base sm:text-lg max-w-3xl leading-relaxed italic"
                        style={{ fontFamily: 'var(--subtitle-font)' }}
                    >
                        "Se você já entendeu que o jogo não é trabalhar mais — é escolher o mercado certo — <span className="text-white not-italic font-bold">essa reunião pode ser o próximo passo</span>"
                    </p>
                    <SovereignButton>
                        🔘 CLIQUE AGORA PARA AGENDAR SUA REUNIÃO
                    </SovereignButton>
                </div>
            </div>
        </section>
    );
};
