import React from 'react';
import { SovereignButton } from './SovereignButton';
import { CheckCircle2 } from 'lucide-react';

const ACCENT = '#F5D060';
const BG = '#000000';
const CARD_BG = '#080808';

export const ParaQuem: React.FC = () => {
    const items = [
        { text: 'Se você já rodou infoproduto ou mercado de afiliados no Brasil, e percebeu que escalabilidade por lá tem um teto claro;' },
        { text: 'Se você já vende na internet, mas entendeu que ticket baixo e moedas fracas exigem um volume de tráfego que, hoje, mata sua margem;' },
        { text: 'Para profissionais de alta renda que cansaram de depender de indicação ou vender o próprio tempo, e buscam uma operação em dólar escalável;' },
        { text: 'Se você ainda atua no mercado corporativo ou CLT, mas não aceita mais vender sua hora enquanto vê o custo de vida subir e o seu poder de compra cair;' },
        { text: 'Se você já ganha R$10k-R$30k mês, mas entende que para construir um patrimônio inabalável, precisa jogar em moeda forte;' },
        { text: 'Se você já fez Dropshipping, tem o domínio tático de comprar anúncios, mas não aguenta mais lidar com margens apertadas e problemas de logística;' },
        { text: 'Se você busca operar forte no digital, construir uma empresa de valor, mas prefere se manter como bastidor, sem precisar criar conteúdo ou depender de imagem;' },
        { text: 'E para Gestores de Tráfego que estão cansados de dar excelentes resultados para os outros enquanto limitam o próprio ganho no processo, buscando ter um negócio próprio.' },
    ];

    return (
        <section
            id="para-quem-section"
            className="relative w-full py-4 px-4 sm:px-8 flex justify-center overflow-hidden z-20"
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
                        className="text-[length:var(--mobile-title-size)] sm:text-[length:var(--desktop-title-size)] font-bold text-white leading-tight uppercase mb-0 sm:mb-2"
                        style={{
                            fontFamily: 'var(--title-font)'
                        }}
                    >
                        <span className="animate-flame">🔥</span> Para quem é indicada essa <span style={{ color: ACCENT }}>reunião estratégica</span>?
                    </h2>
                    <p
                        className="text-[#a0a8b8] text-lg sm:text-xl font-medium mt-0 sm:mt-2"
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

                            {/* Content List */}
                            <div className="w-full relative z-10 pt-4 pb-2 px-4 sm:pt-6 sm:pb-3 sm:px-6 mb-0">
                                <div className="flex flex-col gap-2">
                                    {items.map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex flex-row items-start gap-3 pt-4 pb-1 px-3 sm:pt-5 sm:pb-2 sm:px-4 rounded-lg border border-white/5 transition-colors duration-300 hover:border-white/10"
                                            style={{
                                                backgroundColor: 'rgba(255,255,255,0.03)',
                                            }}
                                        >
                                            <div className="flex-shrink-0 mt-0.5">
                                                <div className="flex items-center justify-center w-6 h-6 rounded-full" style={{ color: ACCENT }}>
                                                    <CheckCircle2 size={24} strokeWidth={1.5} />
                                                </div>
                                            </div>
                                            <p
                                                className="text-[#e2e8f0] text-[15px] sm:text-base leading-snug mb-0"
                                                style={{ fontFamily: 'var(--subtitle-font)' }}
                                            >
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="flex flex-col items-center gap-6 text-center mt-0 sm:mt-2">
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
